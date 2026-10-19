# AGENTS.md

给 AI 编码代理（OpenAI Codex、Cursor、GitHub Copilot、Claude Code、Codely 等）的项目说明。读完这一份就可以接手开发。

## 这个仓库是什么

一本中文书：**《如何构建一个好游戏》**。站点即书——正文、插图、图表与代码在同一个仓库里一起版本管理。

- 线上：<https://neko233-com.github.io/how-to-build-a-good-game/>
- 技术栈：React 19 + Vite 8（经 Vite+ 统一管理）+ Tailwind CSS v4 + MDX
- 部署：GitHub Pages，**只有打 tag 才发布**（普通 push 只跑 CI 校验）

人类可读的完整说明在 [README.md](./README.md)；本文件聚焦「动手前必须知道的事」。

## 常用命令

```bash
npm install        # 安装依赖（不需要全局装 Vite+，项目内自带）
npm run dev        # 开发服务器
npm run build      # 生产构建到 dist/
npm run check      # 格式 + Lint + 类型检查（--fix 自动修复）
npm run test       # 单元测试
npm run verify     # 全站渲染验证（见下文「验证」）
```

如果环境里有全局 `vp` 命令（Vite+ CLI），`vp dev` / `vp build` / `vp check` / `vp test` 与上面等价。CI 里用的是 `vp install --frozen-lockfile`（锁文件不一致会直接失败——**改了 package.json 必须同步提交锁文件**）。

写完任何内容后跑一次 `npm run check -- --fix`（Oxfmt 会重排 Markdown 表格），否则 CI 的格式化检查会拦下。

## 数据流：理解这个项目的关键

**`src/content/meta.ts` 是全书章节的唯一数据源。** 目录、上下章导航、首页概览全部由它驱动；章节正文通过 `slug` 与它对应。

```
src/content/meta.ts          ← 章节清单（slug/title/short/summary/part/status）
src/content/chapters/<slug>.mdx    ← 正式章节（文件名必须等于 slug）
src/content/appendix/<slug>.mdx    ← 附录
src/lib/content.ts           ← 按 slug 把 mdx 装配成路由（import.meta.glob）
src/components/charts/       ← 手写 SVG 图表（无图表库依赖）
src/components/mdx/          ← 注入给 MDX 正文的组件
src/components/bits/         ← ReactBits 复制式组件
src/styles/index.css         ← 设计 token + 正文排版
```

`src/lib/content.test.ts` 会校验「清单里每章都有 mdx 文件、没有孤儿 mdx」——**漏建或多余文件会挂测试**。

## 怎么写一章

1. 在 `meta.ts` 的 `CHAPTERS` 数组登记：`slug`、`order`、`title`、`short`（目录用短标题）、`summary`、`part`。数组顺序就是阅读顺序。
2. 新建 `src/content/chapters/<slug>.mdx`（文件名 = slug）。
3. 按书的结构写：**钩子 → 论点 → 证据 → 图 → 反方观点 → 可执行清单**，结尾用 `<KeyPoints>`。
4. 写完在该章条目加 `status: 'written'`（草稿提示会自动消失）。
5. 跑 `npm run check -- --fix`，再跑 `npm run verify`。

## 硬性规范（违反会被 CI 或 verify 拦下）

- **MDX 里 JSX 块内的 Markdown 必须用空行分隔**，否则表格会被当成一行普通文本输出（verify 有专项断言）：

  ```mdx
  <CompareTable caption="…">

  | 列一 | 列二 |
  | ---- | ---- |
  | …    | …    |

  </CompareTable>
  ```

