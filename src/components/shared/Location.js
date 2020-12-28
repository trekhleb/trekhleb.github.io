// @flow
import React from 'react';
import type { LocationType } from '../../types/LocationType';
import Icon from './Icon';
import { iconKeys } from '../../icons';

type LocationProps = {
  location: LocationType,
};

const Location = (props: LocationProps) => {
  const { location } = props;

  return (
    <div className="flex flex-row items-center font-light">
      <Icon iconKey={iconKeys.location} className="mr-1 w-4 h-4" />
      <div>{location.name}</div>
    </div>
  );
};

export default Location;
