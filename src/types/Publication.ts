import { Tag } from './Tag';
import { DateString } from './Date';
import { Link } from './Link';

export type Publication = {
  title: string,
  summary?: string[],
  link: Link,
  date: DateString,
  publisher: string,
  tags?: Tag[],
};
