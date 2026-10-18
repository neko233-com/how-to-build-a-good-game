import { Link } from 'react-router-dom';

import { PARTS, chapterHref, chaptersOfPart } from '@/content/meta';
import { cn } from '@/lib/utils';

interface SidebarProps {
  activeSlug?: string;
  open: boolean;
  onClose: () => void;
}

export function Sidebar({ activeSlug, open, onClose }: SidebarProps) {
  return (
    <>
      <div
        className={cn('fixed inset-0 z-30 bg-black/40 lg:hidden', open ? 'block' : 'hidden')}
        onClick={onClose}
        aria-hidden="true"
      />

      <nav
        id="book-nav"
        aria-label="全书目录"
        className={cn(
          'bg-background fixed inset-y-0 left-0 z-40 w-[17rem] shrink-0 overflow-y-auto overscroll-contain border-r px-5 py-6 transition-transform duration-200',
          'lg:bg-background/40 lg:sticky lg:top-16 lg:z-0 lg:h-[calc(100dvh-4rem)] lg:translate-x-0 lg:border-r-0 lg:px-0 lg:py-8',
          open ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <p className="text-muted-foreground mb-5 font-mono text-xs tracking-widest uppercase lg:mb-6">
          全书目录
        </p>

        <ol className="space-y-6">
          {PARTS.map((part) => {
            const chapters = chaptersOfPart(part.id);
            if (chapters.length === 0) return null;

            return (
              <li key={part.id}>
                <p className="text-muted-foreground mb-1.5 text-xs font-semibold">
                  {part.number === null ? part.title : `第 ${part.number} 篇 · ${part.title}`}
                </p>
                <ul className="space-y-0.5">
                  {chapters.map((chapter) => {
                    const active = chapter.slug === activeSlug;
                    return (
                      <li key={chapter.slug}>
                        <Link
                          to={chapterHref(chapter)}
                          aria-current={active ? 'page' : undefined}
                          onClick={onClose}
                          className={cn(
                            'block rounded-md py-1.5 pr-2 pl-2.5 text-sm leading-snug transition-colors',
                            active
                              ? 'bg-accent text-accent-foreground font-medium'
                              : 'text-muted-foreground hover:bg-accent/50 hover:text-foreground',
                          )}
                        >
                          <span className="text-muted-foreground/70 mr-1.5 font-mono text-xs">
                            {chapter.order}
                          </span>
                          {chapter.short}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
