import React from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

import { Image } from '../../types/Image';
import { useFluidCover } from '../../hooks/useFluidCover';

type FluidImageProps = {
  image?: Image | null | undefined,
  fluidImage?: IGatsbyImageData | null | undefined,
  className?: string,
  // How the picture fills its box (default: cover).
  objectFit?: 'cover' | 'contain',
  // "eager" for pictures that are on screen at first paint: the server HTML then carries the
  // real src, so the browser fetches it right away instead of after the page scripts run.
  loading?: 'eager' | 'lazy',
};

const FluidImage = (props: FluidImageProps): React.ReactElement | null => {
  const {
    image,
    fluidImage: fluidImageProvided,
    className = '',
    objectFit = 'cover',
    loading = 'lazy',
  } = props;

  const fluidImageFetched = useFluidCover({ imagePath: image?.srcPath });
  const fluidImage = fluidImageProvided || fluidImageFetched;

  if (!fluidImage) {
    // @TODO: Consider to return an image placeholder.
    return null;
  }

  return (
    <GatsbyImage
      image={fluidImage}
      style={{ height: '100%' }}
      alt={image?.caption || ''}
      title={image?.caption || ''}
      className={className}
      objectFit={objectFit}
      loading={loading}
    />
  );
};

export default FluidImage;
