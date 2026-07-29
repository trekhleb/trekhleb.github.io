import React from 'react';
import { Publisher, PublisherData } from '../types/Publication';
import A from '../components/shared/A';

export const publishers: Record<Publisher, PublisherData> = {
  [Publisher.AITimeJournal]: {
    logo: { srcPath: 'publishers/ai-time-journal.jpg' },
    description: (
      <>
        <p>
          <b>AI Time Journal</b><br />
          <A href="https://www.aitimejournal.com/">aitimejournal.com</A>
        </p>
        <p>
          The journal that explores how AI and Exponential Technologies
          can help thrive in this constantly changing world.
        </p>
        <p>
          ~9K followers <A href="https://www.linkedin.com/company/ai-time-journal/">on LinkedIn</A>.
        </p>
      </>
    ),
  },
  [Publisher.CodeProject]: {
    logo: { srcPath: 'publishers/code-project.jpg' },
    description: (
      <>
        <p>
          <b>CodeProject</b><br />
          <A href="https://www.codeproject.com/">codeproject.com</A>
        </p>
        <p>
          A community for computer programmers with articles
          on different topics and programming languages
          such as web development, software development,
          C++, Java, and other topics.
        </p>
        <p>
          ~3K followers <A href="https://www.linkedin.com/company/the-code-project/">on LinkedIn</A>.
        </p>
        <p>
          ~16K followers <A href="https://x.com/codeproject">on X</A>.
        </p>
      </>
    ),
  },
  [Publisher.DOU]: {
    logo: { srcPath: 'publishers/dou.jpg' },
    description: (
      <>
        <p>
          <b>DOU</b><br />
          <A href="https://dou.ua/">dou.ua</A>
        </p>
        <p>
          DOU (Developers Of Ukraine) is the largest IT community in Ukraine.
        </p>
        <p>
          The publication requires an editorial review and approval process (<A href="https://dou.ua/add-post/">rules</A>).
        </p>
        <p>
          ~700K registered users, ~2.5M articles views per month (<A href="https://dou.ua/forum-articles-howto/">source</A>).
        </p>
        <p>
          ~180K followers <A href="https://www.linkedin.com/company/developers.org.ua/">on LinkedIn</A>.
        </p>
        <p>
          ~70K followers <A href="https://www.facebook.com/doucommunity/">on Facebook</A>.
        </p>
        <p>
          ~27K followers <A href="https://x.com/doucommunity">on X</A>.
        </p>
      </>
    ),
  },
  [Publisher.DataDrivenInvestor]: {
    logo: { srcPath: 'publishers/data-driven-investor.jpg' },
    description: (
      <>
        <p>
          <b>Data Driven Investor</b><br />
          <A href="https://www.datadriveninvestor.com/">datadriveninvestor.com</A>
        </p>
        <p>
          Data Driven Investor (DDI) publishes various
          news and op-ed pieces in the areas of technologies,
          finance, and society.
        </p>
        <p>
          The publication requires an editorial review and approval process (<A href="https://medium.datadriveninvestor.com/working-with-datadriveninvestor-17d8dcada24c">rules</A>).
        </p>
        <p>
          ~2K followers <A href="https://www.linkedin.com/company/data-driven-investor/">on LinkedIn</A>.
        </p>
        <p>
          ~2K followers <A href="https://x.com/ddinvestorhq">on X</A>.
        </p>
      </>
    ),
  },
  [Publisher.GeeksForGeeks]: {
    logo: { srcPath: 'publishers/geeks-for-geeks.jpg' },
    description: (
      <>
        <p>
          <b>GeeksForGeeks</b><br />
          <A href="https://www.geeksforgeeks.org/">geeksforgeeks.org</A>
        </p>
        <p>
          GeeksforGeeks is a leading platform that provides computer science resources
          and coding challenges for programmers and technology enthusiasts, along with
          interview and exam preparations for upcoming aspirants.
        </p>
        <p>
          The publication requires an editorial review and approval process (<A href="https://www.geeksforgeeks.org/contribute/">rules</A>).
        </p>
        <p>
          ~2M followers <A href="https://www.linkedin.com/company/geeksforgeeks/">on LinkedIn</A>.
        </p>
        <p>
          ~73K followers <A href="https://x.com/geeksforgeeks">on X</A>.
        </p>
      </>
    ),
  },
  [Publisher.HackerNews]: {
    logo: { srcPath: 'publishers/hacker-news.png' },
    description: (
      <>
        <p>
          <b>Hacker News (HN)</b><br />
          <A href="https://news.ycombinator.com/">news.ycombinator.com</A>
        </p>
        <p>
          A social news website focusing on computer science and entrepreneurship.
          It is run by the investment fund and startup incubator Y Combinator.
        </p>
        <p>
          The publications get to the Hacker News front page through a combination of upvotes,
          and user engagement.
        </p>
        <p>
          ~10M page views per day (<A href="https://news.ycombinator.com/item?id=33450094">source</A>)
        </p>
        <p>
          ~35M backlinks, ~59K linking web sites (source: <A href="https://ahrefs.com/website-authority-checker/?input=https%3A%2F%2Fnews.ycombinator.com">ahrefs</A>)
        </p>
      </>
    ),
  },
  [Publisher.HackerNoon]: {
    logo: { srcPath: 'publishers/hacker-noon.jpg' },
    description: (
      <>
        <p>
          <b>HackerNoon</b><br />
          <A href="https://hackernoon.com/">hackernoon.com</A>
        </p>
        <p>
          HackerNoon is a free platform with 25k+ contributing writers.
          100M+ humans have visited HackerNoon to learn about technology.
        </p>
        <p>
          The publication requires an editorial review and approval process (<A href="https://help.hackernoon.com/your-complete-guide-to-writing-for-hacker-noon">rules</A>).
        </p>
        <p>
          ~87K followers <A href="https://x.com/hackernoon">on X</A>.
        </p>
        <p>
          ~16K followers <A href="https://www.linkedin.com/company/hackernoon/">on LinkedIn</A>.
        </p>
      </>
    ),
  },
  [Publisher.HowIGotJob]: {
    logo: { srcPath: 'publishers/how-i-got-job.jpg' },
    description: (
      <>
        <p>
          <b>HowIGotJob</b><br />
          <A href="https://howigotjob.com/">howigotjob.com</A>
        </p>
        <p>
          A blog dedicated to curating experiences of
          people on how they got their job, choosing
          a career path, lesson learnt.
        </p>
        <p>
          Articles are written by the web site editors.
        </p>
        <p>
          ~12K followers <A href="https://www.linkedin.com/company/howigotjob/">on LinkedIn</A>.
        </p>
      </>
    ),
  },
  [Publisher.ITNEXT]: {
    logo: { srcPath: 'publishers/itnext.png' },
    description: (
      <>
        <p>
          <b>ITNEXT</b><br />
          <A href="https://itnext.io/">itnext.io</A>
        </p>
        <p>
          A platform for IT developers & software engineers to share knowledge,
          connect, collaborate, learn and experience next-gen technologies.
        </p>
        <p>
          The publication requires an editorial review and approval process (<A href="https://itnext.io/write-for-itnext-4dea1fd3adf">rules</A>).
        </p>
        <p>
          ~1K followers <A href="https://www.linkedin.com/company/itnext-io/">on LinkedIn</A>.
        </p>
        <p>
          ~4K followers <A href="https://x.com/itnext_io">on X</A>.
        </p>
      </>
    ),
  },
  [Publisher.JavaScriptInPlainEnglish]: {
    logo: { srcPath: 'publishers/javascript-in-plain-english.jpg' },
    description: (
      <>
        <p>
          <b>JavaScript in Plain English</b><br />
          <A href="https://javascript.plainenglish.io/">javascript.plainenglish.io</A>
        </p>
        <p>
          The publication requires an editorial review and approval process.
        </p>
        <p>
          ~114K followers <A href="https://javascript.plainenglish.io/about">on Medium</A>.
        </p>
        <p>
          ~5K followers <A href="https://x.com/js_plainenglish">on X</A>.
        </p>
      </>
    ),
  },
  [Publisher.KDnuggets]: {
    logo: { srcPath: 'publishers/kdnuggets.jpg' },
    description: (
      <>
        <p>
          <b>KDnuggets</b><br />
          <A href="https://www.kdnuggets.com/">kdnuggets.com</A>
        </p>
        <p>
          KDnuggets is a leading site on Data Science, Machine Learning, AI and Analytics.
        </p>
        <p>
          The publication requires an editorial review and approval process (<A href="https://www.kdnuggets.com/2019/11/write-for-kdnuggets.html">rules</A>).
        </p>
        <p>
          ~218K followers <A href="https://x.com/kdnuggets">on X</A>.
        </p>
        <p>
          ~52K followers <A href="https://www.linkedin.com/company/kdnuggets/">on LinkedIn</A>.
        </p>
        <p>
          ~39K followers <A href="https://www.facebook.com/kdnuggets/">on Facebook</A>.
        </p>
      </>
    ),
  },
  [Publisher.MozillaMDNWebDocs]: {
    logo: { srcPath: 'publishers/mozilla-mdn-web-docs.png' },
    description: (
      <>
        <p>
          <b>Mozilla MDN Web Docs</b><br />
          <A href="https://developer.mozilla.org/en-US/">developer.mozilla.org</A>
        </p>
        <p>
          MDN Web Docs, previously Mozilla Developer Network and
          formerly Mozilla Developer Center, is a documentation
          repository and learning resource for web developers.
        </p>
        <p>It has been the go‑to documentation hub for web technologies since 2005.</p>
      </>
    ),
  },
  [Publisher.Newline]: {
    logo: { srcPath: 'publishers/newline.png' },
    description: (
      <>
        <p>
          <b>Newline</b><br />
          <A href="https://www.newline.co/">newline.co</A>
        </p>
        <p>
          Newline (formerly Fullstack.io) is a book publisher.
        </p>
        <p>
          ~5K followers <A href="https://x.com/newlinedotco">on X</A>.
        </p>
        <p>
          ~8K followers <A href="https://www.youtube.com/channel/UCOFUtpf-AKbCXN1nrBL2qcw">on YouTube</A>
        </p>
      </>
    ),
  },
  [Publisher.TechCrunch]: {
    logo: { srcPath: 'publishers/tech-crunch.png' },
    description: (
      <>
        <p>
          <b>TechCrunch</b><br />
          <A href="https://techcrunch.com/">techcrunch.com</A>
        </p>
        <p>
          An American global online newspaper focusing on topics
          regarding high-tech and startup companies.
        </p>
        <p>
          The publication requires an editorial review and approval process (<A href="https://techcrunch.com/2023/08/17/how-to-submit-a-guest-column-to-techcrunch/">rules</A>).
        </p>
        <p>
          ~10M followers <A href="https://x.com/TechCrunch">on X</A>.
        </p>
        <p>
          ~3M followers <A href="https://www.linkedin.com/company/techcrunch/">on LinkedIn</A>.
        </p>
        <p>
          ~3M followers <A href="https://www.facebook.com/techcrunch/">on Facebook</A>.
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
  [Publisher.Wikipedia]: {
    logo: { srcPath: 'publishers/wikipedia.jpg' },
    description: (
      <>
        <p>
          <b>Wikipedia</b><br />
          <A href="https://www.wikipedia.org/">wikipedia.org</A>
        </p>
        <p>
          Wikipedia is a free online encyclopedia written and
          maintained by a community of volunteers.
        </p>
        <p>
          Wikipedia is the largest and most-read reference work in history
        </p>
      </>
    ),
  },
  [Publisher.JavaScriptWeekly]: {
    logo: { srcPath: 'publishers/javascript-weekly.jpg' },
    description: (
      <>
        <p>
          <b>JavaScript Weekly</b><br />
          <A href="https://javascriptweekly.com/">javascriptweekly.com</A>
        </p>
        <p>
          JavaScript Weekly is a curated weekly newsletter that aggregates
          the latest articles, tutorials, releases, and noteworthy projects
          in the JavaScript ecosystem.
        </p>
        <p>
          It boasts a subscriber base of 175,000+ and over 700+ issues published to date.
        </p>
      </>
    ),
  },
  [Publisher.Changelog]: {
    logo: { srcPath: 'publishers/changelog.jpg' },
    description: (
      <>
        <p>
          <b>Changelog</b><br />
          <A href="https://changelog.com/">changelog.com</A>
        </p>
        <p>
          Podcast for developers. Software best weekly news brief,
          deep technical interviews, and weekend talk show.
        </p>
        <p>
          ~24K+ subscribers.
        </p>
        <p>
          ~32K followers <A href="https://x.com/changelog">on X</A>.
        </p>
      </>
    ),
  },
  [Publisher.TLDRNewsletter]: {
    logo: { srcPath: 'publishers/tldr-newsletter.jpg' },
    description: (
      <>
        <p>
          <b>TLDR Newsletter</b><br />
          <A href="https://tldr.tech/">tldr.tech</A>
        </p>
        <p>
          Startups, Tech & Programming Newsletter.
        </p>
        <p>
          ~1.2M+ subscribers.
        </p>
        <p>
          ~122K followers <A href="https://x.com/tldrnewsletter">on X</A>.
        </p>
      </>
    ),
  },
  [Publisher.ACM]: {
    logo: { srcPath: 'publishers/acm.jpg' },
    description: (
      <>
        <p>
          <b>ACM</b><br />
          <A href="https://dl.acm.org/">dl.acm.org</A>
        </p>
        <p>
          The Association for Computing Machinery is the world&apos;s largest
          scientific and educational computing society.
        </p>
        <p>
          The ACM Digital Library hosts peer-reviewed publications
          from ACM conferences and journals.
        </p>
      </>
    ),
  },
  [Publisher.ArXiv]: {
    logo: { srcPath: 'publishers/arxiv.jpg' },
    description: (
      <>
        <p>
          <b>arXiv</b><br />
          <A href="https://arxiv.org/">arxiv.org</A>
        </p>
        <p>
          arXiv is an open-access repository of scholarly articles
          operated by Cornell University, hosting 2M+ papers in computer
          science, physics, mathematics, and other fields.
        </p>
      </>
    ),
  },
  [Publisher.BetterProgramming]: {
    logo: { srcPath: 'publishers/better-programming.png' },
    description: (
      <>
        <p>
          <b>Better Programming</b><br />
          <A href="https://betterprogramming.pub/">betterprogramming.pub</A>
        </p>
        <p>
          Better Programming is one of the largest Medium publications
          about programming, with articles curated by an editorial team.
        </p>
      </>
    ),
  },
  [Publisher.BramUs]: {
    logo: { srcPath: 'publishers/generic-user.png' },
    description: (
      <>
        <p>
          <b>Bram.us</b><br />
          <A href="https://www.bram.us/">bram.us</A>
        </p>
        <p>
          The personal blog of Bram Van Damme (Bramus), a web developer
          from Belgium working as a Chrome Developer Relations Engineer
          at Google, focusing on CSS and the web platform.
        </p>
      </>
    ),
  },
  [Publisher.EasysPublishing]: {
    logo: { srcPath: 'publishers/generic-book.png' },
    description: (
      <>
        <p>
          <b>Easys Publishing</b><br />
          <A href="http://www.easyspub.co.kr/">easyspub.co.kr</A>
        </p>
        <p>
          Easys Publishing (이지스퍼블리싱) is a South Korean publisher
          of programming and IT books, known for its &quot;Do it!&quot; book series.
        </p>
      </>
    ),
  },
  [Publisher.HanbitMedia]: {
    logo: { srcPath: 'publishers/hanbit-media.png' },
    description: (
      <>
        <p>
          <b>Hanbit Media</b><br />
          <A href="https://www.hanbit.co.kr/">hanbit.co.kr</A>
        </p>
        <p>
          Hanbit Media (한빛미디어) is one of the largest South Korean
          publishers of IT, programming, and engineering books.
        </p>
      </>
    ),
  },
  [Publisher.IEEE]: {
    logo: { srcPath: 'publishers/ieee.jpg' },
    description: (
      <>
        <p>
          <b>IEEE</b><br />
          <A href="https://ieeexplore.ieee.org/">ieeexplore.ieee.org</A>
        </p>
        <p>
          The Institute of Electrical and Electronics Engineers is the
          world&apos;s largest technical professional organization.
        </p>
        <p>
          IEEE Xplore hosts peer-reviewed publications from IEEE
          conferences and journals.
        </p>
      </>
    ),
  },
  [Publisher.IMasters]: {
    logo: { srcPath: 'publishers/imasters.png' },
    description: (
      <>
        <p>
          <b>iMasters</b><br />
          <A href="https://imasters.com.br/">imasters.com.br</A>
        </p>
        <p>
          iMasters is one of the largest Brazilian content portals and
          conference organizers for software developers.
        </p>
      </>
    ),
  },
  [Publisher.Juejin]: {
    logo: { srcPath: 'publishers/juejin.jpg' },
    description: (
      <>
        <p>
          <b>Juejin</b><br />
          <A href="https://juejin.cn/">juejin.cn</A>
        </p>
        <p>
          Juejin (掘金) is one of the largest Chinese developer communities,
          where developers share technical articles and open-source
          project reviews.
        </p>
      </>
    ),
  },
  [Publisher.Medium]: {
    logo: { srcPath: 'publishers/medium.jpg' },
    description: (
      <>
        <p>
          <b>Medium</b><br />
          <A href="https://medium.com/">medium.com</A>
        </p>
        <p>
          Medium is an online publishing platform with 100M+ monthly readers.
        </p>
      </>
    ),
  },
  [Publisher.NodeWeekly]: {
    logo: { srcPath: 'publishers/generic-mail.png' },
    description: (
      <>
        <p>
          <b>Node Weekly</b><br />
          <A href="https://nodeweekly.com/">nodeweekly.com</A>
        </p>
        <p>
          Node Weekly is a curated weekly newsletter about Node.js news
          and articles, published by Cooperpress — the publisher behind
          JavaScript Weekly.
        </p>
      </>
    ),
  },
  [Publisher.Packt]: {
    logo: { srcPath: 'publishers/packt.jpg' },
    description: (
      <>
        <p>
          <b>Packt</b><br />
          <A href="https://www.packtpub.com/">packtpub.com</A>
        </p>
        <p>
          Packt is a publisher of technology books and courses with
          thousands of titles for software developers and engineers.
        </p>
      </>
    ),
  },
  [Publisher.PyCodersWeekly]: {
    logo: { srcPath: 'publishers/pycoders.jpeg' },
    description: (
      <>
        <p>
          <b>PyCoder&apos;s Weekly</b><br />
          <A href="https://pycoders.com/">pycoders.com</A>
        </p>
        <p>
          PyCoder&apos;s Weekly is a curated weekly newsletter for Python
          developers, run by the Real Python team.
        </p>
        <p>
          ~100K+ subscribers.
        </p>
      </>
    ),
  },
  [Publisher.SegmentFault]: {
    logo: { srcPath: 'publishers/generic-book.png' },
    description: (
      <>
        <p>
          <b>SegmentFault</b><br />
          <A href="https://segmentfault.com/">segmentfault.com</A>
        </p>
        <p>
          SegmentFault (思否) is one of the largest Chinese developer
          communities and Q&amp;A platforms.
        </p>
      </>
    ),
  },
  [Publisher.SidebarIO]: {
    logo: { srcPath: 'publishers/sidebar.png' },
    description: (
      <>
        <p>
          <b>Sidebar</b><br />
          <A href="https://sidebar.io/">sidebar.io</A>
        </p>
        <p>
          Sidebar is a curated newsletter delivering the five best design
          and front-end links of the day.
        </p>
      </>
    ),
  },
  [Publisher.Springer]: {
    logo: { srcPath: 'publishers/generic-book.png' },
    description: (
      <>
        <p>
          <b>Springer</b><br />
          <A href="https://link.springer.com/">link.springer.com</A>
        </p>
        <p>
          Springer is one of the world&apos;s leading publishers of scientific
          books and peer-reviewed journals, including the Lecture Notes
          in Computer Science (LNCS) series.
        </p>
      </>
    ),
  },
  [Publisher.TUDelft]: {
    logo: { srcPath: 'publishers/tu-delft.jpg' },
    description: (
      <>
        <p>
          <b>TU Delft</b><br />
          <A href="https://repository.tudelft.nl/">repository.tudelft.nl</A>
        </p>
        <p>
          Delft University of Technology is the oldest and largest Dutch
          public technical university, consistently ranked among the best
          engineering universities in the world.
        </p>
      </>
    ),
  },
  [Publisher.UniversidadeDeBrasilia]: {
    logo: { srcPath: 'publishers/unb.png' },
    description: (
      <>
        <p>
          <b>Universidade de Brasília</b><br />
          <A href="https://www.unb.br/">unb.br</A>
        </p>
        <p>
          The University of Brasília (UnB) is a federal public university
          in Brazil&apos;s capital and one of the country&apos;s leading research
          institutions.
        </p>
      </>
    ),
  },
  [Publisher.Wiley]: {
    logo: { srcPath: 'publishers/wiley.png' },
    description: (
      <>
        <p>
          <b>Wiley</b><br />
          <A href="https://onlinelibrary.wiley.com/">onlinelibrary.wiley.com</A>
        </p>
        <p>
          John Wiley &amp; Sons is a multinational academic publisher founded
          in 1807, publishing peer-reviewed journals, books, and reference
          works in science and engineering.
        </p>
      </>
    ),
  },
  [Publisher.Zenn]: {
    logo: { srcPath: 'publishers/zenn.jpg' },
    description: (
      <>
        <p>
          <b>Zenn</b><br />
          <A href="https://zenn.dev/">zenn.dev</A>
        </p>
        <p>
          Zenn is a Japanese knowledge-sharing platform for software engineers.
        </p>
      </>
    ),
  },
};
