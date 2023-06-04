import React from 'react';

import { Divider } from './Divider';
import { SectionHash } from '../types/section';
import { normalizeHash } from '../utils/hash';

export type SectionContextT = {
  hash: SectionHash | undefined,
  deps: SectionHash[],
  normalizedHash: string | undefined,
}

export const SectionContext = React.createContext<SectionContextT>({
  hash: undefined,
  deps: [],
  normalizedHash: undefined,
});

type SectionProps = {
  children: React.ReactNode,
  hash: SectionHash,
  deps?: SectionHash[],
}

export function Section(props: SectionProps): React.ReactElement {
  const { children, hash, deps } = props;

  const context = React.useMemo<SectionContextT>(
    () => ({
      hash,
      deps: deps || [],
      normalizedHash: normalizeHash(hash),
    }),
    [hash, deps],
  );

  return (
    <SectionContext.Provider value={context}>
      {children}
      <Divider />
    </SectionContext.Provider>
  );
}
