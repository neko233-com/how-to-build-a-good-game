import { useEffect } from 'react';

import { BOOK } from '@/content/meta';

/** 站点是单页应用，标题需要手动同步，否则所有页面在浏览器里都叫同一个名字 */
export function useDocumentTitle(title?: string): void {
  useEffect(() => {
    document.title = title ? `${title} · ${BOOK.title}` : BOOK.title;
  }, [title]);
}
