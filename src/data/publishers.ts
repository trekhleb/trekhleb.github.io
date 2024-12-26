import { Publisher, PublisherData } from '../types/Publication';

export const PUBLISHERS: Record<Publisher, PublisherData> = {
  [Publisher.AITimeJournal]: { logo: { srcPath: 'publishers/ai-time-journal.jpg' } },
  [Publisher.CodeProject]: { logo: { srcPath: 'publishers/code-project.jpg' } },
  [Publisher.DOU]: { logo: { srcPath: 'publishers/dou.jpg' } },
  [Publisher.DataDrivenInvestor]: { logo: { srcPath: 'publishers/data-driven-investor.jpg' } },
  [Publisher.GeeksForGeeks]: { logo: { srcPath: 'publishers/geeks-for-geeks.jpg' } },
  [Publisher.HackerNews]: { logo: { srcPath: 'publishers/hacker-news.png' } },
  [Publisher.HackerNoon]: { logo: { srcPath: 'publishers/hacker-noon.jpg' } },
  [Publisher.HowIGotJob]: { logo: { srcPath: 'publishers/how-i-got-job.jpg' } },
  [Publisher.ITNEXT]: { logo: { srcPath: 'publishers/itnext.png' } },
  [Publisher.JavaScriptInPlainEnglish]: { logo: { srcPath: 'publishers/javascript-in-plain-english.jpg' } },
  [Publisher.KDnuggets]: { logo: { srcPath: 'publishers/kdnuggets.jpg' } },
  [Publisher.Newline]: { logo: { srcPath: 'publishers/newline.png' } },
  [Publisher.TechCrunch]: { logo: { srcPath: 'publishers/tech-crunch.png' } },
  [Publisher.TowardsDataScience]: { logo: { srcPath: 'publishers/towards-data-science.jpg' } },
};
