import { Tag } from './Tag';
import { DateString } from './Date';
import { Link } from './Link';
import { Image } from './Image';

export type Publisher =
  | 'AI Time Journal'
  | 'CodeProject'
  | 'DOU'
  | 'Data Driven Investor'
  | 'GeeksForGeeks'
  | 'Hacker News'
  | 'HackerNoon'
  | 'HowIGotJob'
  | 'ITNEXT'
  | 'JavaScript in Plain English'
  | 'KDnuggets'
  | 'Newline'
  | 'TechCrunch'
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
