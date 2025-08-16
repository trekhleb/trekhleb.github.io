import React from 'react';
import { Tag } from './Tag';
import { DateString } from './Date';
import { Link } from './Link';
import { Image } from './Image';

export enum Publisher {
  AITimeJournal = 'AI Time Journal',
  CodeProject = 'CodeProject',
  Changelog = 'Changelog',
  DOU = 'DOU',
  DataDrivenInvestor = 'Data Driven Investor',
  GeeksForGeeks = 'GeeksForGeeks',
  HackerNews = 'Hacker News',
  HackerNoon = 'HackerNoon',
  HowIGotJob = 'HowIGotJob',
  ITNEXT = 'ITNEXT',
  JavaScriptInPlainEnglish = 'JavaScript in Plain English',
  JavaScriptWeekly = 'JavaScript Weekly',
  KDnuggets = 'KDnuggets',
  MozillaMDNWebDocs = 'Mozilla MDN Web Docs',
  Newline = 'Newline',
  TechCrunch = 'TechCrunch',
  TLDRNewsletter = 'TLDR Newsletter',
  TowardsDataScience = 'Towards Data Science',
  Wikipedia = 'Wikipedia',
}

export type PublisherData = {
  logo: Image,
  description?: React.ReactNode,
}

export type Publication = {
  title: string;
  summary: string[];
  link: Link;
  date: DateString;
  publisher: Publisher;
  tags?: Tag[];
};
