import React from 'react';

import { SectionsContext } from '../contexts/sections';
import { Spinner } from './Spinner';

export function Graph(): React.ReactElement {
  const { sections } = React.useContext(SectionsContext);

  if (!sections || !Object.values(sections).length) return <Spinner />;

  return (
    <div>
      Graph...
    </div>
  );
}
