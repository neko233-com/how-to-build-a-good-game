import type { ReactNode } from 'react';

export interface FigureProps {
  /** public/ 下的相对路径，例如 images/cover.webp */
  src: string;
  /** 必须写，正文里不要出现无替代文本的图 */
  alt: string;
  /** 图注：正文应当指得到这张图，所以图注是常规而不是可选项 */
  caption?: ReactNode;
  width?: number;
  height?: number;
}

export function Figure({ src, alt, caption, width, height }: FigureProps) {
  // 部署在 GitHub Pages 子路径下，public/ 里的静态资源必须带上 base 前缀
  const resolved = `${import.meta.env.BASE_URL}${src.replace(/^\/+/, '')}`;

  return (
    <figure>
      <img
        src={resolved}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        className="border-border mx-auto h-auto w-full rounded-xl border"
      />
      {caption ? (
        <figcaption className="text-muted-foreground mt-3 text-center text-sm">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
