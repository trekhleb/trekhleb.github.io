import React from 'react';

import { SectionsContext } from '../contexts/sections';
import { Spinner } from './Spinner';
import { Section } from '../types/section';

export function Graph(): React.ReactElement {
  const { sections } = React.useContext(SectionsContext);

  if (!sections || !Object.values(sections).length) return <Spinner />;

  const sectionsArr: Section[] = Object.values(sections);

  const sectionsCounter = (
    <div className="text-sm">
      Sections in total:{' '}
      <span
        className="text-xs rounded-md px-1 py-1 font-mono font-medium bg-black text-white"
      >
        {sectionsArr.length}
      </span>
    </div>
  );

  return (
    <div>
      {sectionsCounter}
    </div>
  );
}
