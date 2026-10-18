import CountUp from '@/components/bits/CountUp';

export interface StatCardProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  note?: string;
}

/** 正文里的关键数字，滚动到视口时计数动画播一次 */
export function StatCard({ value, label, prefix, suffix, decimals, note }: StatCardProps) {
  return (
    <div className="bg-card my-8 rounded-xl border p-6">
      <p className="text-primary text-4xl font-semibold tracking-tight tabular-nums">
        <CountUp
          to={value}
          prefix={prefix}
          suffix={suffix}
          decimals={decimals}
          duration={1.4}
          trigger="view"
          separator=","
        />
      </p>
      <p className="mt-2 font-medium">{label}</p>
      {note ? <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{note}</p> : null}
    </div>
  );
}
