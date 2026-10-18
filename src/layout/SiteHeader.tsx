import { Link } from 'react-router-dom';

import { BOOK } from '@/content/meta';
import type { Theme } from '@/lib/theme';

interface SiteHeaderProps {
  theme: Theme;
  onToggleTheme: () => void;
  navOpen: boolean;
  onToggleNav: () => void;
}

export function SiteHeader({ theme, onToggleTheme, navOpen, onToggleNav }: SiteHeaderProps) {
  return (
    <header className="bg-background/85 sticky top-0 z-50 border-b backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-[84rem] items-center gap-2 px-4 sm:px-6">
        <button
          type="button"
          onClick={onToggleNav}
          aria-expanded={navOpen}
          aria-controls="book-nav"
          className="hover:bg-accent -ml-1 inline-flex size-9 items-center justify-center rounded-md lg:hidden"
        >
          <span className="sr-only">{navOpen ? '收起目录' : '展开目录'}</span>
          <svg
            viewBox="0 0 20 20"
            className="size-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            aria-hidden="true"
          >
            <path d="M3 5h14M3 10h14M3 15h14" strokeLinecap="round" />
          </svg>
        </button>

        <Link to="/" className="min-w-0 truncate font-semibold tracking-tight">
          {BOOK.title}
        </Link>

        <div className="ml-auto flex items-center gap-1">
          <a
            href={BOOK.repo}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:bg-accent hover:text-foreground rounded-md px-2.5 py-1.5 text-sm transition-colors"
          >
            GitHub
          </a>
          <button
            type="button"
            onClick={onToggleTheme}
            className="text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-9 items-center justify-center rounded-md transition-colors"
          >
            <span className="sr-only">
              {theme === 'dark' ? '切换到亮色模式' : '切换到暗色模式'}
            </span>
            {theme === 'dark' ? (
              <svg
                viewBox="0 0 20 20"
                className="size-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                aria-hidden="true"
              >
                <circle cx="10" cy="10" r="3.4" />
                <path
                  d="M10 2.5v2M10 15.5v2M2.5 10h2M15.5 10h2M5 5l1.4 1.4M13.6 13.6 15 15M15 5l-1.4 1.4M6.4 13.6 5 15"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 20 20" className="size-5" fill="currentColor" aria-hidden="true">
                <path d="M16.3 12.6A7 7 0 0 1 7.4 3.7a7 7 0 1 0 8.9 8.9Z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
