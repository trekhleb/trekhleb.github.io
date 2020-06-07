
// @flow
import React from 'react';
import type { Node } from 'react';
import type { ImageType } from '../../types/ImageType';

type AvatarProps = {
  avatar: ?ImageType,
};

const Avatar = (props: AvatarProps): Node => {
  const { avatar } = props;

  if (!avatar) {
    return null;
  }

  return (
    <figure className="mr-0 sm:mr-6">
      <img
        className="w-48 h-48 rounded-full"
        src={avatar?.src}
        alt={avatar?.caption}
      />
    </figure>
  );
};

export default Avatar;
