import { type Heading, useActiveHeading } from '@/lib/toc';
import { cn } from '@/lib/utils';

interface TocProps {
  headings: Heading[];
  className?: string;
}

/** 章节正文右侧的当前章目录，滚动时高亮所在小节 */
export function Toc({ headings, className }: TocProps) {
  const activeId = useActiveHeading(headings);

  if (headings.length === 0) return null;

  return (
    <nav aria-label="本章目录" className={cn('sticky top-24 self-start', className)}>
      <p className="text-muted-foreground mb-3 font-mono text-xs tracking-widest uppercase">本章</p>
      <ul className="border-border space-y-1 border-l">
        {headings.map((heading) => {
          const active = heading.id === activeId;
          return (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                aria-current={active ? 'location' : undefined}
                className={cn(
                  '-ml-px block border-l py-1 text-sm leading-snug transition-colors',
                  heading.level === 3 ? 'pl-6' : 'pl-4',
                  active
                    ? 'border-primary text-foreground font-medium'
                    : 'text-muted-foreground hover:text-foreground border-transparent',
                )}
              >
                {heading.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
