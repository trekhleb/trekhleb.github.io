import { Tags } from './Tag';
import { DateString } from './Date';

export type Project = {
  name?: string | null,
  summary?: (string | null)[] | null,
  description?: (string | null)[] | null,
  coverPath?: string | null,
  srcURL?: string | null,
  demoURL?: string | null,
  startDate?: DateString | null,
  endDate?: DateString | null,
  tags?: Tags | null,
  archived?: boolean | null,
};

export type Projects = (Project | null)[];
