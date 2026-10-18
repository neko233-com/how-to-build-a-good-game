import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { type Chapter, chapterHref, findPart, getSiblings } from '@/content/meta';

interface ChapterLayoutProps {
  chapter: Chapter;
  children: ReactNode;
}

/** 章节页外壳：篇/章编号、标题、摘要，正文，底部上下章导航 */
export function ChapterLayout({ chapter, children }: ChapterLayoutProps) {
  const part = findPart(chapter.part);
  const { prev, next } = getSiblings(chapter.slug);

  const eyebrow = part
    ? part.number === null
      ? part.title
      : `第 ${part.number} 篇 · ${part.title}`
    : '';

  return (
    <article className="pb-8">
      <header className="mb-10 max-w-[42rem]">
        <p className="text-muted-foreground mb-3 font-mono text-xs tracking-widest uppercase">
          {eyebrow}
          <span className="mx-2">/</span>
          {chapter.order}
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          {chapter.title}
        </h1>
        <p className="text-muted-foreground mt-4 leading-relaxed">{chapter.summary}</p>
      </header>

      <div className="prose-book">{children}</div>

      <nav aria-label="章节导航" className="mt-16 grid gap-3 border-t pt-8 sm:grid-cols-2">
        {prev ? (
          <Link
            to={chapterHref(prev)}
            className="hover:bg-accent/60 group rounded-lg border p-4 transition-colors"
          >
            <span className="text-muted-foreground text-xs">上一章</span>
            <span className="group-hover:text-primary mt-1 block font-medium transition-colors">
              {prev.short}
            </span>
          </Link>
        ) : (
          <span aria-hidden="true" />
        )}

        {next ? (
          <Link
            to={chapterHref(next)}
            className="hover:bg-accent/60 group rounded-lg border p-4 transition-colors sm:text-right"
          >
            <span className="text-muted-foreground text-xs">下一章</span>
            <span className="group-hover:text-primary mt-1 block font-medium transition-colors">
              {next.short}
            </span>
          </Link>
        ) : (
          <span aria-hidden="true" />
        )}
      </nav>
    </article>
  );
}
