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
  BlekingeInstituteOfTechnology = 'Blekinge Institute of Technology',
  SeoulNationalUniversity = 'Seoul National University',
  DrexelUniversity = 'Drexel University',
  BUET = 'Bangladesh University of Engineering and Technology',
  Metropolia = 'Metropolia University of Applied Sciences',
  UniversiteDeLille = 'Université de Lille',
  UniversitaetKoblenzLandau = 'Universität Koblenz-Landau',
  FHOberoesterreich = 'University of Applied Sciences Upper Austria',
  StrathmoreUniversity = 'Strathmore University',
  UFES = 'Universidade Federal do Espírito Santo',
  IManagerPublications = 'i-manager Publications',
  UAB = 'Universitat Autònoma de Barcelona',
  ISCRAM = 'ISCRAM',
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
  HelloGitHub = 'HelloGitHub',
  HowIGotJob = 'HowIGotJob',
  IEEE = 'IEEE',
  IMasters = 'iMasters',
  ITNEXT = 'ITNEXT',
  JavaScriptInPlainEnglish = 'JavaScript in Plain English',
  JavaScriptWeekly = 'JavaScript Weekly',
  Juejin = 'Juejin',
  KDnuggets = 'KDnuggets',
  KIICE = 'KIICE',
  McMasterUniversity = 'McMaster University',
  Medium = 'Medium',
  MozillaMDNWebDocs = 'Mozilla MDN Web Docs',
  Newline = 'Newline',
  NodeWeekly = 'Node Weekly',
  Packt = 'Packt',
  PyCodersWeekly = 'PyCoder\'s Weekly',
  RuanYifengWeekly = 'Ruan Yifeng\'s Weekly',
  SBC = 'SBC',
  SegmentFault = 'SegmentFault',
  SidebarIO = 'Sidebar.io',
  Springer = 'Springer',
  TechCrunch = 'TechCrunch',
  TLDRNewsletter = 'TLDR Newsletter',
  TowardsDataScience = 'Towards Data Science',
  FSUJena = 'Friedrich Schiller University Jena',
  TUDelft = 'TU Delft',
  UniversidadeDeBrasilia = 'Universidade de Brasília',
  UniversidadeDoPorto = 'Universidade do Porto',
  UniversiteDeNamur = 'Université de Namur',
  UniversityOfPula = 'Juraj Dobrila University of Pula',
  UtrechtUniversity = 'Utrecht University',
  VictoriaUniversityOfWellington = 'Victoria University of Wellington',
  VirginiaCommonwealthUniversity = 'Virginia Commonwealth University',
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
