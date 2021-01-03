import { Tags } from './Tag';
import { DateString } from './Date';

export type Project = {
  name?: string | null,
  coverURL?: string | null,
  srcURL?: string | null,
  demoURL?: string | null,
  description?: (string | null)[] | null,
  startDate?: DateString | null,
  endDate?: DateString | null,
  tags?: Tags | null,
  archived?: boolean | null,
};

export type Projects = (Project | null)[];
