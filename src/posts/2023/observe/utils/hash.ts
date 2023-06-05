import { SectionHash } from '../types/section';

export const normalizeHash = (hash: SectionHash): string => {
  return hash.trim().toLowerCase().replace(/ /g, '-');
};

const tagClasses: Record<string, {primary: string, secondary: string}> = {
  assumption: {
    primary: 'bg-orange-500 text-white',
    secondary: 'bg-orange-100',
  },
  observation: {
    primary: 'bg-black text-white',
    secondary: 'bg-slate-200',
  },
};

export const getHashColor = (hash: SectionHash | undefined, primary = true): string => {
  const defaultPrimaryClasses = 'bg-black text-white';
  const defaultSecondaryClasses = 'bg-slate-200';
  const defaultClasses = primary ? defaultPrimaryClasses : defaultSecondaryClasses;

  if (!hash) return defaultClasses;

  const hashPrefix = hash.toLocaleLowerCase().trim().split(' ')?.[0];

  if (hashPrefix && tagClasses[hashPrefix]) {
    return primary ? tagClasses[hashPrefix].primary : tagClasses[hashPrefix].secondary;
  }

  return defaultClasses;
};
