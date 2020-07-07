// @flow

export type ProjectType = {|
  name: string,
  description: string[],
  url?: string,
  startDate?: Date,
  endDate?: Date,
  archived?: boolean,
|};
