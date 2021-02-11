import { Tag } from './Tag';
import { DateString } from './Date';
import { Image } from './Image';
import { Link } from './Link';
import { GitHubRepo } from './GitHubRepo';

export type Project = {
  name?: string,
  summary?: string[],
  description?: string[],
  // Relative to the src/images folder path to the image (i.e. projects/links-detector-cover.png)
  cover?: Image,
  srcURL?: Link,
  demoURL?: Link,
  startDate?: DateString,
  endDate?: DateString,
  tags?: Tag[],
  archived?: boolean,
  gitHubRepo?: GitHubRepo,
};
