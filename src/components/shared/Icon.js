// @flow
import React from 'react';
import type { Node } from 'react';
import { iconKeys, icons } from '../../icons';

type IconProps = {
  iconKey: $Values<typeof iconKeys>,
  className?: ?string,
};

const Icon = (props: IconProps): Node => {
  const { iconKey, className } = props;

  if (!Object.prototype.hasOwnProperty.call(icons, iconKey)) {
    return iconKey;
  }

  const IconComponent = icons[iconKey];

  return (
    <IconComponent
      className={`w-5 h-5 fill-current ${className || ''}`}
    />
  );
};

export default Icon;
