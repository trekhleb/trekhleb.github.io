import React from 'react';
import { Publisher, PublisherData } from '../types/Publication';
import A from '../components/shared/A';

export const publishers: Record<Publisher, PublisherData> = {
  [Publisher.AITimeJournal]: {
    logo: { srcPath: 'publishers/ai-time-journal.jpg' },
    description: (
      <>
        <p>
          <b>AI Time Journal</b>
        </p>
        <p>
          ~9K followers on LinkedIn.
        </p>
      </>
    ),
  },
  [Publisher.CodeProject]: {
    logo: { srcPath: 'publishers/code-project.jpg' },
    description: (
      <>
        <p>
          <b>CodeProject</b>
        </p>
        <p>
          A community for computer programmers with articles
          on different topics and programming languages
          such as web development, software development,
          C++, Java, and other topics.
        </p>
        <p>
          ~3K followers on LinkedIn.
        </p>
        <p>
          ~16K followers on X.
        </p>
      </>
    ),
  },
  [Publisher.DOU]: {
    logo: { srcPath: 'publishers/dou.jpg' },
    description: (
      <>
        <p>
          <b>DOU (Developers Of Ukraine)</b>
        </p>
        <p>
          DOU is the largest IT community in Ukraine.
          DOU has 700K registered users, more than 14K companies,
          and articles and topics receive over 2.5M views per month
          (and the entire site receives 9M).
        </p>
        <p>
          ~180K followers on LinkedIn.
        </p>
        <p>
          ~70K followers on Facebook.
        </p>
        <p>
          ~27K followers on X.
        </p>
      </>
    ),
  },
  [Publisher.DataDrivenInvestor]: {
    logo: { srcPath: 'publishers/data-driven-investor.jpg' },
    description: (
      <>
        <p>
          <b>Data Driven Investor</b>
        </p>
        <p>
          Data Driven Investor (DDI) publishes various
          news and op-ed pieces in the areas of technologies,
          finance, and society. They are dedicated to relentlessly
          covering tech topics, their anomalies and controversies,
          and reviewing all things fascinating and worth knowing.
        </p>
        <p>
          ~2K followers on LinkedIn.
        </p>
        <p>
          ~2K followers on X.
        </p>
      </>
    ),
  },
  [Publisher.GeeksForGeeks]: {
    logo: { srcPath: 'publishers/geeks-for-geeks.jpg' },
    description: (
      <>
        <p>
          <b>GeeksForGeeks</b>
        </p>
        <p>
          GeeksforGeeks is a leading platform that provides computer science resources
          and coding challenges for programmers and technology enthusiasts, along with
          interview and exam preparations for upcoming aspirants.
        </p>
        <p>
          ~2M followers on LinkedIn.
        </p>
        <p>
          ~73K followers on X.
        </p>
      </>
    ),
  },
  [Publisher.HackerNews]: {
    logo: { srcPath: 'publishers/hacker-news.png' },
    description: (
      <>
        <p>
          <b>Hacker News (HN)</b>
        </p>
        <p>
          A social news website focusing on computer science and entrepreneurship.
          It is run by the investment fund and startup incubator Y Combinator.
        </p>
      </>
    ),
  },
  [Publisher.HackerNoon]: {
    logo: { srcPath: 'publishers/hacker-noon.jpg' },
    description: (
      <>
        <p>
          <b>HackerNoon</b>
        </p>
        <p>
          HackerNoon is a free platform with 25k+ contributing writers.
          100M+ humans have visited HackerNoon to learn about technology.
        </p>
        <p>
          ~87K followers on X.
        </p>
        <p>
          ~16K followers on LinkedIn.
        </p>
      </>
    ),
  },
  [Publisher.HowIGotJob]: {
    logo: { srcPath: 'publishers/how-i-got-job.jpg' },
    description: (
      <>
        <p>
          <b>HowIGotJob</b>
        </p>
        <p>
          A blog dedicated to curating experiences of
          people on how they got their job, choosing
          a career path, lesson learnt.
        </p>
        <p>
          ~12K followers on LinkedIn.
        </p>
      </>
    ),
  },
  [Publisher.ITNEXT]: {
    logo: { srcPath: 'publishers/itnext.png' },
    description: (
      <>
        <p>
          <b>ITNEXT</b>
        </p>
        <p>
          A platform for IT developers & software engineers to share knowledge,
          connect, collaborate, learn and experience next-gen technologies.
        </p>
        <p>
          ~1.4K followers on LinkedIn.
        </p>
        <p>
          ~4K followers on X.
        </p>
      </>
    ),
  },
  [Publisher.JavaScriptInPlainEnglish]: {
    logo: { srcPath: 'publishers/javascript-in-plain-english.jpg' },
    description: (
      <>
        <p>
          <b>JavaScript in Plain English</b>
        </p>
        <p>
          ~114K followers on Medium.
        </p>
        <p>
          ~5K followers on X.
        </p>
      </>
    ),
  },
  [Publisher.KDnuggets]: {
    logo: { srcPath: 'publishers/kdnuggets.jpg' },
    description: (
      <>
        <p>
          <b>KDnuggets</b>
        </p>
        <p>
          KDnuggets is a leading site on Data Science, Machine Learning, AI and Analytics.
        </p>
        <p>
          ~218K followers on X.
        </p>
        <p>
          ~52K followers on LinkedIn.
        </p>
        <p>
          ~39K followers on Facebook.
        </p>
      </>
    ),
  },
  [Publisher.Newline]: { logo: { srcPath: 'publishers/newline.png' } },
  [Publisher.TechCrunch]: {
    logo: { srcPath: 'publishers/tech-crunch.png' },
    description: (
      <>
        <p>
          <b>TechCrunch</b>
        </p>
        <p>
          An American global online newspaper focusing on topics
          regarding high-tech and startup companies.
        </p>
        <p>
          ~10M followers on X.
        </p>
        <p>
          ~3M followers on LinkedIn.
        </p>
        <p>
          ~3M followers on Facebook.
        </p>
      </>
    ),
  },
  [Publisher.TowardsDataScience]: {
    logo: { srcPath: 'publishers/towards-data-science.jpg' },
    description: (
      <>
        <p>
          <b>Towards Data Science</b><br />
          <A href="https://towardsdatascience.com/">towardsdatascience.com</A>
        </p>
        <p>
          The world&apos;s leading publication for data science, AI, data
          analytics, data engineering and ML professionals.
        </p>
        <p>
          The publication requires an editorial review and approval process (<A href="https://towardsdatascience.com/questions-96667b06af5">rules</A>).
        </p>
        <p>
          ~700K followers <A href="https://towardsdatascience.com/questions-96667b06af5">on Medium</A>.
        </p>
        <p>
          ~639K followers <A href="https://www.linkedin.com/company/towards-data-science/">on LinkedIn</A>.
        </p>
        <p>
          ~234K followers <A href="https://x.com/TDataScience">on X</A>.
        </p>
      </>
    ),
  },
};
