// @ts-nocheck
/**
 * 站点内容验证脚本
 *
 * 为什么要这么写：
 * 静态 HTML 里看不出「渲染后到底对不对」——残留的 Markdown、没加载成功的图片、
 * 匿名的锚点、对比度不足的文字，只有把页面真的渲染出来才能发现。
 * 所以脚本自己起一个静态服务器，用本机浏览器的无头模式打开每个页面，
 * 由一个同源探针页在浏览器内完成全部断言并把结果回传成 JSON，
 * Node 侧只负责调度、判定与生成报告。
 *
 * 静态服务器刻意模拟 GitHub Pages 的行为：命中不到文件时返回 404.html 的正文
 * 并附 404 状态码。因此每个章节都是通过「深链接兜底」这条真实链路访问的，
 * 顺便验证了刷新深链接不会落到 404。
 *
 * 用法：
 *   vp build
 *   node scripts/verify-site.mjs
 *
 * 环境变量：
 *   VERIFY_BROWSER  浏览器可执行文件路径
 *   VERIFY_PORT     静态服务器端口，默认 4199
 *   VERIFY_REPORT   报告输出路径，默认 docs/verification-report.md
 */

import { spawn } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { createServer } from 'node:http';
import { dirname, extname, join, normalize, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(ROOT, 'dist');
const PORT = Number(process.env.VERIFY_PORT ?? 4199);
const REPORT_PATH = resolve(ROOT, process.env.VERIFY_REPORT ?? 'docs/verification-report.md');
const PROBE_FILE = 'verify-probe.html';
const BROWSER_TIMEOUT_MS = 90_000;

/** 对比度下限，对应 WCAG AA 对正文的要求 */
const MIN_CONTRAST = 4.5;

/** 只跑标签包含该子串的页面，用于快速迭代 */
const ONLY = process.env.VERIFY_ONLY ?? '';

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.json': 'application/json; charset=utf-8',
  '.woff2': 'font/woff2',
};

const BROWSER_CANDIDATES = [
  process.env.VERIFY_BROWSER,
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  '/usr/bin/microsoft-edge',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].filter(Boolean);

function findBrowser() {
  for (const candidate of BROWSER_CANDIDATES) {
    if (existsSync(candidate)) return candidate;
  }
  throw new Error(
    `找不到浏览器可执行文件。已尝试：\n  ${BROWSER_CANDIDATES.join('\n  ')}\n` +
      '可用 VERIFY_BROWSER 环境变量指定路径。',
  );
}

/** 从 vite.config.ts 读 base，避免两处各写一遍 */
function readBase() {
  // 与 vite.config.ts 保持同一优先级：环境变量覆盖，否则用默认值
  if (process.env.SITE_BASE) return process.env.SITE_BASE;
  const matched = readFileSync(join(ROOT, 'vite.config.ts'), 'utf8').match(
    /DEFAULT_SITE_BASE\s*=\s*'([^']+)'/,
  );
  if (!matched) throw new Error('没有在 vite.config.ts 里找到 DEFAULT_SITE_BASE');
  return matched[1];
}

/**
 * 从 src/content/meta.ts 解析出全部路由。
 * 必须按「条目边界」解析：从 slug 起、到该条目的闭合大括号为止，
 * status 只在这段里找。用固定长度窗口会越界读到下一条目的 status，
 * 把骨架章节误判成已完成（这个 bug 真实发生过）。
 * 一旦数量异常就报错，不静默漏测。
 */
function readRoutes(base) {
  const source = readFileSync(join(ROOT, 'src/content/meta.ts'), 'utf8');
  const routes = [];
  const entryPattern = /slug:\s*'([^']+)'[\s\S]*?part:\s*'([^']+)'[\s\S]*?\}/g;
  let match;
  while ((match = entryPattern.exec(source)) !== null) {
    const statusMatch = match[0].match(/status:\s*'([^']+)'/);
    const prefix = match[2] === 'appendix' ? 'appendix' : 'chapters';
    routes.push({
      slug: match[1],
      path: `${base}${prefix}/${match[1]}`,
      written: statusMatch?.[1] === 'written',
    });
  }
  if (routes.length < 17) {
    throw new Error(`从 meta.ts 只解析出 ${routes.length} 条路由，疑似解析失败`);
  }
  return routes;
}

