import type { IGatsbyImageData } from 'gatsby-plugin-image';

// The picture that social networks and messengers show in link previews.
export type ShareImage = {
  src: string,
  // The real size in pixels. Left out when unknown, so that a wrong size is never declared.
  width?: number,
  height?: number,
};

// Share images are queried as one JPEG at most 1200px wide (FULL_WIDTH with `breakpoints: [1200]`).
// For full-width images Gatsby reports a width of 1 and a height relative to it, so the real width
// is read from the file's srcSet entry, e.g. "/static/…/01-cover.jpg 1200w".
export const getShareImage = (image?: IGatsbyImageData | null): ShareImage | undefined => {
  const fallback = image?.images?.fallback;
  if (!image || !fallback?.src) {
    return undefined;
  }

  const srcSetEntry = (fallback.srcSet || '')
    .split(',')
    .map((candidate: string): string[] => candidate.trim().split(/\s+/))
    .find(([url]: string[]): boolean => url === fallback.src);
  const width = Number(srcSetEntry?.[1]?.match(/^(\d+)w$/)?.[1]);

  if (!width || !image.width || !image.height) {
    return { src: fallback.src };
  }

  return {
    src: fallback.src,
    width,
    height: Math.round((width * image.height) / image.width),
  };
};
