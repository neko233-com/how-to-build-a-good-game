import { useId, type ReactNode } from 'react';

import { cn } from '@/lib/utils';

export interface TippingPointDiagramProps {
  caption?: ReactNode;
  className?: string;
}

const WIDTH = 720;
const HEIGHT = 470;

const ELEMENTS = ['持续改良', '社会性联结', '扩大用户群', '挑战既有概念'];
const CONDITIONS = ['魅力在玩家厌倦前被传达', '创意简单到玩家愿意推荐给他人'];

const ROW1_Y = 40;
const ROW1_H = 58;
const ROW1_W = 160;
const ROW1_GAP = 12;
const ROW1_X0 = 22;

const BUS_Y = 128;
const ROW2_Y = 154;
const ROW2_H = 56;
const ROW2_X0 = 180;
const ROW2_W = 360;

const ROW3_Y = 250;
const ROW3_H = 56;
const ROW3_X0 = 30;
const ROW3_W = 322;
const ROW3_GAP = 16;

const ROW4_Y = 356;
const ROW4_H = 60;
const ROW4_X0 = 110;
const ROW4_W = 500;

const centerX = (x: number, width: number) => x + width / 2;

/**
 * 岩田聪在 GDC 2011 提出的两个层次：
 * 四个要素决定一款游戏能不能成为「必备品」，两个条件决定它能不能靠口碑自己卖出去。
 * 这张图支撑第 01 章的结论——真实框架与流传的「三大特性」并不是一回事。
 */
export function TippingPointDiagram({ caption, className }: TippingPointDiagramProps) {
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
          岩田聪 GDC 2011 的框架：四个要素产生「必备品」，两个条件让游戏越过临界点、靠口碑自行扩散
        </title>

        <defs>
          <marker id={markerId} markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
            <path d="M0,0 L7,3.5 L0,7 Z" className="fill-primary" />
          </marker>
        </defs>

        <text
          x={WIDTH / 2}
          y={26}
          textAnchor="middle"
          className="fill-muted-foreground text-[11px]"
        >
          产生「必备品」的四个要素
        </text>

        {/* 第一层：四个要素 */}
        {ELEMENTS.map((label, index) => {
          const x = ROW1_X0 + index * (ROW1_W + ROW1_GAP);
          return (
            <g key={label}>
              <rect
                x={x}
                y={ROW1_Y}
                width={ROW1_W}
                height={ROW1_H}
                rx="10"
                className="fill-primary"
                opacity="0.18"
                strokeWidth="1"
              />
              <text
                x={centerX(x, ROW1_W)}
                y={ROW1_Y + ROW1_H / 2 + 5}
                textAnchor="middle"
                className="fill-foreground text-[12px] font-medium"
              >
                {label}
              </text>
              <line
                x1={centerX(x, ROW1_W)}
                y1={ROW1_Y + ROW1_H}
                x2={centerX(x, ROW1_W)}
                y2={BUS_Y}
                className="stroke-primary"
                strokeWidth="1.5"
              />
            </g>
          );
        })}

        <line
          x1={centerX(ROW1_X0, ROW1_W)}
          y1={BUS_Y}
          x2={centerX(ROW1_X0 + 3 * (ROW1_W + ROW1_GAP), ROW1_W)}
          y2={BUS_Y}
          className="stroke-primary"
          strokeWidth="1.5"
        />
        <line
          x1={WIDTH / 2}
          y1={BUS_Y}
          x2={WIDTH / 2}
          y2={ROW2_Y}
          className="stroke-primary"
          strokeWidth="1.5"
          markerEnd={`url(#${markerId})`}
        />

        {/* 第二层：必备品 */}
        <rect
          x={ROW2_X0}
          y={ROW2_Y}
          width={ROW2_W}
          height={ROW2_H}
          rx="10"
          className="fill-card stroke-primary"
          strokeWidth="1.5"
        />
        <text
          x={centerX(ROW2_X0, ROW2_W)}
          y={ROW2_Y + ROW2_H / 2 + 5}
          textAnchor="middle"
          className="fill-foreground text-[13px] font-semibold"
        >
          MUST-HAVE：玩家非买不可的游戏
        </text>

        <line
          x1={WIDTH / 2}
          y1={ROW2_Y + ROW2_H}
          x2={WIDTH / 2}
          y2={ROW3_Y - 22}
          className="stroke-primary"
          strokeWidth="1.5"
        />
        <text x={WIDTH / 2 + 12} y={ROW3_Y - 28} className="fill-muted-foreground text-[11px]">
          让它越过临界点的两个条件
        </text>

        {/* 第三层：两个条件 */}
        {CONDITIONS.map((label, index) => {
          const x = ROW3_X0 + index * (ROW3_W + ROW3_GAP);
          return (
            <g key={label}>
              <rect
                x={x}
                y={ROW3_Y}
                width={ROW3_W}
                height={ROW3_H}
                rx="10"
                className="fill-muted stroke-border"
                strokeWidth="1"
              />
              <text
                x={centerX(x, ROW3_W)}
                y={ROW3_Y + ROW3_H / 2 + 5}
                textAnchor="middle"
                className="fill-foreground text-[12px]"
              >
                {label}
              </text>
              <line
                x1={centerX(x, ROW3_W)}
                y1={ROW3_Y + ROW3_H}
                x2={centerX(x, ROW3_W)}
                y2={ROW4_Y}
                className="stroke-primary"
                strokeWidth="1.5"
                markerEnd={`url(#${markerId})`}
              />
            </g>
          );
        })}

        {/* 第四层：临界点 */}
        <rect
          x={ROW4_X0}
          y={ROW4_Y}
          width={ROW4_W}
          height={ROW4_H}
          rx="10"
          className="fill-primary"
          opacity="0.9"
        />
        <text
          x={centerX(ROW4_X0, ROW4_W)}
          y={ROW4_Y + 26}
          textAnchor="middle"
          className="fill-primary-foreground text-[13px] font-semibold"
        >
          越过临界点
        </text>
        <text
          x={centerX(ROW4_X0, ROW4_W)}
          y={ROW4_Y + 46}
          textAnchor="middle"
          className="fill-primary-foreground text-[11px]"
        >
          口碑开始扩散，游戏开始自己卖自己
        </text>

        <text
          x={WIDTH / 2}
          y={HEIGHT - 12}
          textAnchor="middle"
          className="fill-muted-foreground text-[11px]"
        >
          四个要素决定它「能不能成为必备品」，两个条件决定它「能不能自己卖出去」
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