- **MDX 不支持 <url> 形式的自动链接**，<https://…> 会被当成 JSX 标签并报错（Unexpected character / before local name）。一律写成 [文字](url)。
- **每处引述必须带出处链接与可信度分级**（一手来源 / 权威媒体 / 二手转述 / 未核实）。找不到一手来源就如实写「未核实」或「查无一手出处」，**不许编造**。已登记的引述见附录 A（`src/content/appendix/references.mdx`）。
- **粗体里不要放 CJK 引号「」，句末标点也放在粗体外面**。CommonMark 与 CJK 标点的边界问题：`**「经验」和「原理」**。` 与 `**AA。**汉字` 都会**静默变成字面星号**（不报错，直接显示出来）。正确写法是 `**经验与原理的区分**。`。验证方式：用 `@mdx-js/mdx` 的 `compile()` 编译，产物里不应出现 `**`。
- **推理用的示意数字必须标注**「示意」，不许伪装成行业统计。本书不提供「行业平均留存/付费率」之类的数字。
- **图片必须有 `alt`**；`public/` 下的资源路径必须经 `assetUrl()`（处理 GitHub Pages 子路径的 base 前缀）。
- **`.prose-book` 的排版规则一律用直接子元素选择器**（`.prose-book > h2`）。用后代选择器会以更高特异性覆盖组件自己的样式（QuoteCard 变灰斜体、KeyPoints 多出圆点——真踩过）。
- 图表配色用 Tailwind 颜色类（如 `fill-primary`），不要写死色值——它们跟随明暗主题。**注意 `@theme inline` 不生成 `--color-*` 变量**，别在 SVG 属性里引用 `var(--color-primary)`。
- 主题在 `index.html` 的内联脚本里于首屏前设定；改 base 路径时**必须同步改 `index.html` 与 `public/404.html` 两处脚本**。

## 验证

```bash
npm run build     # verify 需要 dist/
npm run verify
```

脚本自带静态服务器并**刻意模拟 GitHub Pages 对未命中路径返回 404.html 的行为**，因此每个章节都走真实的深链接兜底链路。断言覆盖：渲染、路由还原、无残留 Markdown、图片可达、锚点唯一、目录与标题一一对应、对比度 ≥ 4.5、标题层级不跳级、表格有表头、站内链接有效、已完成章节至少一张图、外部链接健康。

报告输出到 `docs/verification-report.md`——**它是生成物**，已被 `.prettierignore` 排除出格式化检查，不要手工编辑，也不要把它移出忽略名单（否则每次重跑验证 CI 都会挂）。

调试单个页面：`VERIFY_ONLY=<标签子串> npm run verify`。

## 发布

```bash
git tag -a v0.3.0 -m "v0.3.0：……"
git push origin v0.3.0
```

`deploy.yml` 会跑完整校验后发布到 GitHub Pages。**普通 push 不会动线上。**

坑：`github-pages` 环境的部署策略**默认只允许默认分支**，tag 会被拒（`Tag "vX" is not allowed to deploy`）。本项目已放行 `main` 分支与 `v*` tag；新建同类仓库时要记得在 Settings → Environments → github-pages 里加 tag 规则。

## 踩过的坑（都修过，别再踩）

| 坑                        | 现象                                                  | 修法                                                          |
| ------------------------- | ----------------------------------------------------- | ------------------------------------------------------------- |
| MDX 表格贴着 JSX 标签     | 表格退化成一行带竖线的文本                            | 标签与 Markdown 之间留空行                                    |
| `base` 与还原路径直接拼接 | 深链接刷新落到 404（`//chapters/…`）                  | 两侧斜杠去重后再拼（`index.html`）                            |
| 主题在 useEffect 里才设定 | 首屏先亮后暗，带过渡色的元素闪灰                      | `index.html` 内联脚本首屏前设定                               |
| 后代选择器写正文排版      | 组件样式被覆盖                                        | 全部改直接子元素选择器                                        |
| 生成物进格式化检查        | 每次重跑验证 CI 就挂                                  | `.prettierignore` 排除报告                                    |
| 固定长度窗口解析 meta.ts  | 越界读到下一章的 status，骨架被当成已完稿             | 按条目边界（闭合大括号）解析                                  |
| 新增 mdx 后 glob 看不到   | Vite 转换缓存以**内容哈希**为键，写回相同内容不会失效 | 改动 `content.ts` 的内容让哈希变化，或删 `node_modules/.vite` |
| 粗体解析成字面星号        | CJK 标点紧跟闭合 `**`、或粗体内含「」                 | 标点放粗体外；用编译器测试兜底                                |
| `<>` 形式的 URL 自动链接  | MDX 当作 JSX 标签，报 `Unexpected character /`        | 一律写 `[文字](url)`                                          |

## 其他

- 许可：代码 MIT，正文与插图 CC BY-NC-SA 4.0（见 LICENSE / LICENSE-CONTENT）。
- 本书配套一个诊断 skill：`skills/game-audit/`（结构化访谈 + 七框架诊断），源文件随仓库版本管理。
- 附录 C 的链接校验状态分三档：可访问 / 站点拦截自动请求（403，需人工确认）/ 本机网络无法访问（校验环境限制）。**后两者不等于链接失效**。
