export const wait = async (ms: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

// Whole years from `from` to `to` (e.g. 2007-08-01 → 2026-09-27 is 19). Counted in UTC, so the
// build (server) and every visitor's browser get the same number in any time zone.
export const fullYearsBetween = (from: Date, to: Date): number => {
  let years = to.getUTCFullYear() - from.getUTCFullYear();
  const anniversaryPassed = to.getUTCMonth() > from.getUTCMonth()
    || (to.getUTCMonth() === from.getUTCMonth() && to.getUTCDate() >= from.getUTCDate());
  if (!anniversaryPassed) {
    years -= 1;
  }
  return Math.max(0, years);
};
