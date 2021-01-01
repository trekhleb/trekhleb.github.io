import { Tags } from './Tag';

export type Project = {
  name?: string | null,
  tags?: Tags | null,
};

export type Projects = (Project | null)[];
