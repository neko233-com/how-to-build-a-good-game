import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

import mdx from '@mdx-js/rollup';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import remarkGfm from 'remark-gfm';
// Vite+ 用一个 vite.config.ts 统一管理 dev / build / test / lint / fmt
import { defineConfig } from 'vite-plus';

/**
 * 站点根路径。
 *
 * 两条发布链路的 base 不同：
 * - GitHub Pages 部署在 /<repo>/ 子路径下
 * - Cloudflare Pages 部署在根域名（note.neko233.com）下
 *
 * 所以 base 必须能按环境切换，否则另一条链路的所有资源都会 404。
 * CI 里通过 SITE_BASE 环境变量覆盖，本地不设则用 GitHub Pages 的默认值。
 */
const DEFAULT_SITE_BASE = '/how-to-build-a-good-game/';
const siteBase = process.env.SITE_BASE ?? DEFAULT_SITE_BASE;

/**
 * GitHub Pages 对未知深链接返回 404.html，
 * 它把原始路径编码进 ?p=，交给 index.html 里的还原脚本处理。
 * 因为 base 是构建期决定的，这里按当前 base 生成，而不是写死在 public/ 里。
 */
function render404(base: string): string {
  return `<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <title>如何构建一个好游戏</title>
    <script>
      // GitHub Pages 对任何未匹配文件的路径都返回本文件，且不会带上路由信息。
      // 这里把原始路径编码进 ?p=，交给 index.html 里的还原脚本处理。
      (function () {
        var base = '${base}';
        var seg =
          location.pathname.indexOf(base) === 0 ? location.pathname.slice(base.length - 1) : '/';
        location.replace(base + '?p=' + encodeURIComponent(seg) + location.hash);
      })();
    </script>
  </head>
  <body></body>
</html>
`;
}

/** 把构建期的 base 注入 HTML，并按当前 base 生成 404.html */
function siteBasePlugin() {
  return {
    name: 'site-base',
    transformIndexHtml(html: string) {
      return html.replaceAll('%SITE_BASE%', siteBase);
    },
    writeBundle(options: { dir?: string }) {
      const dir = options.dir ?? join(process.cwd(), 'dist');
      writeFileSync(join(dir, '404.html'), render404(siteBase), 'utf8');
    },
  };
}

export default defineConfig({
  base: siteBase,

  plugins: [
    // MDX 必须在 React 插件之前转换，所以显式声明 enforce: 'pre'
    // providerImportSource 让正文组件走 MDXProvider，章节文件里不必重复传 components
    {
      enforce: 'pre',
      ...mdx({ providerImportSource: '@mdx-js/react', remarkPlugins: [remarkGfm] }),
    },
    react(),
    tailwindcss(),
    siteBasePlugin(),
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  test: {
    include: ['src/**/*.test.ts'],
    passWithNoTests: true,
  },

  lint: {
    ignorePatterns: ['dist/**', 'node_modules/**'],
  },

  fmt: {
    semi: true,
    singleQuote: true,
  },
});
