import { Link, useOutletContext } from 'react-router-dom';

import GradientText from '@/components/bits/GradientText';
import SpotlightCard from '@/components/bits/SpotlightCard';
import {
  BOOK,
  CHAPTERS,
  FEATURED_CHAPTERS,
  PARTS,
  chapterHref,
  chaptersOfPart,
} from '@/content/meta';
import type { BookOutletContext } from '@/layout/BookLayout';

/** 封面页：书名、一句话主张、样章入口与全书目录 */
export function HomePage() {
  const { theme } = useOutletContext<BookOutletContext>();
  const startChapter = FEATURED_CHAPTERS[0] ?? CHAPTERS[0];

  // 同一套琥珀渐变色在深浅两种底色上要分别调整明度，否则总有一边糊掉
  const taglineColors =
    theme === 'dark' ? ['#fbbf24', '#fb923c', '#fcd34d'] : ['#b45309', '#9a3412', '#c2410c'];

  return (
    <div className="pb-8">
      <section className="max-w-[46rem]">
        <p className="text-primary mb-4 font-mono text-xs tracking-widest uppercase">
          A Book About Building Good Games
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          {BOOK.title}
        </h1>
        <p className="mt-5 text-lg font-medium text-balance">
          <GradientText colors={taglineColors} animationSpeed={6}>
            {BOOK.tagline}
          </GradientText>
        </p>
        <p className="prose-book text-muted-foreground mt-5">{BOOK.description}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to={chapterHref(startChapter)}
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors"
          >
            开始阅读
          </Link>
          <a
            href={BOOK.repo}
            target="_blank"
            rel="noreferrer"
            className="hover:bg-accent rounded-lg border px-5 py-2.5 text-sm font-medium transition-colors"
          >
            在 GitHub 上查看
          </a>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="mb-1 text-xl font-semibold tracking-tight">先读这三章</h2>
        <p className="text-muted-foreground mb-6 text-sm">
          它们分别代表这本书的三种写法：立引用、立主张、立方法。
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_CHAPTERS.map((chapter) => (
            <SpotlightCard
              key={chapter.slug}
              theme={theme}
              spotlightColor="rgba(245, 158, 11, 0.32)"
              className="flex flex-col"
            >
              <span className="text-muted-foreground font-mono text-xs">{chapter.order}</span>
              <h3 className="mt-3 text-lg font-semibold">{chapter.short}</h3>
              <p className="text-muted-foreground mt-2 flex-1 text-sm leading-relaxed">
                {chapter.summary}
              </p>
              <Link
                to={chapterHref(chapter)}
                className="text-primary hover:text-primary/80 mt-5 text-sm font-medium transition-colors"
              >
                开始阅读 →
              </Link>
            </SpotlightCard>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="mb-6 text-xl font-semibold tracking-tight">全书目录</h2>

        <div className="space-y-10">
          {PARTS.map((part) => {
            const chapters = chaptersOfPart(part.id);
            if (chapters.length === 0) return null;

            return (
              <div key={part.id}>
                <h3 className="text-base font-semibold">
                  {part.number === null ? part.title : `第 ${part.number} 篇 · ${part.title}`}
                </h3>
                <p className="text-muted-foreground mt-1 max-w-[42rem] text-sm">
                  {part.description}
                </p>

                <ul className="mt-4 divide-y rounded-xl border">
                  {chapters.map((chapter) => (
                    <li key={chapter.slug}>
                      <Link
                        to={chapterHref(chapter)}
                        className="hover:bg-accent/40 flex gap-4 px-5 py-4 transition-colors"
                      >
                        <span className="text-muted-foreground w-6 shrink-0 pt-0.5 font-mono text-xs">
                          {chapter.order}
                        </span>
                        <span className="min-w-0">
                          <span className="hover:text-primary block font-medium transition-colors">
                            {chapter.title}
                          </span>
                          <span className="text-muted-foreground mt-1 block text-sm leading-relaxed">
                            {chapter.summary}
                          </span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