/** 探针页：在浏览器内做完所有测量，把结果写成 JSON 回传 */
function probeHtml() {
  return `<!doctype html>
<html lang="zh-CN"><head><meta charset="UTF-8"><title>verify</title></head>
<body><div id="out">PENDING</div>
<script>
const params = new URLSearchParams(location.search);
const theme = params.get('theme') === 'light' ? 'light' : 'dark';
const target = params.get('path');
try { localStorage.setItem('hbg-theme', theme); } catch (e) {}

const out = document.getElementById('out');
const frame = document.createElement('iframe');
frame.style.cssText = 'width:1440px;height:1200px;border:0';
frame.src = target;
document.body.appendChild(frame);

const canvas = document.createElement('canvas');
canvas.width = 1; canvas.height = 1;
const ctx = canvas.getContext('2d', { willReadFrequently: true });

/** 用 canvas 把任意 CSS 颜色写法（oklch / oklab / rgb / hex）归一化成 sRGB 像素 */
function toPixel(color) {
  ctx.clearRect(0, 0, 1, 1);
  ctx.fillStyle = '#000';
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, 1, 1);
  const d = ctx.getImageData(0, 0, 1, 1).data;
  return { r: d[0], g: d[1], b: d[2], a: d[3] / 255 };
}

function luminance({ r, g, b }) {
  const f = (v) => {
    const c = v / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
}

function contrast(a, b) {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

/** 沿祖先链合成半透明背景，得到实际看到的底色 */
function effectiveBackground(el, win) {
  const layers = [];
  let node = el;
  while (node) {
    const px = toPixel(win.getComputedStyle(node).backgroundColor);
    if (px.a > 0.001) layers.push(px);
    if (px.a >= 0.999) break;
    node = node.parentElement;
  }
  let acc = { r: 255, g: 255, b: 255 };
  for (let i = layers.length - 1; i >= 0; i -= 1) {
    const l = layers[i];
    acc = {
      r: l.r * l.a + acc.r * (1 - l.a),
      g: l.g * l.a + acc.g * (1 - l.a),
      b: l.b * l.a + acc.b * (1 - l.a),
    };
  }
  return acc;
}

/** 正文里不该出现的未解析 Markdown 痕迹 */
const MARKDOWN_HINTS = [
  { label: '表格分隔行', re: /\\|\\s*-{3,}\\s*\\|/ },
  { label: '粗体标记 **', re: /\\*\\*/ },
  { label: '行内代码反引号', re: /\`[^\`]+\`/ },
  { label: '标题井号', re: /(^|\\n)#{1,6}\\s/ },
  { label: '链接语法 ](', re: /\\]\\(/ },
];

function inspect() {
  const result = { ok: false, error: null };
  try {
    const doc = frame.contentDocument;
    const win = frame.contentWindow;

    const h1 = doc.querySelector('h1');
    if (!h1) {
      result.error = 'H1_MISSING';
      out.textContent = 'RESULT' + JSON.stringify(result) + 'END';
      return;
    }

    const prose = doc.querySelector('.prose-book');
    const bodyText = doc.body ? doc.body.innerText : '';
    const proseText = prose ? prose.innerText : '';

    const markdownHits = MARKDOWN_HINTS.filter((hint) => hint.re.test(proseText)).map(
      (hint) => hint.label,
    );

    const images = Array.from(doc.querySelectorAll('img')).map((img) => ({
      src: img.getAttribute('src') || '',
      alt: img.getAttribute('alt') || '',
      naturalWidth: img.naturalWidth,
    }));

    const headings = Array.from(doc.querySelectorAll('.prose-book h2, .prose-book h3')).map(
      (el) => ({ id: el.id || '', text: (el.textContent || '').trim() }),
    );

    const tocHrefs = Array.from(doc.querySelectorAll('nav[aria-label="本章目录"] a')).map((a) =>
      (a.getAttribute('href') || '').replace(/^#/, ''),
    );

    const navLinks = Array.from(doc.querySelectorAll('nav[aria-label="章节导航"] a')).map((a) =>
      a.getAttribute('href'),
    );

    const contrastTargets = [
      ['正文段落', doc.querySelector('.prose-book > p')],
      ['二级标题', doc.querySelector('.prose-book > h2')],
      ['侧栏目录项', doc.querySelector('nav[aria-label="全书目录"] a')],
      ['右侧小节目录', doc.querySelector('nav[aria-label="本章目录"] a')],
      ['表格表头', doc.querySelector('.prose-book th')],
      ['表格单元格', doc.querySelector('.prose-book td')],
      ['图注/出处行', doc.querySelector('figcaption')],
      ['章节主标题', h1],
    ];
    const contrastResults = [];
    for (const pair of contrastTargets) {
      const label = pair[0];
      const el = pair[1];
      if (!el) continue;
      const fg = toPixel(win.getComputedStyle(el).color);
      const bg = effectiveBackground(el, win);
      contrastResults.push({ label, ratio: Number(contrast(fg, bg).toFixed(2)) });
    }

    const externalHrefs = [];
    const internalHrefs = [];
    for (const anchor of Array.from(doc.querySelectorAll('a[href]'))) {
      const href = anchor.getAttribute('href') || '';
      if (href.startsWith('http')) externalHrefs.push(href);
      else if (href && href !== '#content' && !href.startsWith('#')) internalHrefs.push(href);
    }

    const headingLevels = Array.from(
      doc.querySelectorAll('main h1, main h2, main h3, main h4, main h5, main h6'),
    ).map((el) => Number(el.tagName.slice(1)));

    const tablesWithoutHeader = Array.from(doc.querySelectorAll('table')).filter(
      (table) => !table.querySelector('th'),
    ).length;

    const visualCount = prose ? prose.querySelectorAll('svg, img, figure, table').length : 0;

    result.ok = true;
    result.hasProse = !!prose;
    result.headingCount = headings.length;
    result.externalHrefs = externalHrefs;
    result.internalHrefs = internalHrefs;
    result.headingLevels = headingLevels;
    result.tablesWithoutHeader = tablesWithoutHeader;
    result.visualCount = visualCount;
    result.docTitle = doc.title;
    result.url = win.location.pathname;
    result.hasher = win.location.search;
    result.title = doc.title;
    result.h1 = (h1.textContent || '').trim();
    result.isApp404 = !prose && bodyText.includes('这一页没有内容');
    result.markdownHits = markdownHits;
    result.images = images;
    result.headings = headings;
    result.tocHrefs = tocHrefs;
    result.navLinks = navLinks;
    result.contrast = contrastResults;
  } catch (error) {
    result.error = String(error && error.message ? error.message : error);
  }
  out.textContent = 'RESULT' + JSON.stringify(result) + 'END';
}

let waited = 0;
const wait = setInterval(() => {
  waited += 1;
  let doc = null;
  try {
    doc = frame.contentDocument;
  } catch (e) {
    doc = null;
  }
  if (doc && doc.querySelector('h1')) {
    clearInterval(wait);
    // h1 出现只说明 React 已挂载；右侧目录是在 useEffect 里提取标题后
    // 的下一次渲染才出现的，所以要等页面稳定下来再量，否则会误判成目录为空。
    setTimeout(inspect, 900);
    return;
  }
  if (waited > 300) {
    clearInterval(wait);
    out.textContent = 'RESULT' + JSON.stringify({ ok: false, error: 'TIMEOUT_WAITING_MOUNT' }) + 'END';
  }
}, 100);
</script></body></html>`;
}

