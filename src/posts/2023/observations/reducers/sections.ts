import { Section, SectionsMap } from '../types/section';

export const sectionsReducer = (state: SectionsMap, section: Section): SectionsMap => {
  return { ...state, [section?.hash || '']: section };
};
