import { CSSProperties } from 'react';
import colors from 'tailwindcss/colors';
import { SectionHash } from '../types/section';

export const normalizeHash = (hash: SectionHash | undefined): string => {
  return hash?.trim().toLowerCase().replace(/ /g, '-') || '';
};

const hashClasses: Record<string, {primary: string, secondary: string}> = {
  assumption: {
    primary: 'bg-orange-500 text-white',
    secondary: 'bg-orange-100',
  },
  observation: {
    primary: 'bg-black text-white',
    secondary: 'bg-slate-200',
  },
  question: {
    primary: 'bg-rose-500 text-white',
    secondary: 'bg-rose-200',
  },
};

const hashStyles: Record<string, CSSProperties> = {
  assumption: {
    backgroundColor: colors.orange[500],
    color: 'white',
  },
  observation: {
    backgroundColor: colors.black,
    color: 'white',
  },
  question: {
    backgroundColor: colors.rose[500],
    color: 'white',
  },
};

const getHashPrefix = (hash: SectionHash): string => {
  return hash.toLocaleLowerCase().trim().split(' ')?.[0];
};

export const getHashClasses = (hash: SectionHash | undefined, primary = true): string => {
  const defaultPrimaryClasses = 'bg-black text-white';
  const defaultSecondaryClasses = 'bg-slate-200';
  const defaultClasses = primary ? defaultPrimaryClasses : defaultSecondaryClasses;

  if (!hash) return defaultClasses;

  const hashPrefix = getHashPrefix(hash);

  if (hashPrefix && hashClasses[hashPrefix]) {
    return primary ? hashClasses[hashPrefix].primary : hashClasses[hashPrefix].secondary;
  }

  return defaultClasses;
};

export const getHashStyles = (hash: SectionHash | undefined): CSSProperties => {
  if (!hash) return {};

  const hashPrefix = getHashPrefix(hash);

  if (hashPrefix && hashStyles[hashPrefix]) {
    return hashStyles[hashPrefix];
  }

  return {};
};
