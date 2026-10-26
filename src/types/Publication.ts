import React from 'react';
import { DateString } from './Date';
import { Link } from './Link';
import { Image } from './Image';

export enum Publisher {
  ACM = 'ACM',
  ADTmag = 'ADTmag',
  AITimeJournal = 'AI Time Journal',
  ArXiv = 'arXiv',
  BetterProgramming = 'Better Programming',
  BramUs = 'Bram.us',
  CellPress = 'Cell Press',
  CodeProject = 'CodeProject',
  Changelog = 'Changelog',
  DOU = 'DOU',
  DataDrivenInvestor = 'Data Driven Investor',
  DiceInsights = 'Dice Insights',
  EasysPublishing = 'Easys Publishing',
  GeeksForGeeks = 'GeeksForGeeks',
  GitHubBlog = 'GitHub Blog',
  HackerNews = 'Hacker News',
  HackerNewsletter = 'Hacker Newsletter',
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
  SBC = 'SBC',
  SegmentFault = 'SegmentFault',
  SidebarIO = 'Sidebar.io',
  Springer = 'Springer',
  TechCrunch = 'TechCrunch',
  TLDRNewsletter = 'TLDR Newsletter',
  TowardsDataScience = 'Towards Data Science',
  TUDelft = 'TU Delft',
  UniversidadeDeBrasilia = 'Universidade de Brasília',
  UniversidadeDoPorto = 'Universidade do Porto',
  Wikipedia = 'Wikipedia',
  Wiley = 'Wiley',
  Zenn = 'Zenn',
  Zenodo = 'Zenodo',
}

export type PublisherData = {
  logo: Image,
  description?: React.ReactNode,
}

// The type of a publication based on who wrote it and who vetted it.
export enum PublicationTag {
  // Written by me (self-published or editorially approved).
  Authored = 'Authored',
  // My work picked by curators or communities (newsletters, Hacker News, etc.).
  Featured = 'Featured',
  // Third parties writing about me or my work (reviews, interviews, mentions).
  Coverage = 'Coverage',
  // Peer-reviewed papers and theses citing or using my work.
  ResearchCitation = 'Cited in research',
  // Books citing my work.
  BookCitation = 'Cited in books',
  // Canonical documentation listing my work (MDN, Wikipedia, etc.).
  ReferenceDocs = 'Reference docs',
}

export type Publication = {
  title: string;
  summary: string[];
  link: Link;
  date: DateString;
  publisher: Publisher;
  tag: PublicationTag;
};