/** 静态服务器：命中就返回文件，未命中就模拟 GitHub Pages 返回 404.html */
function startStaticServer(base) {
  const server = createServer(async (req, res) => {
    const url = new URL(req.url ?? '/', 'http://localhost');
    const pathname = decodeURIComponent(url.pathname);

    if (!pathname.startsWith(base)) {
      res.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' });
      res.end('outside base');
      return;
    }

    const relative = pathname.slice(base.length);
    const target = normalize(join(DIST, relative === '' ? 'index.html' : relative));
    if (!target.startsWith(DIST + sep) && target !== join(DIST, 'index.html')) {
      res.writeHead(403, { 'content-type': 'text/plain; charset=utf-8' });
      res.end('forbidden');
      return;
    }

    try {
      const body = await readFile(target);
      res.writeHead(200, {
        'content-type': MIME[extname(target).toLowerCase()] ?? 'application/octet-stream',
      });
      res.end(body);
    } catch {
      try {
        const page = await readFile(join(DIST, '404.html'));
        res.writeHead(404, { 'content-type': 'text/html; charset=utf-8' });
        res.end(page);
      } catch {
        res.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' });
        res.end('not found');
      }
    }
  });

  return new Promise((resolvePromise, rejectPromise) => {
    server.on('error', rejectPromise);
    server.listen(PORT, () => resolvePromise(server));
  });
}

