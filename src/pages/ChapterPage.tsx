import { MDXProvider } from '@mdx-js/react';
import { useParams } from 'react-router-dom';

import { mdxComponents } from '@/components/mdx';
import { findChapter } from '@/content/meta';
import { ChapterLayout } from '@/layout/ChapterLayout';
import { getChapterBody } from '@/lib/content';
import { useDocumentTitle } from '@/lib/seo';
import { NotFoundPage } from '@/pages/NotFoundPage';

export function ChapterPage() {
  const { slug } = useParams();
  const chapter = findChapter(slug);
  const Body = getChapterBody(chapter);

  useDocumentTitle(chapter?.title);

  if (!chapter) return <NotFoundPage />;

  return (
    <ChapterLayout chapter={chapter}>
      {Body ? (
        <MDXProvider components={mdxComponents}>
          <Body />
        </MDXProvider>
      ) : (
        <p className="text-muted-foreground">这一章的正文文件还没建好。</p>
      )}
    </ChapterLayout>
  );
}
