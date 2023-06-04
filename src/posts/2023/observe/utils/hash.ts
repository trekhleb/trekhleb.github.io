import { SectionHash } from '../types/section';

export const normalizeHash = (hash: SectionHash): string => {
  return hash.trim().toLowerCase().replace(/ /g, '-');
};
