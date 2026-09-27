import React from 'react';

import type { Publisher as PublisherT } from '../../types/Publication';
import FluidImage from './FluidImage';
import { Image } from '../../types/Image';

type PublisherProps = {
  publisher: PublisherT,
  publisherLogo?: Image,
};

const Publisher = (props: PublisherProps): React.ReactElement => {
  const { publisher, publisherLogo } = props;

  return (
    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-fg/85">
      {publisherLogo && (
        <span className="h-5 w-5 shrink-0 overflow-hidden rounded bg-subtle">
          <FluidImage image={publisherLogo} className="h-full w-full" />
        </span>
      )}
      <span>{publisher}</span>
    </span>
  );
};

export default Publisher;
