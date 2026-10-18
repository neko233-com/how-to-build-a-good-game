import { useId, type ReactNode } from 'react';

import { cn } from '@/lib/utils';

export interface CoreLoopDiagramProps {
  caption?: ReactNode;
  className?: string;
}

const WIDTH = 480;
const HEIGHT = 400;
const CX = 240;
const CY = 186;
const R = 116;
const GAP_DEG = 17;

const NODES = [
  { angle: -90, title: '行动', desc: '玩家做出选择' },
  { angle: 0, title: '反馈', desc: '世界立刻回应' },
  { angle: 90, title: '奖励', desc: '获得确定收益' },
  { angle: 180, title: '成长', desc: '能力或选项变多' },
];

function at(deg: number, radius = R) {
  const rad = (deg * Math.PI) / 180;
  return { x: CX + radius * Math.cos(rad), y: CY + radius * Math.sin(rad) };
}

const arcs = NODES.map((node, index) => {
  const next = NODES[(index + 1) % NODES.length];
  const start = at(node.angle + GAP_DEG);
  const end = at(next.angle - GAP_DEG);
  return `M${start.x},${start.y} A${R},${R} 0 0 1 ${end.x},${end.y}`;
});

/** 核心循环闭环图：四个节点缺一不可，缺口出现在哪一环就是设计问题出在哪一环 */
export function CoreLoopDiagram({ caption, className }: CoreLoopDiagramProps) {
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
        <title id={titleId}>核心循环示意图：行动、反馈、奖励、成长四步闭合</title>

        <defs>
          <marker id={markerId} markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
            <path d="M0,0 L7,3.5 L0,7 Z" className="fill-primary" />
          </marker>
        </defs>

        {arcs.map((arc, index) => (
          <path
            key={arc}
            d={arc}
            fill="none"
            className="stroke-primary"
            strokeWidth="2"
            markerEnd={`url(#${markerId})`}
            opacity={index === 0 ? 1 : 0.75}
          />
        ))}

        <circle cx={CX} cy={CY} r="62" className="fill-muted stroke-border" strokeWidth="1" />
        <text
          x={CX}
          y={CY - 4}
          textAnchor="middle"
          className="fill-foreground text-[15px] font-semibold"
        >
          核心循环
        </text>
        <text x={CX} y={CY + 16} textAnchor="middle" className="fill-muted-foreground text-[11px]">
          一圈要走得完
        </text>

        {NODES.map((node) => {
          const point = at(node.angle);
          return (
            <g key={node.title}>
              <rect
                x={point.x - 54}
                y={point.y - 26}
                width="108"
                height="52"
                rx="12"
                className="fill-card stroke-border"
                strokeWidth="1"
              />
              <text
                x={point.x}
                y={point.y - 3}
                textAnchor="middle"
                className="fill-foreground text-[13px] font-semibold"
              >
                {node.title}
              </text>
              <text
                x={point.x}
                y={point.y + 14}
                textAnchor="middle"
                className="fill-muted-foreground text-[10px]"
              >
                {node.desc}
              </text>
            </g>
          );
        })}

        <text
          x={CX}
          y={HEIGHT - 12}
          textAnchor="middle"
          className="fill-muted-foreground text-[11px]"
        >
          闭环不成立时，任何一环上加料都只是把问题推得更远
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
