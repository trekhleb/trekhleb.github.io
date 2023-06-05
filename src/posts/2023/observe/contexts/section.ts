import React from 'react';
import { SectionHash } from '../types/section';

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
