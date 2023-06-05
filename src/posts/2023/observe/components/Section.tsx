import React from 'react';

import { Divider } from './Divider';
import { SectionHash } from '../types/section';
import { normalizeHash } from '../utils/hash';
import { SectionContext, SectionContextT } from '../contexts/section';

type SectionProps = {
  children: React.ReactNode,
  hash: SectionHash,
  deps?: SectionHash[],
  siblings?: SectionHash[],
}

export function Section(props: SectionProps): React.ReactElement {
  const {
    children, hash, deps, siblings,
  } = props;

  const context = React.useMemo<SectionContextT>(
    () => ({
      hash,
      deps: deps || [],
      siblings: siblings || [],
      normalizedHash: normalizeHash(hash),
    }),
    [hash, deps, siblings],
  );

  return (
    <SectionContext.Provider value={context}>
      {children}
      <Divider />
    </SectionContext.Provider>
  );
}
