import type { ReactNode } from 'react';

export type CalloutType = 'note' | 'warning' | 'tip' | 'idea';

export interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: ReactNode;
}

const TYPES: Record<CalloutType, { label: string; className: string }> = {
  note: { label: '补充', className: 'border-primary/40 bg-accent/50' },
  warning: { label: '注意', className: 'border-amber-500/50 bg-amber-500/10' },
  tip: { label: '做法', className: 'border-emerald-500/40 bg-emerald-500/10' },
  idea: { label: '换个角度', className: 'border-violet-500/40 bg-violet-500/10' },
};

export function Callout({ type = 'note', title, children }: CalloutProps) {
  const variant = TYPES[type];

  return (
    <aside className={`my-8 rounded-xl border px-5 py-4 ${variant.className}`}>
      <p className="text-muted-foreground mb-2 text-xs font-semibold tracking-wider uppercase">
        {title ?? variant.label}
      </p>
      <div className="text-[0.9875rem] leading-relaxed [&>*+*]:mt-3">{children}</div>
    </aside>
  );
}
