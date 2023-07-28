export enum SectionHash {
  ObservationBS3 = 'observation BS3',
  ObservationXGT = 'observation XGT',
  ObservationHT9 = 'observation HT9',
  ObservationHX2 = 'observation HX2',
  ObservationPW8 = 'observation PW8',
  ObservationTG9 = 'observation TG9',
  ObservationVG2 = 'observation VG2',
  ObservationME3 = 'observation ME3',
  ObservationSQ4 = 'observation SQ4',
  ObservationUR9 = 'observation UR9',
  ObservationNW7 = 'observation NW7',
  ObservationEA5 = 'observation EA5',
  ObservationGS1 = 'observation GS1',
  ObservationEV2 = 'observation EV2',
  ObservationOM3 = 'observation OM3',

  AssumptionWB3 = 'assumption WB3',
  AssumptionBZ4 = 'assumption BZ4',
  AssumptionML1 = 'assumption ML1',
  AssumptionBQ2 = 'assumption BQ2',
  AssumptionCW5 = 'assumption CW5',
  AssumptionHT4 = 'assumption HT4',
  AssumptionHB5 = 'assumption HB5',
  AssumptionPU9 = 'assumption PU9',
  AssumptionGS2 = 'assumption GS2',
}

export type Section = {
  hash?: SectionHash,
  deps?: SectionHash[],
  siblings?: SectionHash[],
  title?: string,
};

export type SectionsMap = {
  [values in SectionHash]?: Section;
};
