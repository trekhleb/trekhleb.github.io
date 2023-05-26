import React from 'react';

import type { Image } from '../../types/Image';
import FluidImage from './FluidImage';

type AvatarProps = {
  avatar: Image,
  className?: string | null | undefined,
};

const Avatar = (props: AvatarProps): React.ReactElement => {
  const { avatar, className } = props;

  return (
    <div className={className || ''}>
      <FluidImage image={avatar} />
    </div>
  );
};

export default Avatar;
