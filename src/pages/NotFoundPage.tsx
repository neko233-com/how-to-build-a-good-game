import { Link } from 'react-router-dom';

import { useDocumentTitle } from '@/lib/seo';

export function NotFoundPage() {
  useDocumentTitle('页面不存在');

  return (
    <div className="max-w-[42rem] py-16">
      <p className="text-muted-foreground font-mono text-xs tracking-widest uppercase">404</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight">这一页没有内容</h1>
      <p className="text-muted-foreground mt-4 leading-relaxed">
        可能是链接写错了，也可能是这一章还没写。全书目录里有的章节，都一定能打开。
      </p>
      <Link
        to="/"
        className="bg-primary text-primary-foreground hover:bg-primary/90 mt-8 inline-block rounded-lg px-5 py-2.5 text-sm font-medium transition-colors"
      >
        回到目录
      </Link>
    </div>
  );
}
