import { useId, type ReactNode } from 'react';

import { cn } from '@/lib/utils';

export interface LtvCacChartProps {
  caption?: ReactNode;
  className?: string;
}

const WIDTH = 720;
const HEIGHT = 400;
const X0 = 64;
const X1 = 696;
const Y_ZERO = 344;
const Y_TOP = 32;
const MAX_DAYS = 180;
const MAX_VALUE = 20;

/** 获客成本：买量当期就付掉，所以是一条水平线 */
const CAC = 10;
/** 累计 LTV 曲线：前期涨得快，之后逐渐趋于平缓 */
const ltv = (days: number) => MAX_VALUE * (1 - Math.exp(-days / 60));
/** LTV 追平 CAC 的那一天，即回收点 */
const PAYBACK_DAY = 60 * Math.log(MAX_VALUE / (MAX_VALUE - CAC));

const SERIES = [0, 15, 30, 45, 60, 90, 120, 150, 180];

const xOf = (days: number) => X0 + ((X1 - X0) * days) / MAX_DAYS;
const yOf = (value: number) => Y_ZERO - ((Y_ZERO - Y_TOP) * value) / MAX_VALUE;

const ltvLine = SERIES.map((days, index) => {
  const command = index === 0 ? 'M' : 'L';
  return `${command}${xOf(days)},${yOf(ltv(days))}`;
}).join(' ');
const ltvArea = `${ltvLine} L${X1},${Y_ZERO} L${X0},${Y_ZERO} Z`;

/** LTV/CAC 回收模型：回收点由两条线的交点决定，而不是由利润率决定 */
export function LtvCacChart({ caption, className }: LtvCacChartProps) {
  const titleId = useId();

  return (
    <figure className={cn(className)}>
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        role="img"
        aria-labelledby={titleId}
        className="w-full"
      >
        <title id={titleId}>
          累计 LTV 与获客成本 CAC 的对比：两条线相交处即回收点，约在第 42 天
        </title>

        {/* 尚未回本的区间 */}
        <rect
          x={X0}
          y={Y_TOP}
          width={xOf(PAYBACK_DAY) - X0}
          height={Y_ZERO - Y_TOP}
          className="fill-destructive"
          opacity="0.08"
        />
        <text x={X0 + 10} y={Y_TOP + 18} className="fill-muted-foreground text-[11px]">
          尚未回本
        </text>

        {/* 坐标轴 */}
        <line x1={X0} y1={Y_ZERO} x2={X1} y2={Y_ZERO} className="stroke-border" strokeWidth="1" />
        <line x1={X0} y1={Y_ZERO} x2={X0} y2={Y_TOP} className="stroke-border" strokeWidth="1" />

        {/* 纵轴刻度 */}
        {[0, 5, 10, 15, 20].map((tick) => (
          <g key={tick}>
            <line
              x1={X0 - 4}
              y1={yOf(tick)}
              x2={X0}
              y2={yOf(tick)}
              className="stroke-border"
              strokeWidth="1"
            />
            <text
              x={X0 - 10}
              y={yOf(tick) + 4}
              textAnchor="end"
              className="fill-muted-foreground text-[11px]"
            >
              {tick}
            </text>
          </g>
        ))}
        <text
          x={X0 - 10}
          y={Y_TOP - 10}
          textAnchor="end"
          className="fill-muted-foreground text-[11px]"
        >
          累计金额
        </text>

        {/* 横轴刻度 */}
        {[0, 45, 90, 135, 180].map((days) => (
          <text
            key={days}
            x={xOf(days)}
            y={Y_ZERO + 22}
            textAnchor="middle"
            className="fill-muted-foreground text-[11px]"
          >
            {days} 天
          </text>
        ))}

        {/* 累计 LTV 曲线 */}
        <path d={ltvArea} className="fill-primary" opacity="0.14" />
        <path d={ltvLine} fill="none" className="stroke-primary" strokeWidth="2.5" />

        {/* CAC 水平线 */}
        <line
          x1={X0}
          y1={yOf(CAC)}
          x2={X1}
          y2={yOf(CAC)}
          className="stroke-destructive"
          strokeWidth="2"
          strokeDasharray="7 5"
        />
        <text
          x={X1 - 4}
          y={yOf(CAC) - 8}
          textAnchor="end"
          className="fill-muted-foreground text-[11px]"
        >
          CAC · 获客成本
        </text>

        {/* 累计 LTV 标签 */}
        <text
          x={xOf(120)}
          y={yOf(ltv(120)) - 10}
          className="fill-foreground text-[12px] font-semibold"
        >
          累计 LTV
        </text>

        {/* 回收点 */}
        <line
          x1={xOf(PAYBACK_DAY)}
          y1={yOf(CAC)}
          x2={xOf(PAYBACK_DAY)}
          y2={Y_ZERO}
          className="stroke-foreground"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <circle cx={xOf(PAYBACK_DAY)} cy={yOf(CAC)} r="5" className="fill-foreground" />
        <text
          x={xOf(PAYBACK_DAY) + 8}
          y={Y_ZERO - 14}
          className="fill-foreground text-[12px] font-semibold"
        >
          回收点 ≈ 第 42 天
        </text>

        <text x={xOf(112)} y={Y_ZERO - 14} className="fill-muted-foreground text-[11px]">
          回收之后，才轮到 LTV/CAC 这个比值说话
        </text>
      </svg>

      {caption ? (
        <figcaption className="text-muted-foreground mt-3 text-center text-sm">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