function runBrowser(browser, args) {
  return new Promise((resolvePromise, rejectPromise) => {
    const child = spawn(browser, args, { stdio: ['ignore', 'pipe', 'pipe'] });
    let stdout = '';
    const timer = setTimeout(() => {
      child.kill('SIGKILL');
      rejectPromise(new Error('浏览器执行超时'));
    }, BROWSER_TIMEOUT_MS);
    child.stdout.on('data', (chunk) => {
      stdout += chunk.toString();
    });
    child.on('error', (error) => {
      clearTimeout(timer);
      rejectPromise(error);
    });
    child.on('close', () => {
      clearTimeout(timer);
      resolvePromise(stdout);
    });
  });
}

function parseProbeResult(dom) {
  const matched = dom.match(/RESULT([\s\S]*?)END/);
  if (!matched) return { ok: false, error: 'PROBE_NO_OUTPUT' };
  try {
    return JSON.parse(matched[1]);
  } catch (error) {
    return { ok: false, error: `PROBE_JSON_INVALID: ${error.message}` };
  }
}

/**
 * 外链健康检查。
 * 分类口径必须区分三件事：404/5xx 是真失效；401/403/429 是站点不接受自动请求；
 * 网络错误是校验环境自己的限制。后两者都不等于链接失效，只如实记录。
 */
async function checkExternalLink(url) {
  const fetchCode = async (method) => {
    const res = await fetch(url, {
      method,
      redirect: 'follow',
      signal: AbortSignal.timeout(25000),
    });
    return res.status;
  };

  let code = null;
  try {
    code = await fetchCode('HEAD');
    if (code === 400 || code === 405) code = await fetchCode('GET');
  } catch {
    try {
      code = await fetchCode('GET');
    } catch {
      return { url, code: null, verdict: 'unreachable' };
    }
  }

  if (code >= 200 && code < 400) return { url, code, verdict: 'ok' };
  if (code === 401 || code === 403 || code === 429) return { url, code, verdict: 'blocked' };
  return { url, code, verdict: 'dead' };
}

