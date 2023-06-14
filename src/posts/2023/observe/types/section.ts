export enum SectionHash {
  ObservationBS3 = 'observation BS3',
  ObservationXGT = 'observation XGT',
  ObservationHT9 = 'observation HT9',
  ObservationHX2 = 'observation HX2',
  ObservationPW8 = 'observation PW8',
  ObservationTG9 = 'observation TG9',
  ObservationVG2 = 'observation VG2',
  ObservationME3 = 'observation ME3',

  AssumptionWB3 = 'assumption WB3',
  AssumptionBZ4 = 'assumption BZ4',
  AssumptionML1 = 'assumption ML1',
  AssumptionBQ2 = 'assumption BQ2',
}

export type Section = {
  hash?: SectionHash,
  deps?: SectionHash[],
  siblings?: SectionHash[],
};

export type SectionsMap = {
  [values in SectionHash]?: Section;
};
