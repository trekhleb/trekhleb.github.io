import React from 'react';

import type { Image } from '../../types/Image';
import FluidImage from './FluidImage';

type AvatarProps = {
  avatar: Image,
  className?: string | null | undefined,
  loading?: 'eager' | 'lazy',
};

const Avatar = (props: AvatarProps): React.ReactElement => {
  const { avatar, className, loading } = props;

  return (
    <div className={`overflow-hidden rounded-full bg-subtle ring-1 ring-line ${className || ''}`}>
      <FluidImage image={avatar} loading={loading} />
    </div>
  );
};

export default Avatar;
