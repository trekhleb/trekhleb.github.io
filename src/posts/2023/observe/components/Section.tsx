import React from 'react';

import { Divider } from './Divider';

export type SectionContextT = {
  hash: string,
  normalizedHash: string,
}

export const SectionContext = React.createContext<SectionContextT>({ hash: '', normalizedHash: '' });

type SectionProps = {
  children: React.ReactNode,
  hash: string,
}

export function Section(props: SectionProps): React.ReactElement {
  const { children, hash } = props;

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
