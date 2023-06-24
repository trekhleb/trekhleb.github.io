import React from 'react';
import { Section, SectionsMap } from '../types/section';

export type SectionsContextT = {
  sections: SectionsMap,
  setSection: (section: Section) => void,
};

export const SectionsContext = React.createContext<SectionsContextT>({
  sections: {},
  setSection: () => {},
});
