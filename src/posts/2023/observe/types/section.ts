export enum SectionHash {
  Observation1 = 'observation 1',
  Observation2 = 'observation 2',
  Observation3 = 'observation 3',
  Observation4 = 'observation 4',
  Observation5 = 'observation 5',

  Assumption1 = 'assumption 1',
  Assumption2 = 'assumption 2',
  Assumption3 = 'assumption 3',
  Assumption4 = 'assumption 4',
}

export type Section = {
  hash?: SectionHash,
  deps?: SectionHash[],
  siblings?: SectionHash[],
};
