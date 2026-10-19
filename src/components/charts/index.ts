export { BookMapDiagram } from './BookMapDiagram';
export { CoreLoopDiagram } from './CoreLoopDiagram';
export { LtvCacChart } from './LtvCacChart';
export { ReverseEngineeredMetricsDiagram } from './ReverseEngineeredMetricsDiagram';
export { ScoreFloorChart } from './ScoreFloorChart';
export { TippingPointDiagram } from './TippingPointDiagram';
export { ValidationFunnel } from './ValidationFunnel';

import { BookMapDiagram } from './BookMapDiagram';
import { CoreLoopDiagram } from './CoreLoopDiagram';
import { LtvCacChart } from './LtvCacChart';
import { ReverseEngineeredMetricsDiagram } from './ReverseEngineeredMetricsDiagram';
import { ScoreFloorChart } from './ScoreFloorChart';
import { TippingPointDiagram } from './TippingPointDiagram';
import { ValidationFunnel } from './ValidationFunnel';

/**
 * 手写 SVG 图表，不依赖图表库：
 * 配色直接跟随设计 token，深浅两种模式下都能读，且能随代码一起版本管理。
 */
export const chartComponents = {
  BookMapDiagram,
  CoreLoopDiagram,
  LtvCacChart,
  ReverseEngineeredMetricsDiagram,
  ScoreFloorChart,
  TippingPointDiagram,
  ValidationFunnel,
};
