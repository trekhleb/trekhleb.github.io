import React from 'react';
import { FiMapPin } from '@react-icons/all-files/fi/FiMapPin';

import type { Location as LocationType } from '../../types/Location';

type LocationProps = {
  location: LocationType,
};

const Location = (props: LocationProps): React.ReactElement => {
  const { location } = props;

  return (
    <div className="flex flex-row items-center font-light">
      <FiMapPin className="mr-1 w-4 h-4" />
      <div>{location.name}</div>
    </div>
  );
};

export default Location;