async function main() {
  const base = readBase();
  const basePath = base.replace(/\/+$/, '');
  const routes = readRoutes(base);
  const browser = findBrowser();

  if (!existsSync(join(DIST, 'index.html'))) {
    throw new Error('没有找到 dist/index.html，请先执行 vp build');
  }

  writeFileSync(join(DIST, PROBE_FILE), probeHtml(), 'utf8');
  const server = await startStaticServer(base);

  const checks = [];
  const record = (name, pass, detail = '') => checks.push({ name, pass, detail });
  const allExternal = new Set();
  let linkResults = [];

  try {
    record('静态服务器就绪', true, `${basePath}/`);

    const knownPaths = new Set([base, ...routes.map((route) => route.path)]);

    const targets = [
      { label: '首页', path: `${base}`, direct: true },
      ...routes.map((route) => ({
        label: route.path.replace(base, ''),
        path: route.path,
        written: route.written,
      })),
      {
        label: '不存在的章节（应显示 404）',
        path: `${base}chapters/__does-not-exist__`,
        expect404: true,
      },
    ].filter((target) => !ONLY || target.label.includes(ONLY));

    for (const theme of ['dark', 'light']) {
      for (const target of targets) {
        const probeUrl =
          `${base}${PROBE_FILE}?theme=${theme}` + `&path=${encodeURIComponent(target.path)}`;
        const userDataDir = join(
          process.env.TEMP || '/tmp',
          `verify-${theme}-${target.label.replace(/[^a-zA-Z0-9]/g, '')}`.slice(0, 48),
        );
        rmSync(userDataDir, { recursive: true, force: true });

        const dom = await runBrowser(browser, [
          '--headless=new',
          '--disable-gpu',
          '--no-first-run',
          `--user-data-dir=${userDataDir}`,
          '--virtual-time-budget=25000',
          '--window-size=1440,1200',
          '--dump-dom',
          `http://localhost:${PORT}${probeUrl}`,
        ]);
        const data = parseProbeResult(dom);
        const tag = `${theme === 'dark' ? '暗色' : '亮色'} · ${target.label}`;

        if (!data.ok) {
          record(`${tag} 渲染`, false, data.error || '未知错误');
          continue;
        }

        if (target.expect404) {
          record(
            `${tag} 显示应用内 404`,
            data.isApp404 === true,
            data.isApp404 ? '正确' : '未显示',
          );
          continue;
        }

        record(`${tag} 渲染`, true, data.h1.slice(0, 36));

        const expectedPath = target.path.replace(/\/$/, '') || basePath;
        const actualPath = (data.url || '').replace(/\/$/, '') || basePath;
        record(
          `${tag} 路由地址正确（含深链接兜底还原）`,
          actualPath === expectedPath,
          `期望 ${expectedPath} / 实际 ${actualPath}`,
        );

        record(
          `${tag} 有正文容器`,
          data.hasProse === true,
          data.hasProse ? '' : '找不到 .prose-book',
        );
        record(
          `${tag} 无残留 Markdown`,
          data.markdownHits.length === 0,
          data.markdownHits.join('、'),
        );

        const badImages = data.images.filter((img) => !img.alt || !img.src.startsWith(base));
        record(
          `${tag} 图片有 alt 且带 base 前缀`,
          badImages.length === 0,
          badImages.map((img) => img.src || '(空 src)').join('、'),
        );
        const unloaded = data.images.filter((img) => img.naturalWidth === 0);
        record(
          `${tag} 图片实际加载成功`,
          unloaded.length === 0,
          `共 ${data.images.length} 张，失败 ${unloaded.length} 张`,
        );

        const ids = data.headings.map((h) => h.id);
        record(
          `${tag} 标题锚点唯一且非空`,
          ids.length === new Set(ids).size && ids.every((id) => id.length > 0),
          `共 ${ids.length} 个标题`,
        );
        const tocMatches =
          data.tocHrefs.length === ids.length && data.tocHrefs.every((href, i) => href === ids[i]);
        record(
          `${tag} 右侧目录与标题一一对应`,
          tocMatches,
          `目录 ${data.tocHrefs.length} 项 / 标题 ${ids.length} 项`,
        );

        const low = data.contrast.filter((c) => c.ratio < MIN_CONTRAST);
        record(
          `${tag} 文字对比度 ≥ ${MIN_CONTRAST}`,
          low.length === 0,
          low.length === 0
            ? `已测 ${data.contrast.length} 项，最低 ${Math.min(...data.contrast.map((c) => c.ratio))}`
            : low.map((c) => `${c.label} ${c.ratio}`).join('、'),
        );

        // 标题层级不允许跳级：h1 直接跟 h3 会让目录与语义结构都变得含混
        let headingJump = '';
        let headingOk = true;
        let previousLevel = 0;
        for (const level of data.headingLevels) {
          if (previousLevel && level > previousLevel + 1) {
            headingOk = false;
            headingJump = `h${previousLevel} → h${level}`;
            break;
          }
          if (level) previousLevel = level;
        }
        record(`${tag} 标题层级不跳级`, headingOk, headingJump);

        record(
          `${tag} 表格都有表头`,
          data.tablesWithoutHeader === 0,
          `${data.tablesWithoutHeader} 个无表头`,
        );

        record(
          `${tag} 页面标题包含书名`,
          (data.docTitle || '').includes('如何构建一个好游戏'),
          data.docTitle,
        );

        const badInternal = (data.internalHrefs || []).filter((href) => {
          const clean = href.split('#')[0];
          if (!clean) return false;
          return !knownPaths.has(clean) && !knownPaths.has(`${clean}/`);
        });
        record(
          `${tag} 站内链接指向存在的路由`,
          badInternal.length === 0,
          badInternal.slice(0, 3).join('、'),
        );

        if (target.written) {
          record(
            `${tag} 已完成章节至少有一张图`,
            data.visualCount > 0,
            `正文内视觉元素 ${data.visualCount} 个`,
          );
        }

        for (const href of data.externalHrefs || []) allExternal.add(href);
      }
    }
  } finally {
    server.close();
    rmSync(join(DIST, PROBE_FILE), { force: true });
  }

  // 外链健康：只有 404/5xx 算失败；401/403/429 是站点拦截自动请求；
  // 网络错误是校验环境的限制。后两者不等于链接失效，只如实分类记录。
  for (const url of [...allExternal].sort()) {
    linkResults.push(await checkExternalLink(url));
  }
  const deadLinks = linkResults.filter((l) => l.verdict === 'dead');
  record(
    `外部链接健康（共 ${linkResults.length} 条，失效 ${deadLinks.length} 条）`,
    deadLinks.length === 0,
    deadLinks.map((l) => `${l.url} → ${l.code}`).join('、'),
  );

  const failed = checks.filter((c) => !c.pass);
  const lines = [
    '# 站点内容验证报告',
    '',
    `- 运行时间：${new Date().toISOString()}`,
    `- 覆盖范围：首页 + ${routes.length} 个章节/附录 + 1 个不存在路径，深浅两种模式`,
    `- 每个章节均通过「深链接兜底」链路访问（模拟 GitHub Pages 对未命中路径返回 404.html）`,
    `- 断言总数：${checks.length}`,
    `- 外部链接：${linkResults.length} 条（失效 ${deadLinks.length}、拦截 ${
      linkResults.filter((l) => l.verdict === 'blocked').length
    }、本机网络不可达 ${linkResults.filter((l) => l.verdict === 'unreachable').length}）`,
    `- 结果：${failed.length === 0 ? '✅ 全部通过' : `❌ ${failed.length} 项未通过`}`,
    '',
    '> 本报告由 `node scripts/verify-site.mjs` 自动生成，请勿手工修改。',
    '',
    failed.length === 0 ? '## 未通过项\n\n无。' : '## 未通过项',
    '',
    ...(failed.length === 0
      ? []
      : failed.map((c) => `- ${c.name}${c.detail ? ` —— ${c.detail}` : ''}`)),
    '',
    '## 全部断言',
    '',
    '| 断言 | 结果 | 说明 |',
    '| --- | --- | --- |',
    ...checks.map(
      (c) => `| ${c.name} | ${c.pass ? '✅' : '❌'} | ${(c.detail || '').replace(/\|/g, '\\|')} |`,
    ),
    '',
    '## 外部链接健康',
    '',
    '分类口径：**失效**（404/5xx，真问题）；**站点拦截**（401/403/429，不接受自动请求，需人工在浏览器确认）；**本机网络无法访问**（校验环境的网络限制，不等于链接失效）。',
    '',
    '| 状态 | 状态码 | 链接 |',
    '| --- | --- | --- |',
    ...linkResults.map(
      (l) =>
        `| ${
          l.verdict === 'ok'
            ? '✅ 可访问'
            : l.verdict === 'dead'
              ? '❌ 疑似失效'
              : l.verdict === 'blocked'
                ? '⚠️ 站点拦截自动请求'
                : '⚠️ 本机网络无法访问'
        } | ${l.code ?? '—'} | ${l.url} |`,
    ),
    '',
  ];

  mkdirSync(dirname(REPORT_PATH), { recursive: true });
  writeFileSync(REPORT_PATH, lines.join('\n'), 'utf8');

  for (const check of failed) {
    console.log(`❌ ${check.name}${check.detail ? ` —— ${check.detail}` : ''}`);
  }
  console.log(`\n断言 ${checks.length} 项，未通过 ${failed.length} 项。报告：${REPORT_PATH}`);
  process.exitCode = failed.length === 0 ? 0 : 1;
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
