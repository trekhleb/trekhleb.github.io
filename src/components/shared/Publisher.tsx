import React from 'react';

import type { Publisher as PublisherT } from '../../types/Publication';
import FluidImage from './FluidImage';
import { Image } from '../../types/Image';

type PublisherProps = {
  publisher: PublisherT,
  publisherLogo: Image,
};

const Publisher = (props: PublisherProps): React.ReactElement => {
  const { publisher, publisherLogo } = props;

  return (
    <div
      key={publisher}
      className="inline-block rounded-sm text-xs font-normal  flex flex-row justify-center items-center gap-1"
    >
      <FluidImage image={publisherLogo} className="w-5" />
      <div>{publisher}</div>
    </div>
  );
};

export default Publisher;
