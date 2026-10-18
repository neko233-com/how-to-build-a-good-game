import { fileURLToPath } from 'node:url';

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
// Vite+ 用一个 vite.config.ts 统一管理 dev / build / test / lint / fmt
import { defineConfig } from 'vite-plus';

export default defineConfig({
  // GitHub Pages 项目站点部署在 /<repo>/ 下，生产构建与 404 兜底都依赖这个前缀
  base: '/how-to-build-a-good-game/',

  plugins: [react(), tailwindcss()],

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
