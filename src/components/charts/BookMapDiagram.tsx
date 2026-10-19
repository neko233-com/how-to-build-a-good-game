import { useId, type ReactNode } from 'react';

import { cn } from '@/lib/utils';

export interface BookMapDiagramProps {
  caption?: ReactNode;
  className?: string;
}

const WIDTH = 760;
const HEIGHT = 420;

const PARTS = [
  {
    order: '第 1 篇',
    title: '好游戏的三把尺子',
    question: '什么算好？',
    keys: ['可引用的定义', '核心循环', '及格线是相对的'],
  },
  {
    order: '第 2 篇',
    title: '市场与竞争',
    question: '能不能活？',
    keys: ['能力地板', '客群与流量', '商业化算术'],
  },
  {
    order: '第 3 篇',
    title: '数据驱动',
    question: '怎么知道？',
    keys: ['数值是描述', '验证漏斗', '指标陷阱'],
  },
  {
    order: '第 4 篇',
    title: '落地',
    question: '怎么做？',
    keys: ['从 0 到 1 清单', '死法与复盘'],
  },
];

const BOX_W = 164;
const BOX_H = 200;
const GAP = 20;
const TOP = 74;
const START_X = 20;

/** 全书论证地图：四篇各自回答一个问题，后者依赖前者的结论 */
export function BookMapDiagram({ caption, className }: BookMapDiagramProps) {
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
          全书论证地图：第 1 篇判断什么算好，第 2 篇判断能不能活，第 3 篇解决怎么知道，第 4
          篇落到怎么做；底部暗线是「数值能描述，不能解释」
        </title>

        <defs>
          <marker id={markerId} markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" className="fill-primary" />
          </marker>
        </defs>

        <text x={START_X} y={26} className="fill-muted-foreground text-[11px]">
          四篇各自回答一个问题，后一个依赖前一个的结论
        </text>

        {PARTS.map((part, index) => {
          const x = START_X + index * (BOX_W + GAP);
          return (
            <g key={part.order}>
              <rect
                x={x}
                y={TOP}
                width={BOX_W}
                height={BOX_H}
                rx="12"
                className="fill-card stroke-border"
                strokeWidth="1"
              />

              <rect
                x={x}
                y={TOP}
                width={BOX_W}
                height="34"
                rx="12"
                className="fill-primary"
                opacity="0.2"
              />
              <rect
                x={x}
                y={TOP + 22}
                width={BOX_W}
                height="12"
                className="fill-primary"
                opacity="0.2"
              />

              <text
                x={x + 12}
                y={TOP + 22}
                className="fill-primary text-[11px] font-semibold tracking-wide"
              >
                {part.order}
              </text>

              <text x={x + 12} y={TOP + 62} className="fill-foreground text-[13px] font-semibold">
                {part.title}
              </text>

              <text x={x + 12} y={TOP + 84} className="fill-muted-foreground text-[11px]">
                {part.question}
              </text>

              <line
                x1={x + 12}
                y1={TOP + 96}
                x2={x + BOX_W - 12}
                y2={TOP + 96}
                className="stroke-border"
                strokeWidth="1"
              />

              {part.keys.map((key, keyIndex) => (
                <text
                  key={key}
                  x={x + 16}
                  y={TOP + 122 + keyIndex * 24}
                  className="fill-foreground text-[11px]"
                >
                  · {key}
                </text>
              ))}

              {index < PARTS.length - 1 ? (
                <line
                  x1={x + BOX_W + 3}
                  y1={TOP + BOX_H / 2}
                  x2={x + BOX_W + GAP - 3}
                  y2={TOP + BOX_H / 2}
                  className="stroke-primary"
                  strokeWidth="2"
                  markerEnd={`url(#${markerId})`}
                />
              ) : null}
            </g>
          );
        })}

        <text x={START_X} y={TOP + BOX_H + 30} className="fill-muted-foreground text-[11px]">
          依赖方向：先知道什么算好，才谈得上能不能活；先能活，才谈得上怎么知道；最后才是怎么做。
        </text>

        <rect
          x={START_X}
          y={TOP + BOX_H + 48}
          width={WIDTH - START_X * 2}
          height="56"
          rx="10"
          className="fill-destructive"
          opacity="0.1"
        />
        <text
          x={WIDTH / 2}
          y={TOP + BOX_H + 72}
          textAnchor="middle"
          className="fill-foreground text-[12px] font-semibold"
        >
          贯穿全书的一条暗线
        </text>
        <text
          x={WIDTH / 2}
          y={TOP + BOX_H + 92}
          textAnchor="middle"
          className="fill-muted-foreground text-[11px]"
        >
          数值能描述发生了什么，但解释不了为什么发生
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
