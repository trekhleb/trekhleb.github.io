import { Tag } from './Tag';
import { DateString } from './Date';
import { Image } from './Image';
import { Link } from './Link';
import { GitHubRepo } from './GitHubRepo';
import { Achievement } from './Achievement';

export type ProjectID = string;

export type Project = {
  // Project ID must be the same as the project key in the projects map.
  id: ProjectID,
  name?: string,
  summary?: string[],
  // Relative to the src/images folder path to the image (i.e. projects/links-detector-cover.png)
  cover?: Image,
  srcURL?: Link,
  demoURL?: Link,
  startDate?: DateString,
  endDate?: DateString,
  tags?: Tag[],
  archived?: boolean,
  gitHubRepo?: GitHubRepo,
  links?: Link[],
  achievements?: Achievement[],
};

export type Projects = Record<ProjectID, Project>;
