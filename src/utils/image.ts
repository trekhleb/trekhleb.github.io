import { IGatsbyImageData } from 'gatsby-plugin-image';

import { Image } from '../types/Image';

/*
  An entry may carry one picture or several. Almost all of them carry one, so the single `Image`
  shape stays the normal way to write them; this widens it to a list once, here, instead of making
  every component handle both.
*/
export const toImageList = (image?: Image | Image[] | null): Image[] => {
  if (!image) {
    return [];
  }
  const images = Array.isArray(image) ? image : [image];
  return images.filter((item: Image | null | undefined): item is Image => !!item);
};

// Absolute address of the full-size file behind a processed image, for "open the original".
export const fullSizeImageURL = (
  fluidImage: IGatsbyImageData | null | undefined,
  origin: string,
): string | undefined => {
  const src = fluidImage?.images?.fallback?.src;
  return src ? `${origin}${src}` : undefined;
};
