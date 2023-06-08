import React from 'react';

import { Divider } from './Divider';
import { Section as SectionT } from '../types/section';
import { SectionContext, SectionContextT } from '../contexts/section';

type SectionProps = SectionT & { children: React.ReactNode }

export function Section(props: SectionProps): React.ReactElement {
  const {
    children, hash, deps, siblings,
  } = props;

  const context = React.useMemo<SectionContextT>(
    () => ({ hash, deps, siblings }),
    [hash, deps, siblings],
  );

  return (
    <SectionContext.Provider value={context}>
      {children}
      <Divider />
    </SectionContext.Provider>
  );
}
