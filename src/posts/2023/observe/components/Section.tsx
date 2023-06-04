import React from 'react';

import { Divider } from './Divider';
import { SectionHash } from '../types/section';

export type SectionContextT = {
  hash: SectionHash | undefined,
  normalizedHash: string | undefined,
}

export const SectionContext = React.createContext<SectionContextT>({
  hash: undefined,
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
      normalizedHash: hash.trim().toLowerCase().replace(/ /g, '-'),
    }),
    [hash],
  );

  return (
    <SectionContext.Provider value={context}>
      {children}
      <Divider />
    </SectionContext.Provider>
  );
}
