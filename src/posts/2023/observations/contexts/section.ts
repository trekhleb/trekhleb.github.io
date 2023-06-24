import React from 'react';
import { Section } from '../types/section';

export type SectionContextT = Section;

export const SectionContext = React.createContext<SectionContextT>({
  hash: undefined,
  deps: [],
  siblings: [],
});
