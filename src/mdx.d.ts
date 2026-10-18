declare module '*.mdx' {
  import type { ComponentType } from 'react';

  /** MDX 文件默认导出一个 React 组件；正文通过 MDXProvider 注入自定义组件 */
  const MdxComponent: ComponentType<Record<string, unknown>>;
  export default MdxComponent;
}
