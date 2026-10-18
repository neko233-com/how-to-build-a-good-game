import { useId, type ReactNode } from 'react';

import { cn } from '@/lib/utils';

export interface ValidationFunnelProps {
  caption?: ReactNode;
  className?: string;
}

const WIDTH = 760;
const HEIGHT = 470;
const CX = 170;
const TOP = 40;
const ROW_H = 72;
const GAP = 6;
const WIDTHS = [280, 232, 190, 152, 118];
const BOTTOM_WIDTH = 96;
const TEXT_X = 340;

const STAGES = [
  { name: '素材测试', cost: '成本最低', question: '题材与包装有没有吸引力' },
  { name: '试玩广告', cost: '成本低', question: '玩法本身能不能抓住人' },
  { name: '灰盒原型', cost: '成本中等', question: '循环是否闭合、耐不耐玩' },
  { name: '小规模上线', cost: '成本高', question: '留存与付费是否成立' },
  { name: '全面发行', cost: '成本最高', question: '只剩放大，不再有验证' },
];

/**
 * 逐级加价的验证漏斗。
 * 关键不是「测得多细」，而是把便宜的问题排在前面问完。
 */
export function ValidationFunnel({ caption, className }: ValidationFunnelProps) {
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
          验证漏斗：素材测试、试玩广告、灰盒原型、小规模上线、全面发行，成本逐级上升
        </title>

        {STAGES.map((stage, index) => {
          const topWidth = WIDTHS[index] ?? BOTTOM_WIDTH;
          const bottomWidth = WIDTHS[index + 1] ?? BOTTOM_WIDTH;
          const y = TOP + index * (ROW_H + GAP);
          const path = [
            `M${CX - topWidth / 2},${y}`,
            `L${CX + topWidth / 2},${y}`,
            `L${CX + bottomWidth / 2},${y + ROW_H}`,
            `L${CX - bottomWidth / 2},${y + ROW_H}`,
            'Z',
          ].join(' ');

          return (
            <g key={stage.name}>
              <path
                d={path}
                className="fill-primary stroke-primary"
                opacity={0.16 + index * 0.11}
                strokeWidth="1"
              />
              <text
                x={CX}
                y={y + ROW_H / 2 + 5}
                textAnchor="middle"
                className="fill-foreground text-[12px] font-semibold"
              >
                {stage.name}
              </text>

              <text x={TEXT_X} y={y + 28} className="fill-foreground text-[13px]">
                {stage.question}
              </text>
              <text x={TEXT_X} y={y + 48} className="fill-muted-foreground text-[11px]">
                {stage.cost}
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
          从上到下成本逐级上升，而能被验证的问题逐级减少——所以顺序不能反
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
