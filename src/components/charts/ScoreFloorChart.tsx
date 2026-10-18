import { useId, type ReactNode } from 'react';

import { cn } from '@/lib/utils';

export interface ScoreFloorChartProps {
  caption?: ReactNode;
  className?: string;
}

const WIDTH = 720;
const HEIGHT = 400;
const X0 = 56;
const X1 = 696;
const Y_ZERO = 344;
const Y_TOP = 32;

/** 每个阶段的行业平均水位（能力地板），数组顺序即时间顺序 */
const STAGES = [
  { label: '早期', floor: 38 },
  { label: '品类成型', floor: 46 },
  { label: '竞争加剧', floor: 56 },
  { label: '存量博弈', floor: 66 },
  { label: '今天', floor: 74 },
];

const xOf = (index: number) => X0 + ((X1 - X0) * index) / (STAGES.length - 1);
const yOf = (value: number) => Y_ZERO - ((Y_ZERO - Y_TOP) * value) / 100;

const floorLine = STAGES.map((stage, index) => {
  const command = index === 0 ? 'M' : 'L';
  return `${command}${xOf(index)},${yOf(stage.floor)}`;
}).join(' ');

const floorArea = `${floorLine} L${X1},${Y_ZERO} L${X0},${Y_ZERO} Z`;

/**
 * 能力地板随行业水位上移：地线以下的部分，无论做得多好都不构成产品。
 * 这张图支撑第 04、05 两章的核心论点。
 */
export function ScoreFloorChart({ caption, className }: ScoreFloorChartProps) {
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
          能力地板随时间上移的示意图：及格线本身在抬升，地板以下的分数等于零
        </title>

        {/* 坐标轴 */}
        <line x1={X0} y1={Y_ZERO} x2={X1} y2={Y_ZERO} className="stroke-border" strokeWidth="1" />
        <line x1={X0} y1={Y_ZERO} x2={X0} y2={Y_TOP} className="stroke-border" strokeWidth="1" />

        {/* 纵轴刻度 */}
        {[0, 25, 50, 75, 100].map((tick) => (
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
          x={14}
          y={Y_TOP - 12}
          className="fill-muted-foreground text-[11px]"
          transform={`rotate(-90 14 ${Y_TOP + 60})`}
        >
          分数
        </text>

        {/* 地板以下的区域：做成 0 分。暗色下需要稍高的不透明度，否则会和底色糊在一起 */}
        <path d={floorArea} className="fill-primary" opacity="0.22" />
        <path d={floorLine} fill="none" className="stroke-primary" strokeWidth="2.5" />

        {/* 旧时代的及格线作为参照 */}
        <line
          x1={X0}
          y1={yOf(60)}
          x2={X1}
          y2={yOf(60)}
          className="stroke-muted-foreground"
          strokeWidth="1.5"
          strokeDasharray="6 5"
        />
        <text
          x={X1 - 4}
          y={yOf(60) - 8}
          textAnchor="end"
          className="fill-muted-foreground text-[11px]"
        >
          曾经够用的 60 分
        </text>

        {/* 时间轴标签 */}
        {STAGES.map((stage, index) => (
          <text
            key={stage.label}
            x={xOf(index)}
            y={Y_ZERO + 22}
            textAnchor="middle"
            className="fill-muted-foreground text-[11px]"
          >
            {stage.label}
          </text>
        ))}

        {/* 数据点与数值 */}
        {STAGES.map((stage, index) => (
          <g key={`${stage.label}-point`}>
            <circle cx={xOf(index)} cy={yOf(stage.floor)} r="4" className="fill-primary" />
            <text
              x={xOf(index)}
              y={yOf(stage.floor) - 12}
              textAnchor="middle"
              className="fill-foreground text-[12px] font-semibold"
            >
              {stage.floor}
            </text>
          </g>
        ))}

        {/* 区域标注 */}
        <text
          x={X0 + 16}
          y={Y_ZERO - 20}
          className="fill-foreground text-[12px] font-medium"
          opacity="0.85"
        >
          地板以下 · 等于 0 分
        </text>
        <text x={X1 - 4} y={yOf(88)} textAnchor="end" className="fill-foreground text-[12px]">
          真正的分数从这里开始
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
