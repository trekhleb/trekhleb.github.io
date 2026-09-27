import React from 'react';
import { FiMapPin } from '@react-icons/all-files/fi/FiMapPin';

import type { Location as LocationType } from '../../types/Location';

type LocationProps = {
  location: LocationType,
};

const Location = (props: LocationProps): React.ReactElement => {
  const { location } = props;

  return (
    <span className="inline-flex items-center gap-1.5">
      <FiMapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
      <span>{location.name}</span>
    </span>
  );
};

export default Location;
