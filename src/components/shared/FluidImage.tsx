import React from 'react';
import Img from 'gatsby-image';

import { Image } from '../../types/Image';
import { useFluidCover } from '../../hooks/useFluidCover';

type FluidImageProps = {
  image: Image | null | undefined,
};

const FluidImage = (props: FluidImageProps): React.ReactElement | null => {
  const { image } = props;

  const fluidImage = useFluidCover({ imagePath: image?.srcPath });

  if (!image || !fluidImage) {
    // @TODO: Consider to return an image placeholder.
    return null;
  }

  return (
    <Img
      // @ts-ignore
      fluid={fluidImage.fluid}
      style={{ height: '100%' }}
      alt={image?.caption || ''}
      title={image?.caption || ''}
      durationFadeIn={500}
      fadeIn
    />
  );
};

export default FluidImage;
