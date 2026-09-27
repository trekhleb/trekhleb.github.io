export function numberToConciseString(num: number): string {
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1).replace(/\.0$/, '')}K`;
  }
  return `${num}`;
}

// Rounder variant for headline numbers: 257186 → "257K", 12345 → "12.3K", 43 → "43".
export function numberToHeadlineString(num: number): string {
  if (num >= 100000) {
    return `${Math.round(num / 1000)}K`;
  }
  return numberToConciseString(num);
}
