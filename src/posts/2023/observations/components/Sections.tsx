import React from 'react';
import { SectionsContext, SectionsContextT } from '../contexts/sections';
import { Graph } from './Graph';
import { Divider } from './Divider';
import { sectionsReducer } from '../reducers/sections';

type SectionsProps = {
  children: React.ReactNode,
}

export function Sections(props: SectionsProps): React.ReactElement {
  const { children } = props;

  const [sections, setSection] = React.useReducer(sectionsReducer, {});
  const context = React.useMemo<SectionsContextT>(
    () => ({ sections, setSection }),
    [sections],
  );

  return (
    <SectionsContext.Provider value={context}>
      <Graph />
      <Divider />
      {children}
      <div>&nbsp;</div>
    </SectionsContext.Provider>
  );
}
