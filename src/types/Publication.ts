import { Tag } from './Tag';
import { DateString } from './Date';
import { Link } from './Link';
import { Image } from './Image';

export type Publisher =
  | 'AI Time Journal'
  | 'DOU'
  | 'Data Driven Investor'
  | 'GeeksForGeeks'
  | 'HackerNoon'
  | 'HowIGotJob'
  | 'ITNEXT'
  | 'JavaScript in Plain English'
  | 'KDnuggets'
  | 'Newline'
  | 'Towards Data Science';

export type Publication = {
  title: string;
  summary: string[];
  link: Link;
  date: DateString;
  publisher: Publisher;
  publisherLogo: Image,
  tags?: Tag[];
};
