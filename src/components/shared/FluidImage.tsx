import React from 'react';
import Img from 'gatsby-image';

import { Image, FluidImage as FluidImageType } from '../../types/Image';
import { useFluidCover } from '../../hooks/useFluidCover';

type FluidImageProps = {
  image?: Image | null | undefined,
  fluidImage?: FluidImageType | null | undefined,
  className?: string,
};

const FluidImage = (props: FluidImageProps): React.ReactElement | null => {
  const { image, fluidImage: fluidImageProvided, className = '' } = props;

  const fluidImageFetched = useFluidCover({ imagePath: image?.srcPath });
  const fluidImage = fluidImageProvided || fluidImageFetched;

  if (!fluidImage) {
    // @TODO: Consider to return an image placeholder.
    return null;
  }

  return (
    <Img
      // @ts-ignore
      fluid={fluidImage}
      style={{ height: '100%' }}
      alt={image?.caption || ''}
      title={image?.caption || ''}
      durationFadeIn={500}
      className={className}
      fadeIn
    />
  );
};

export default FluidImage;
