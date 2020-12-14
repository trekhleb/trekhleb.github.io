
// @flow
import React from "react";
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
    <figure>
      <img
        className="w-64 h-64 rounded-full"
        src={avatar?.src}
        alt={avatar?.caption}
      />
    </figure>
  );
};

export default Avatar;
