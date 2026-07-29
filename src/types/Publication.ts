import React from 'react';
import { Tag } from './Tag';
import { DateString } from './Date';
import { Link } from './Link';
import { Image } from './Image';

export enum Publisher {
  ACM = 'ACM',
  AITimeJournal = 'AI Time Journal',
  ArXiv = 'arXiv',
  BetterProgramming = 'Better Programming',
  BramUs = 'Bram.us',
  CodeProject = 'CodeProject',
  Changelog = 'Changelog',
  DOU = 'DOU',
  DataDrivenInvestor = 'Data Driven Investor',
  EasysPublishing = 'Easys Publishing',
  GeeksForGeeks = 'GeeksForGeeks',
  HackerNews = 'Hacker News',
  HackerNoon = 'HackerNoon',
  HanbitMedia = 'Hanbit Media',
  HowIGotJob = 'HowIGotJob',
  IEEE = 'IEEE',
  IMasters = 'iMasters',
  ITNEXT = 'ITNEXT',
  JavaScriptInPlainEnglish = 'JavaScript in Plain English',
  JavaScriptWeekly = 'JavaScript Weekly',
  Juejin = 'Juejin',
  KDnuggets = 'KDnuggets',
  Medium = 'Medium',
  MozillaMDNWebDocs = 'Mozilla MDN Web Docs',
  Newline = 'Newline',
  NodeWeekly = 'Node Weekly',
  Packt = 'Packt',
  PyCodersWeekly = 'PyCoder\'s Weekly',
  SegmentFault = 'SegmentFault',
  SidebarIO = 'Sidebar.io',
  Springer = 'Springer',
  TechCrunch = 'TechCrunch',
  TLDRNewsletter = 'TLDR Newsletter',
  TowardsDataScience = 'Towards Data Science',
  TUDelft = 'TU Delft',
  UniversidadeDeBrasilia = 'Universidade de Brasília',
  Wikipedia = 'Wikipedia',
  Wiley = 'Wiley',
  Zenn = 'Zenn',
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
