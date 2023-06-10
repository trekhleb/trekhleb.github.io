import React from 'react';
import { BiLoaderCircle } from '@react-icons/all-files/bi/BiLoaderCircle';

export function Spinner(): React.ReactElement {
  return (
    <div className="flex flex-1 items-center justify-center">
      <BiLoaderCircle className="animate-spin" />
    </div>
  );
}
