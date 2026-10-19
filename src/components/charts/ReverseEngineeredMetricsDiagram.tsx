import { useId, type ReactNode } from 'react';

import { cn } from '@/lib/utils';

export interface ReverseEngineeredMetricsDiagramProps {
  caption?: ReactNode;
  className?: string;
}

const WIDTH = 720;
const HEIGHT = 470;
const CENTER = WIDTH / 2;

/**
 * 两张对照图：
 * 上面是「通常以为的因果方向」——数值决定商业表现；
 * 下面是「实际发生的方向」——先有营业额目标，再反推数值指标，最后落到设计决策。
 * 这张图支撑第 09 章的核心论点：数值是目标的下游产物，不是商业表现的原因。
 */
export function ReverseEngineeredMetricsDiagram({
  caption,
  className,
}: ReverseEngineeredMetricsDiagramProps) {
  const titleId = useId();
  const markerId = `${titleId}-arrow`;

  return (
    <figure className={cn(className)}>
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        role="img"
        aria-labelledby={titleId}
        className="w-full"
      >
        <title id={titleId}>
          对照图：通常以为的因果方向是「数值决定商业表现」，而实际发生的方向是「先定营业额目标，再反推数值指标，最后落到设计决策」
        </title>

        <defs>
          <marker id={markerId} markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
            <path d="M0,0 L7,3.5 L0,7 Z" className="fill-muted-foreground" />
          </marker>
          <marker
            id={`${markerId}-primary`}
            markerWidth="7"
            markerHeight="7"
            refX="6"
            refY="3.5"
            orient="auto"
          >
            <path d="M0,0 L7,3.5 L0,7 Z" className="fill-primary" />
          </marker>
        </defs>

        {/* 上半：通常以为的方向 */}
        <text x={20} y={26} className="fill-muted-foreground text-[11px]">
          通常以为的因果方向
        </text>

        <rect
          x={40}
          y={42}
          width={290}
          height={58}
          rx="10"
          className="fill-muted stroke-border"
          strokeWidth="1"
        />
        <text x={185} y={68} textAnchor="middle" className="fill-foreground text-[12px]">
          数值指标
        </text>
        <text x={185} y={86} textAnchor="middle" className="fill-muted-foreground text-[11px]">
          ARPU / 付费率 / LTV
        </text>

        <line
          x1={340}
          y1={71}
          x2={378}
          y2={71}
          className="stroke-muted-foreground"
          strokeWidth="1.5"
          markerEnd={`url(#${markerId})`}
        />

        <rect
          x={390}
          y={42}
          width={290}
          height={58}
          rx="10"
          className="fill-muted stroke-border"
          strokeWidth="1"
        />
        <text x={535} y={76} textAnchor="middle" className="fill-foreground text-[12px]">
          商业表现的好坏
        </text>

        <text x={20} y={126} className="fill-muted-foreground text-[11px]">
          这条箭头方向是本书要反驳的：数值并不能决定表现，它只是表现的读数
        </text>

        <line x1={20} y1={146} x2={700} y2={146} className="stroke-border" strokeWidth="1" />

        {/* 下半：实际发生的方向 */}
        <text x={20} y={176} className="fill-primary text-[11px] font-medium">
          实际发生的方向
        </text>

        <rect
          x={180}
          y={190}
          width={360}
          height={56}
          rx="10"
          className="fill-primary"
          opacity="0.2"
        />
        <text
          x={CENTER}
          y={224}
          textAnchor="middle"
          className="fill-foreground text-[13px] font-semibold"
        >
          公司先定营业额目标
        </text>

        <line
          x1={CENTER}
          y1={246}
          x2={CENTER}
          y2={270}
          className="stroke-primary"
          strokeWidth="1.5"
          markerEnd={`url(#${markerId}-primary)`}
        />

        <rect
          x={180}
          y={274}
          width={360}
          height={56}
          rx="10"
          className="fill-primary"
          opacity="0.28"
        />
        <text
          x={CENTER}
          y={300}
          textAnchor="middle"
          className="fill-foreground text-[13px] font-semibold"
        >
          再反推数值指标
        </text>
        <text x={CENTER} y={318} textAnchor="middle" className="fill-muted-foreground text-[11px]">
          ARPU / 付费率 / LTV / 回收周期
        </text>

        <line
          x1={CENTER}
          y1={330}
          x2={CENTER}
          y2={354}
          className="stroke-primary"
          strokeWidth="1.5"
          markerEnd={`url(#${markerId}-primary)`}
        />

        <rect
          x={180}
          y={358}
          width={360}
          height={56}
          rx="10"
          className="fill-primary"
          opacity="0.36"
        />
        <text
          x={CENTER}
          y={392}
          textAnchor="middle"
          className="fill-foreground text-[13px] font-semibold"
        >
          最后落到具体设计决策
        </text>

        <text
          x={CENTER}
          y={HEIGHT - 26}
          textAnchor="middle"
          className="fill-muted-foreground text-[11px]"
        >
          所以数值是目标的下游产物，而不是商业表现的原因
        </text>
        <text
          x={CENTER}
          y={HEIGHT - 8}
          textAnchor="middle"
          className="fill-muted-foreground text-[11px]"
        >
          拿它去解释「为什么成功」，等于拿预算去解释利润
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
