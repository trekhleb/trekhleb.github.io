// @flow
import React from 'react';
import type { Node } from 'react';
import { iconKeys, icons } from '../../icons';
import type { IconType } from '../../icons';

const defaultProps = {
  className: '',
};

type IconProps = {
  iconKey: $Values<typeof iconKeys>,
  className?: ?string,
};

const Icon = (props: IconProps): Node => {
  const {
    iconKey,
    className = defaultProps.className,
  } = props;

  if (!Object.prototype.hasOwnProperty.call(icons, iconKey)) {
    return iconKey;
  }

  const icon: IconType = icons[iconKey];
  const IconComponent = icon.component;

  const fillCurrent = Object.prototype.hasOwnProperty.call(icon, 'fillCurrent')
    ? icon.fillCurrent
    : true;

  const fillCurrentClass = fillCurrent ? 'fill-current' : '';

  return (
    <IconComponent
      className={`${fillCurrentClass} ${className || ''}`}
    />
  );
};

Icon.defaultProps = defaultProps;

export default Icon;
