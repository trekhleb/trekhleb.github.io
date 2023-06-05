import React from 'react';

import { Divider } from './Divider';
import { SectionHash } from '../types/section';
import { normalizeHash } from '../utils/hash';

export type SectionContextT = {
  hash: SectionHash | undefined,
  deps: SectionHash[],
  siblings: SectionHash[],
  normalizedHash: string | undefined,
}

export const SectionContext = React.createContext<SectionContextT>({
  hash: undefined,
  deps: [],
  siblings: [],
  normalizedHash: undefined,
});

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
