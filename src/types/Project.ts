import { Tag } from './Tag';
import { DateString } from './Date';
import { Image } from './Image';
import { Link } from './Link';

export type Project = {
  name?: string,
  summary?: string[],
  description?: string[],
  cover?: Image,
  srcURL?: Link,
  demoURL?: Link,
  startDate?: DateString,
  endDate?: DateString,
  tags?: Tag[],
  archived?: boolean,
};
