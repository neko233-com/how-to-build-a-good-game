import { useParams } from 'react-router-dom';

import { findChapter } from '@/content/meta';
import { ChapterLayout } from '@/layout/ChapterLayout';
import { useDocumentTitle } from '@/lib/seo';
import { NotFoundPage } from '@/pages/NotFoundPage';

export function ChapterPage() {
  const { slug } = useParams();
  const chapter = findChapter(slug);

  useDocumentTitle(chapter?.title);

  if (!chapter) return <NotFoundPage />;

  return (
    <ChapterLayout chapter={chapter}>
      {/* M2 会在这里换成真正的 MDX 正文 */}
      <div className="border-muted-foreground/30 text-muted-foreground rounded-xl border border-dashed p-6">
        <p className="text-foreground font-medium">本章正文正在写作中</p>
        <p className="mt-2 text-sm leading-relaxed">
          章节骨架、目录与导航已经就位。正文会按「钩子 → 论点 → 证据 → 图 → 反方观点 →
          可执行清单」的结构补上， 每处引述都会带可访问的出处链接。
        </p>
      </div>
    </ChapterLayout>
  );
}
