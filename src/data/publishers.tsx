import React from 'react';
import { Publisher, PublisherData } from '../types/Publication';

export const PUBLISHERS: Record<Publisher, PublisherData> = {
  [Publisher.AITimeJournal]: {
    logo: { srcPath: 'publishers/ai-time-journal.jpg' },
    description: (
      <div>
        <p>
          <b>AI Time Journal</b>
        </p>
        <br />
        <p>
          ~9K followers on LinkedIn.
        </p>
      </div>
    ),
  },
  [Publisher.CodeProject]: {
    logo: { srcPath: 'publishers/code-project.jpg' },
    description: (
      <div>
        <p>
          <b>CodeProject</b>
        </p>
        <br />
        <p>
          A community for computer programmers with articles
          on different topics and programming languages
          such as web development, software development,
          C++, Java, and other topics.
        </p>
        <br />
        <p>
          ~3K followers on LinkedIn.
        </p>
        <br />
        <p>
          ~16K followers on X.
        </p>
      </div>
    ),
  },
  [Publisher.DOU]: {
    logo: { srcPath: 'publishers/dou.jpg' },
    description: (
      <div>
        <p>
          <b>DOU (Developers Of Ukraine)</b>
        </p>
        <br />
        <p>
          DOU is the largest IT community in Ukraine.
          DOU has 700K registered users, more than 14K companies,
          and articles and topics receive over 2.5M views per month
          (and the entire site receives 9M).
        </p>
        <br />
        <p>
          ~180K followers on LinkedIn.
        </p>
        <br />
        <p>
          ~70K followers on Facebook.
        </p>
        <br />
        <p>
          ~27K followers on X.
        </p>
      </div>
    ),
  },
  [Publisher.DataDrivenInvestor]: {
    logo: { srcPath: 'publishers/data-driven-investor.jpg' },
    description: (
      <div>
        <p>
          <b>Data Driven Investor</b>
        </p>
        <br />
        <p>
          Data Driven Investor (DDI) publishes various
          news and op-ed pieces in the areas of technologies,
          finance, and society. They are dedicated to relentlessly
          covering tech topics, their anomalies and controversies,
          and reviewing all things fascinating and worth knowing.
        </p>
        <br />
        <p>
          ~2K followers on LinkedIn.
        </p>
        <br />
        <p>
          ~2K followers on X.
        </p>
      </div>
    ),
  },
  [Publisher.GeeksForGeeks]: {
    logo: { srcPath: 'publishers/geeks-for-geeks.jpg' },
    description: (
      <div>
        <p>
          <b>GeeksForGeeks</b>
        </p>
        <br />
        <p>
          GeeksforGeeks is a leading platform that provides computer science resources
          and coding challenges for programmers and technology enthusiasts, along with
          interview and exam preparations for upcoming aspirants.
        </p>
        <br />
        <p>
          ~2M followers on LinkedIn.
        </p>
        <br />
        <p>
          ~73K followers on X.
        </p>
      </div>
    ),
  },
  [Publisher.HackerNews]: {
    logo: { srcPath: 'publishers/hacker-news.png' },
    description: (
      <div>
        <p>
          <b>Hacker News (HN)</b>
        </p>
        <br />
        <p>
          A social news website focusing on computer science and entrepreneurship.
          It is run by the investment fund and startup incubator Y Combinator.
        </p>
      </div>
    ),
  },
  [Publisher.HackerNoon]: {
    logo: { srcPath: 'publishers/hacker-noon.jpg' },
    description: (
      <div>
        <p>
          <b>HackerNoon</b>
        </p>
        <br />
        <p>
          HackerNoon is a free platform with 25k+ contributing writers.
          100M+ humans have visited HackerNoon to learn about technology.
        </p>
        <br />
        <p>
          ~87K followers on X.
        </p>
        <br />
        <p>
          ~16K followers on LinkedIn.
        </p>
      </div>
    ),
  },
  [Publisher.HowIGotJob]: {
    logo: { srcPath: 'publishers/how-i-got-job.jpg' },
    description: (
      <div>
        <p>
          <b>HowIGotJob</b>
        </p>
        <br />
        <p>
          A blog dedicated to curating experiences of
          people on how they got their job, choosing
          a career path, lesson learnt.
        </p>
        <br />
        <p>
          ~12K followers on LinkedIn.
        </p>
      </div>
    ),
  },
  [Publisher.ITNEXT]: {
    logo: { srcPath: 'publishers/itnext.png' },
    description: (
      <div>
        <p>
          <b>ITNEXT</b>
        </p>
        <br />
        <p>
          A platform for IT developers & software engineers to share knowledge,
          connect, collaborate, learn and experience next-gen technologies.
        </p>
        <br />
        <p>
          ~1.4K followers on LinkedIn.
        </p>
        <br />
        <p>
          ~4K followers on X.
        </p>
      </div>
    ),
  },
  [Publisher.JavaScriptInPlainEnglish]: {
    logo: { srcPath: 'publishers/javascript-in-plain-english.jpg' },
    description: (
      <div>
        <p>
          <b>JavaScript in Plain English</b>
        </p>
        <br />
        <p>
          ~114K followers on Medium.
        </p>
        <br />
        <p>
          ~5K followers on X.
        </p>
      </div>
    ),
  },
  [Publisher.KDnuggets]: {
    logo: { srcPath: 'publishers/kdnuggets.jpg' },
    description: (
      <div>
        <p>
          <b>KDnuggets</b>
        </p>
        <br />
        <p>
          KDnuggets is a leading site on Data Science, Machine Learning, AI and Analytics.
        </p>
        <br />
        <p>
          ~218K followers on X.
        </p>
        <br />
        <p>
          ~52K followers on LinkedIn.
        </p>
        <br />
        <p>
          ~39K followers on Facebook.
        </p>
      </div>
    ),
  },
  [Publisher.Newline]: { logo: { srcPath: 'publishers/newline.png' } },
  [Publisher.TechCrunch]: {
    logo: { srcPath: 'publishers/tech-crunch.png' },
    description: (
      <div>
        <p>
          <b>TechCrunch</b>
        </p>
        <br />
        <p>
          An American global online newspaper focusing on topics
          regarding high-tech and startup companies.
        </p>
        <br />
        <p>
          ~10M followers on X.
        </p>
        <br />
        <p>
          ~3M followers on LinkedIn.
        </p>
        <br />
        <p>
          ~3M followers on Facebook.
        </p>
      </div>
    ),
  },
  [Publisher.TowardsDataScience]: {
    logo: { srcPath: 'publishers/towards-data-science.jpg' },
    description: (
      <div>
        <p>
          <b>Towards Data Science</b>
        </p>
        <br />
        <p>
          The world&apos;s leading publication for data science, AI, data
          analytics, data engineering and ML professionals.
        </p>
        <br />
        <p>
          ~630K followers on LinkedIn.
        </p>
        <br />
        <p>
          ~230K followers on X.
        </p>
      </div>
    ),
  },
};
