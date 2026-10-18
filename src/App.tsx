import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { BookLayout } from '@/layout/BookLayout';
import { ChapterPage } from '@/pages/ChapterPage';
import { HomePage } from '@/pages/HomePage';
import { NotFoundPage } from '@/pages/NotFoundPage';

export function App() {
  return (
    // basename 取自 vite 的 base，本地开发与 GitHub Pages 子路径部署共用同一套路由
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<BookLayout />}>
          <Route index element={<HomePage />} />
          <Route path="chapters/:slug" element={<ChapterPage />} />
          <Route path="appendix/:slug" element={<ChapterPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
