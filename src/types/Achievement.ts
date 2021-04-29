import { Image } from './Image';
import { DateString } from './Date';
import { Link } from './Link';

export type Achievement = {
  title: string,
  link?: Link,
  image?: Image,
  date?: DateString,
};
