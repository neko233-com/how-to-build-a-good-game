import { fileURLToPath } from 'node:url';

import mdx from '@mdx-js/rollup';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
// MDX v3 默认不含 GFM，表格/删除线/任务列表要靠这个插件
import remarkGfm from 'remark-gfm';
// Vite+ 用一个 vite.config.ts 统一管理 dev / build / test / lint / fmt
import { defineConfig } from 'vite-plus';

export default defineConfig({
  // GitHub Pages 项目站点部署在 /<repo>/ 下，生产构建与 404 兜底都依赖这个前缀
  base: '/how-to-build-a-good-game/',

  plugins: [
    // MDX 必须在 React 插件之前转换，所以显式声明 enforce: 'pre'
    // providerImportSource 让正文组件走 MDXProvider，章节文件里不必重复传 components
    {
      enforce: 'pre',
      ...mdx({ providerImportSource: '@mdx-js/react', remarkPlugins: [remarkGfm] }),
    },
    react(),
    tailwindcss(),
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
