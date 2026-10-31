import { Publication, PublicationTag, Publisher } from '../types/Publication';

export const publications: Publication[] = [
  {
    title: 'Run Claude Code\'s --dangerously-skip-permissions Flag Safely with Docker',
    summary: ['How to run Claude Code with the --dangerously-skip-permissions flag safely inside a Docker sandbox (claude-pod), keeping your home directory, SSH keys, and other projects invisible to the container.'],
    date: '2026-06-13',
    publisher: Publisher.ITNEXT,
    tag: PublicationTag.Authored,
    link: {
      url: 'https://itnext.io/run-claude-codes-dangerously-skip-permissions-flag-safely-with-docker-a2182dea3d6d',
    },
  },
  {
    title: 'OkSo app in Changelog podcast',
    summary: ['My okso.app has been mentioned in the Changelog podcast #6'],
    date: '2022-08-01',
    publisher: Publisher.Changelog,
    tag: PublicationTag.Featured,
    link: {
      url: 'https://changelog.com/news/6',
    },
  },
  {
    title: 'JavaScript Algorithms and Data Structures',
    summary: ['My GitHub project trekhleb/javascript-algorithms has been included to JavaScript Weekly newsletter issue #417 (Top code and tools of 2018)'],
    date: '2018-12-21',
    publisher: Publisher.JavaScriptWeekly,
    tag: PublicationTag.Featured,
    link: {
      url: 'https://javascriptweekly.com/issues/417',
    },
  },
  {
    title: 'The State of the Octoverse: new open source projects in 2018',
    summary: ['GitHub\'s own report lists trekhleb/javascript-algorithms second among the ten new open-source projects of 2018 by stars in their first 28 days, and names it as an example of the projects with coding examples starred by those new to code.'],
    date: '2018-12-13',
    publisher: Publisher.GitHubBlog,
    tag: PublicationTag.Coverage,
    link: {
      url: 'https://github.blog/news-insights/octoverse/new-open-source-projects/',
    },
  },
  {
    title: 'GitHub Review Shows JavaScript, Learning Are Top Trends in 2018',
    summary: ['Dice Insights on GitHub\'s 2018 review: "A JavaScript algorithms repo was second place" — the linked repository is trekhleb/javascript-algorithms.'],
    date: '2018-12-18',
    publisher: Publisher.DiceInsights,
    tag: PublicationTag.Coverage,
    link: {
      url: 'https://web.archive.org/web/20190722121648/https://insights.dice.com/2018/12/18/github-javascript-learning-trends-2018/',
      caption: 'Internet Archive copy (the original page is gone)',
    },
  },
  {
    title: 'JavaScript Dominated Open Source in 2018',
    summary: ['ADTmag (Application Development Trends) reproduces GitHub\'s "Top New Projects Based on Stars" chart and names trekhleb/javascript-algorithms among the top new projects of 2018.'],
    date: '2018-12-20',
    publisher: Publisher.ADTmag,
    tag: PublicationTag.Coverage,
    link: {
      url: 'https://adtmag.com/articles/2018/12/20/github-javascript.aspx',
    },
  },
  {
    title: 'Investigando o Cognitive-Driven Development: Percepções sobre Legibilidade e Manutenção de Código',
    summary: ['A peer-reviewed SEMISH 2025 paper (Universidade Federal do Pará, SBC) whose code samples were extracted from my trekhleb/javascript-algorithms repository, chosen among repositories "with the highest number of stars, an indicator of quality and acceptance by the community" (section 4.2, footnote 1).'],
    date: '2025-07-20',
    publisher: Publisher.SBC,
    tag: PublicationTag.ResearchCitation,
    link: {
      url: 'https://doi.org/10.5753/semish.2025.9259',
    },
  },
  {
    title: 'Estudo comparativo de normas na área de danos estruturais causados por vibrações impulsivas',
    summary: ['An MSc dissertation in civil engineering (FEUP, Universidade do Porto, 2020) that adapts a figure from my article "Playing with Discrete Fourier Transform Algorithm in JavaScript" (Figure 5.6) and cites the article in its bibliography.'],
    date: '2020-07-09',
    publisher: Publisher.UniversidadeDoPorto,
    tag: PublicationTag.ResearchCitation,
    link: {
      url: 'https://hdl.handle.net/10216/128283',
    },
  },
  {
    title: 'Epilepsy-IEDs: An automated machine learning model for detecting interictal epileptiform discharges from scalp electroencephalograms',
    summary: ['An iScience (Cell Press) paper that lists my trekhleb/machine-learning-octave repository in its Key Resources Table as the logistic-regression resource.'],
    date: '2026-06-22',
    publisher: Publisher.CellPress,
    tag: PublicationTag.ResearchCitation,
    link: {
      url: 'https://doi.org/10.1016/j.isci.2026.116408',
    },
  },
  {
    title: 'Maze Solver: A React-Based Pathfinding Visualization using BFS and DFS',
    summary: ['A student journal article (Mahatma Gandhi Institute of Technology, Hyderabad; Journal of Advancement in Data Computational Statistics and Data Analysis, 2025) that cites my trekhleb/javascript-algorithms repository.'],
    date: '2025-07-03',
    publisher: Publisher.Zenodo,
    tag: PublicationTag.ResearchCitation,
    link: {
      url: 'https://doi.org/10.5281/zenodo.15797242',
    },
  },
  {
    title: 'The significance of bug report elements',
    summary: ['Soltani, Hermans and Bäck (Leiden University) selected my GitHub project trekhleb/javascript-algorithms as one of the 50 most popular JavaScript projects on GitHub, by stars and forks, for the dataset of this peer-reviewed study: Table 4 lists the repository and Table 5 reports the mining of its issue tracker.'],
    date: '2020-09-14',
    publisher: Publisher.Springer,
    tag: PublicationTag.ResearchCitation,
    link: {
      url: 'https://doi.org/10.1007/s10664-020-09882-z',
    },
  },
  {
    title: 'js-image-carver: Content-Aware Image Resizer and Object Remover',
    summary: ['My GitHub project trekhleb/js-image-carver has been included to JavaScript Weekly newsletter issue #535'],
    date: '2021-04-23',
    publisher: Publisher.JavaScriptWeekly,
    tag: PublicationTag.Featured,
    link: {
      url: 'https://javascriptweekly.com/issues/535',
    },
  },
  {
    title: 'JS Image Carver: Content-Aware Image Resizer and Object Remover ',
    summary: ['My GitHub project trekhleb/js-image-carver has been included to JavaScript Weekly newsletter issue #618'],
    date: '2022-12-09',
    publisher: Publisher.JavaScriptWeekly,
    tag: PublicationTag.Featured,
    link: {
      url: 'https://javascriptweekly.com/issues/618',
    },
  },
  {
    title: 'A fun look at content-aware image resizing in JavaScript with seam carving',
    summary: ['My article "Content-aware image resizing in JavaScript" (trekhleb.dev) has been linked in the Quick Bits section of JavaScript Weekly newsletter issue #549'],
    date: '2021-07-30',
    publisher: Publisher.JavaScriptWeekly,
    tag: PublicationTag.Featured,
    link: {
      url: 'https://javascriptweekly.com/issues/549',
    },
  },
  {
    title: 'Over 100 Algorithms and Data Structures Demonstrated in JS',
    summary: ['My GitHub project trekhleb/javascript-algorithms has been included to JavaScript Weekly newsletter issue #633'],
    date: '2023-04-06',
    publisher: Publisher.JavaScriptWeekly,
    tag: PublicationTag.Featured,
    link: {
      url: 'https://javascriptweekly.com/issues/633',
    },
  },
  {
    title: 'More than 100 Algorithms and Data Structures Demonstrated in JS',
    summary: ['My GitHub project trekhleb/javascript-algorithms has been included to JavaScript Weekly newsletter issue #652'],
    date: '2023-08-17',
    publisher: Publisher.JavaScriptWeekly,
    tag: PublicationTag.Featured,
    link: {
      url: 'https://javascriptweekly.com/issues/652',
    },
  },
  {
    title: '100+ Algorithms and Data Structures Demonstrated in JS',
    summary: ['My GitHub project trekhleb/javascript-algorithms has been included to JavaScript Weekly newsletter issue #709'],
    date: '2024-10-17',
    publisher: Publisher.JavaScriptWeekly,
    tag: PublicationTag.Featured,
    link: {
      url: 'https://javascriptweekly.com/issues/709',
    },
  },
  {
    title: 'JavaScript Algorithms and Data Structures',
    summary: ['My GitHub project trekhleb/javascript-algorithms has been included to JavaScript Weekly newsletter issue #387 (the newsletter\'s first selection of the project)'],
    date: '2018-05-25',
    publisher: Publisher.JavaScriptWeekly,
    tag: PublicationTag.Featured,
    link: {
      url: 'https://javascriptweekly.com/issues/387',
    },
  },
  {
    title: 'JavaScript Algorithms and Data Structures',
    summary: ['My GitHub project trekhleb/javascript-algorithms has been included to JavaScript Weekly newsletter issue #396, with the editor\'s note "We linked this a couple of months ago but it has been substantially improved since then"'],
    date: '2018-07-27',
    publisher: Publisher.JavaScriptWeekly,
    tag: PublicationTag.Featured,
    link: {
      url: 'https://javascriptweekly.com/issues/396',
    },
  },
  {
    title: 'Over 100 JavaScript Algorithms and Data Structures Demonstrated',
    summary: ['My GitHub project trekhleb/javascript-algorithms has been included to JavaScript Weekly newsletter issue #466 (Code & Tools section)', 'The same issue also featured my GitHub project trekhleb/nano-neuron ("NanoNeuron: 7 Simple Functions to Demo Simple Machine Learning")'],
    date: '2019-12-06',
    publisher: Publisher.JavaScriptWeekly,
    tag: PublicationTag.Featured,
    link: {
      url: 'https://javascriptweekly.com/issues/466',
    },
  },
  {
    title: 'Over 100 JavaScript Algorithms and Data Structures Demonstrated',
    summary: ['My GitHub project trekhleb/javascript-algorithms has been included to JavaScript Weekly newsletter issue #517'],
    date: '2020-12-04',
    publisher: Publisher.JavaScriptWeekly,
    tag: PublicationTag.Featured,
    link: {
      url: 'https://javascriptweekly.com/issues/517',
    },
  },
  {
    title: 'Over 100 Algorithms and Data Structures Demonstrated in JS',
    summary: ['My GitHub project trekhleb/javascript-algorithms has been included to JavaScript Weekly newsletter issue #561'],
    date: '2021-10-22',
    publisher: Publisher.JavaScriptWeekly,
    tag: PublicationTag.Featured,
    link: {
      url: 'https://javascriptweekly.com/issues/561',
    },
  },
  {
    title: 'Over 100 Algorithms and Data Structures Demonstrated in JS',
    summary: ['My GitHub project trekhleb/javascript-algorithms has been included to JavaScript Weekly newsletter issue #570, "The Best of JavaScript Weekly in 2021" (Top Code & Tools of 2021 section)'],
    date: '2021-12-24',
    publisher: Publisher.JavaScriptWeekly,
    tag: PublicationTag.Featured,
    link: {
      url: 'https://javascriptweekly.com/issues/570',
    },
  },
  {
    title: 'Over 150 Algorithms and Data Structures Demonstrated in JS',
    summary: ['My GitHub project trekhleb/javascript-algorithms has been included to JavaScript Weekly newsletter issue #763 ("Available in eighteen other written languages too")'],
    date: '2025-11-28',
    publisher: Publisher.JavaScriptWeekly,
    tag: PublicationTag.Featured,
    link: {
      url: 'https://javascriptweekly.com/issues/763',
    },
  },
  {
    title: 'Seam carving',
    summary: ['My GitHub project trekhleb/js-image-carver is mentioned as an implementation example in the Wikipedia article about the Seam Carving algorithm.'],
    date: '2025-08-01',
    publisher: Publisher.Wikipedia,
    tag: PublicationTag.ReferenceDocs,
    link: {
      url: 'https://en.m.wikipedia.org/wiki/Seam_carving#Implementations',
    },
  },
  {
    title: 'How X (Twitter) Designed Its Home Timeline API: Lessons to Learn',
    summary: ['A closer look at X’s API: fetching data, linking entities, and solving under-fetching.'],
    date: '2024-12-15',
    publisher: Publisher.TowardsDataScience,
    tag: PublicationTag.Authored,
    link: {
      // This link stopped working after TDS restructured the URLs. It was moved to the TDS Archive.
      // url: 'https://towardsdatascience.com/api-design-of-x-twitter-home-timeline-da426f19edfe',
      // url: 'https://www.linkedin.com/posts/towards-data-science_api-design-of-x-twitter-home-timeline-activity-7274584447545421824-6b5d/',
      url: 'https://medium.com/data-science/api-design-of-x-twitter-home-timeline-da426f19edfe',
    },
  },
  {
    title: 'System Design Sketches',
    summary: ['System design sketches for popular system design interview questions.'],
    date: '2024-07-15',
    publisher: Publisher.ITNEXT,
    tag: PublicationTag.Authored,
    link: {
      url: 'https://itnext.io/system-design-sketches-d8cb8e1d539f',
    },
  },
  {
    title: 'JavaScript-algorithms: Algorithms and data structures implemented in JavaScript (github.com/trekhleb)',
    summary: ['Published on Hacker News frontpage. The link leads to the Hacker News archive for that day where the mention can be found.'],
    date: '2023-04-07',
    publisher: Publisher.HackerNews,
    tag: PublicationTag.Featured,
    link: {
      url: 'https://news.ycombinator.com/front?day=2023-04-07',
    },
  },
  {
    title: 'TLDraw offers a collaborative whiteboard without any login',
    summary: ['My okso.app drawing app is mentioned in the TechCrunch article related to TLDraw app'],
    date: '2022-12-16',
    publisher: Publisher.TechCrunch,
    tag: PublicationTag.Coverage,
    link: {
      url: 'https://techcrunch.com/2022/12/16/tldraw-offers-a-collaborative-whiteboard-without-any-login/',
    },
  },
  {
    title: 'Data Structures Sketches (okso.app)',
    summary: ['Published on Hacker News frontpage. The link leads to the Hacker News archive for that day where the mention can be found.'],
    date: '2022-10-09',
    publisher: Publisher.HackerNews,
    tag: PublicationTag.Featured,
    link: {
      url: 'https://news.ycombinator.com/front?day=2022-10-09',
    },
  },
  {
    title: 'Ukrainian developers — about the benefits of participating in open source (in UA)',
    summary: ['The article discusses the growth and challenges of open-source development in Ukraine, highlighting notable Ukrainian contributors and projects, the community\'s role in fostering collaboration, and how open-source tools are being leveraged to support Ukraine'],
    date: '2022-02-03',
    publisher: Publisher.DOU,
    tag: PublicationTag.Coverage,
    link: {
      url: 'https://dou.ua/lenta/articles/open-source-in-ukraine/',
    },
  },
  {
    title: 'Content-Aware Image Resizing in JavaScript',
    summary: ['JavaScript implementation of so-called Seam Carving algorithm for content-aware image resizing'],
    date: '2022-01-19',
    publisher: Publisher.CodeProject,
    tag: PublicationTag.Authored,
    link: {
      url: 'https://www.codeproject.com/Articles/5322937/Content-Aware-Image-Resizing-in-JavaScript',
    },
  },
  {
    title: 'JavaScript data types and data structures',
    summary: [
      'My GitHub project trekhleb/javascript-algorithms is mentioned as an implementation example in the MDN Web Docs article.',
      'The link was proposed by an independent contributor and merged by MDN\'s reviewers on December 30, 2021 (mdn/content pull request #11589); it is still on the page (last modified July 8, 2025).',
    ],
    date: '2022-01-19',
    publisher: Publisher.MozillaMDNWebDocs,
    tag: PublicationTag.ReferenceDocs,
    link: {
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures',
    },
  },
  {
    title: 'JavaScript Algorithms and Data Structures (2018) (github.com/trekhleb)',
    summary: ['Published on Hacker News frontpage. The link leads to the Hacker News archive for that day where the mention can be found.'],
    date: '2021-10-22',
    publisher: Publisher.HackerNews,
    tag: PublicationTag.Featured,
    link: {
      url: 'https://news.ycombinator.com/front?day=2021-10-22',
    },
  },
  {
    title: 'Free resources to promote your next startup (github.com/trekhleb)',
    summary: ['Published on Hacker News 2nd page. The link leads to the Hacker News archive for that day where the mention can be found.'],
    date: '2021-10-09',
    publisher: Publisher.HackerNews,
    tag: PublicationTag.Featured,
    link: {
      url: 'https://news.ycombinator.com/front?day=2021-10-09&p=2',
    },
  },
  {
    title: 'Show HN: Self-Parking Car Evolution (trekhleb.dev)',
    summary: ['Published on Hacker News 2nd page. The link leads to the Hacker News archive for that day where the mention can be found.'],
    date: '2021-09-28',
    publisher: Publisher.HackerNews,
    tag: PublicationTag.Featured,
    link: {
      url: 'https://news.ycombinator.com/front?day=2021-09-28&p=2',
    },
  },
  {
    title: 'Self-Parking Car in <500 Lines of Code',
    summary: ['Training the car to do self-parking using a genetic algorithm'],
    date: '2021-09-28',
    publisher: Publisher.TowardsDataScience,
    tag: PublicationTag.Authored,
    link: {
      // This link stopped working after TDS restructured the URLs. It was moved to the TDS Archive.
      // url: 'https://towardsdatascience.com/self-parking-car-in-500-lines-of-code-c1b2a57455af',
      url: 'https://medium.com/data-science/self-parking-car-in-500-lines-of-code-c1b2a57455af',
    },
  },
  {
    title: 'Binary representation of floating-point numbers (github.com/trekhleb)',
    summary: ['Published on Hacker News 2nd page. The link leads to the Hacker News archive for that day where the mention can be found.'],
    date: '2021-07-26',
    publisher: Publisher.HackerNews,
    tag: PublicationTag.Featured,
    link: {
      url: 'https://news.ycombinator.com/front?day=2021-07-26&p=2',
    },
  },
  {
    title: 'Binary representation of the floating-point numbers',
    summary: ['Interactive example of how the floating-point numbers like -27.156 are stored in binary format in a computer\'s memory'],
    date: '2021-07-15',
    publisher: Publisher.TowardsDataScience,
    tag: PublicationTag.Authored,
    link: {
      // This link stopped working after TDS restructured the URLs. It was moved to the TDS Archive.
      // url: 'https://towardsdatascience.com/binary-representation-of-the-floating-point-numbers-77d7364723f1',
      url: 'https://medium.com/data-science/binary-representation-of-the-floating-point-numbers-77d7364723f1',
    },
  },
  {
    title: 'Content-aware image resizing in JavaScript',
    summary: ['JavaScript implementation of so-called Seam Carving algorithm for the content-aware image resizing and object removal. A dynamic programming approach is applied to optimize the resizing time.'],
    date: '2021-04-30',
    publisher: Publisher.HackerNoon,
    tag: PublicationTag.Authored,
    link: {
      url: 'https://hackernoon.com/how-to-resize-an-image-correctly-in-javascript-4548336j',
    },
  },
  {
    title: 'Dynamic Programming vs. Divide-and-Conquer (2018) (trekhleb.dev)',
    summary: ['Published on Hacker News frontpage. The link leads to the Hacker News archive for that day where the mention can be found.'],
    date: '2021-04-25',
    publisher: Publisher.HackerNews,
    tag: PublicationTag.Featured,
    link: {
      url: 'https://news.ycombinator.com/front?day=2021-04-25',
    },
  },
  {
    title: 'Content-aware image resizing in JavaScript (trekhleb.dev)',
    summary: ['Published on Hacker News frontpage. The link leads to the Hacker News archive for that day where the mention can be found.'],
    date: '2021-04-16',
    publisher: Publisher.HackerNews,
    tag: PublicationTag.Featured,
    link: {
      url: 'https://news.ycombinator.com/front?day=2021-04-16',
    },
  },
  {
    title: 'Content-Aware Image Resizing in JavaScript',
    summary: ['JavaScript implementation of so-called Seam Carving algorithm for the content-aware image resizing and object removal. A dynamic programming approach is applied to optimize the resizing time.'],
    date: '2021-04-16',
    publisher: Publisher.JavaScriptInPlainEnglish,
    tag: PublicationTag.Authored,
    link: {
      url: 'https://javascript.plainenglish.io/content-aware-image-resizing-in-javascript-89144c1b5a5c',
    },
  },
  {
    title: 'How To Build Links Detector That Making Links in Your Book Clickable',
    summary: ['In this article I\'m solving the issue of making the printed links (i.e. in a book or in a magazine) clickable via your smartphone camera. We will use TensorFlow 2 Object Detection API to train a custom object detector model to find positions and bounding boxes of the sub-strings like https:// in the text image (i.e. in smartphone camera stream).'],
    date: '2020-12-06',
    publisher: Publisher.HackerNoon,
    tag: PublicationTag.Authored,
    link: {
      url: 'https://hackernoon.com/how-to-build-links-detector-that-making-links-in-your-book-clickable-d11h31v2',
    },
  },
  {
    title: 'Making the Printed Links Clickable Using TensorFlow 2 Object Detection API',
    summary: ['In this article I\'m solving the issue of making the printed links (i.e. in a book or in a magazine) clickable via your smartphone camera. We will use TensorFlow 2 Object Detection API to train a custom object detector model to find positions and bounding boxes of the sub-strings like https:// in the text image (i.e. in smartphone camera stream).'],
    date: '2020-12-01',
    publisher: Publisher.TowardsDataScience,
    tag: PublicationTag.Authored,
    link: {
      // This link stopped working after TDS restructured the URLs. It was moved to the TDS Archive.
      // url: 'https://towardsdatascience.com/making-the-printed-links-clickable-using-tensorflow-2-object-detection-api-be42bd65488a',
      url: 'https://medium.com/data-science/making-the-printed-links-clickable-using-tensorflow-2-object-detection-api-be42bd65488a',
    },
  },
  {
    title: 'NanoNeuron — 7 simple JS functions that explain how machines learn',
    summary: ['7 simple JavaScript functions that will give you a feeling of how machines can actually “learn”.'],
    date: '2020-07-04',
    publisher: Publisher.TowardsDataScience,
    tag: PublicationTag.Authored,
    link: {
      // This link stopped working after TDS restructured the URLs. It was moved to the TDS Archive.
      // url: 'https://towardsdatascience.com/nanoneuron-7-simple-js-functions-that-explain-how-machines-learn-d2d647b21497',
      url: 'https://medium.com/data-science/nanoneuron-7-simple-js-functions-that-explain-how-machines-learn-d2d647b21497',
    },
  },
  {
    title: 'Generating cooking recipes using TensorFlow and LSTM Recurrent Neural Network: A step-by-step guide',
    summary: ['A character-level LSTM (Long short-term memory) RNN (Recurrent Neural Network) is trained on ~100k recipes dataset using TensorFlow. The model suggested the recipes "Cream Soda with Onions", "Puff Pastry Strawberry Soup", "Zucchini flavor Tea", and "Salmon Mousse of Beef and Stilton Salad with Jalapenos". Yum!? Follow along this detailed guide with code to create your own recipe-generating chef.'],
    date: '2020-07-03',
    publisher: Publisher.KDnuggets,
    tag: PublicationTag.Authored,
    link: {
      url: 'https://www.kdnuggets.com/2020/07/generating-cooking-recipes-using-tensorflow.html',
    },
  },
  {
    title: '[Book] JavaScript Algorithms',
    summary: ['Pass your algorithms interview with confidence by learning data structures and algorithms in JavaScript. The book should help engineers to better prepare for tech interviews.', 'The sample chapter is indexed by Google Scholar (2026-10-25); the two citing works Scholar attributes to it — Dbux-PDG (IEEE VISSOFT 2022) and a PyScript benchmarking paper (IEEE UEMCON 2022) — cite the javascript-algorithms repository, which shares the book\'s title.'],
    date: '2020-07-02',
    publisher: Publisher.Newline,
    tag: PublicationTag.Authored,
    link: {
      url: 'https://www.newline.co/javascript-algorithms',
    },
  },
  {
    title: 'Generating weird cooking recipes with TensorFlow (github.com/trekhleb)',
    summary: ['Published on Hacker News 2nd page. The link leads to the Hacker News archive for that day where the mention can be found.'],
    date: '2020-06-22',
    publisher: Publisher.HackerNews,
    tag: PublicationTag.Featured,
    link: {
      url: 'https://news.ycombinator.com/front?day=2020-06-22&p=2',
    },
  },
  {
    title: 'Generating cooking recipes using TensorFlow and LSTM Recurrent Neural Network: A step-by-step guide',
    summary: ['This article contains details of how the recipes generator LSTM model may be trained trained on Python using TensorFlow 2 with Keras API.'],
    date: '2020-06-20',
    publisher: Publisher.TowardsDataScience,
    tag: PublicationTag.Authored,
    link: {
      // This link stopped working after TDS restructured the URLs. It was moved to the TDS Archive.
      // url: 'https://towardsdatascience.com/generating-cooking-recipes-using-tensorflow-and-lstm-recurrent-neural-network-a7bf242acad3',
      url: 'https://medium.com/data-science/generating-cooking-recipes-using-tensorflow-and-lstm-recurrent-neural-network-a7bf242acad3',
    },
  },
  {
    title: 'How I work: Oleksii Trekhleb, Front-end Engineer at Uber (in UA)',
    summary: ['About my work, workspace organization, useful tools, life hacks and how I learn new technologies on my pet projects.'],
    date: '2020-06-10',
    publisher: Publisher.DOU,
    tag: PublicationTag.Coverage,
    link: {
      url: 'https://dou.ua/lenta/articles/how-i-work-trekhleb/',
    },
  },
  {
    title: 'Interactive Machine Learning Experiments',
    summary: ['A collection of interactive machine-learning experiments. Each experiment consists of Jupyter/Colab notebook (to see how a model was trained) and demo page (to see a model in action right in your browser).'],
    date: '2020-06-26',
    publisher: Publisher.KDnuggets,
    tag: PublicationTag.Authored,
    link: {
      url: 'https://www.kdnuggets.com/2020/05/interactive-machine-learning-experiments.html',
    },
  },
  {
    title: 'Interactive Machine Learning Experiments',
    summary: ['A collection of interactive machine-learning experiments. Each experiment consists of Jupyter/Colab notebook (to see how a model was trained) and demo page (to see a model in action right in your browser).'],
    date: '2020-05-06',
    publisher: Publisher.TowardsDataScience,
    tag: PublicationTag.Authored,
    link: {
      // This link stopped working after TDS restructured the URLs. It was moved to the TDS Archive.
      // url: 'https://towardsdatascience.com/interactive-machine-learning-experiments-e9b29b0cb7b9',
      url: 'https://medium.com/data-science/interactive-machine-learning-experiments-e9b29b0cb7b9',
    },
  },
  {
    title: 'NanoNeuron – simple JavaScript functions that explain how machines learn (github.com/trekhleb)',
    summary: ['Published on Hacker News frontpage. The link leads to the Hacker News archive for that day where the mention can be found.'],
    date: '2019-12-06',
    publisher: Publisher.HackerNews,
    tag: PublicationTag.Featured,
    link: {
      url: 'https://news.ycombinator.com/front?day=2019-12-06',
    },
  },
  {
    title: 'Creating React usePosition() hook for getting browser’s geolocation',
    summary: ['In this article I\'m explaining how to create React usePosition() hook to fetch and follow browser’s location.'],
    date: '2019-07-01',
    publisher: Publisher.ITNEXT,
    tag: PublicationTag.Authored,
    link: {
      url: 'https://itnext.io/creating-react-useposition-hook-for-getting-browsers-geolocation-2f27fc1d96de',
    },
  },
  {
    title: 'Technical Interview Preparation Checklist',
    summary: ['This article is my attempt to summarize common technical interview process steps and to collect in one place some useful insights from recruiters that they normally send to applicants before the interviews.'],
    date: '2019-05-01',
    publisher: Publisher.ITNEXT,
    tag: PublicationTag.Authored,
    link: {
      url: 'https://itnext.io/technical-interview-preparation-checklist-b000125f1535',
    },
  },
  {
    title: 'Homemade Machine Learning is a repository for learning ML in Python with a Jupyter demo',
    summary: ['Article about the project that contains examples of popular machine learning algorithms implemented in Python with mathematics behind them being explained.'],
    date: '2019-01-08',
    publisher: Publisher.DOU,
    tag: PublicationTag.Authored,
    link: {
      url: 'https://dou.ua/lenta/articles/dou-projector-homemade-machine-learning/',
    },
  },
  {
    title: 'Homemade Machine Learning in Python',
    summary: ['Article about the project that contains examples of popular machine learning algorithms implemented in Python with mathematics behind them being explained.'],
    date: '2018-12-21',
    publisher: Publisher.AITimeJournal,
    tag: PublicationTag.Authored,
    link: {
      url: 'https://www.aitimejournal.com/@oleksii.trekhleb/homemade-machine-learning-in-python',
    },
  },
  {
    title: 'Homemade Machine Learning in Python',
    summary: ['Article about the project that contains examples of popular machine learning algorithms implemented in Python with mathematics behind them being explained.'],
    date: '2018-12-21',
    publisher: Publisher.DataDrivenInvestor,
    tag: PublicationTag.Authored,
    link: {
      url: 'https://medium.datadriveninvestor.com/homemade-machine-learning-in-python-ed77c4d6e25b',
    },
  },
  {
    title: 'Machine Learning in MatLab/Octave',
    summary: ['MatLab/Octave examples of popular machine learning algorithms with code examples and mathematics behind them being explained.'],
    date: '2018-10-31',
    publisher: Publisher.DataDrivenInvestor,
    tag: PublicationTag.Authored,
    link: {
      url: 'https://medium.datadriveninvestor.com/machine-learning-in-matlab-octave-e0492cd803c0',
    },
  },
  {
    title: 'Dynamic Programming vs Divide-and-Conquer',
    summary: ['In this article I’m trying to explain the difference/similarities between dynamic programming and divide and conquer approaches based on two examples: binary search and minimum edit distance (Levenshtein distance).'],
    date: '2018-09-19',
    publisher: Publisher.GeeksForGeeks,
    tag: PublicationTag.Authored,
    link: {
      url: 'https://www.geeksforgeeks.org/dynamic-programming-vs-divide-and-conquer/',
    },
  },
  {
    title: 'Playground and Cheatsheet for Learning Python (in UA)',
    summary: ['Collection of Python scripts that are split by topics and contain code examples with explanations.'],
    date: '2018-09-04',
    publisher: Publisher.DOU,
    tag: PublicationTag.Authored,
    link: {
      url: 'https://dou.ua/lenta/articles/dou-projector-playground-for-learning-python/',
    },
  },
  {
    title: 'Classic Algorithms Implemented in JavaScript (github.com/trekhleb)',
    summary: ['Published on Hacker News frontpage. The link leads to the Hacker News archive for that day where the mention can be found.'],
    date: '2018-07-20',
    publisher: Publisher.HackerNews,
    tag: PublicationTag.Featured,
    link: {
      url: 'https://news.ycombinator.com/front?day=2018-07-20',
    },
  },
  {
    title: 'What I Learned In My Career Developing 50+ Web-Projects, Launching 2 Startups And 2 Open-Source Projects',
    summary: ['How to stay productive and to be open to new opportunities (career developing).'],
    date: '2018-07-09',
    publisher: Publisher.HowIGotJob,
    tag: PublicationTag.Authored,
    link: {
      url: 'https://howigotjob.com/software-engineer/what-i-learned-in-my-career-developing-50-web-projects-2-open-source-projects/?utm_content=cmp-true',
    },
  },
  {
    title: 'Permutations/Combinations Algorithms Cheat Sheets',
    summary: ['This article briefly describes the difference between mathematical permutations and combinations, explains the main idea behind permutations and combinations algorithms and contains links to algorithms implementation in JavaScript.'],
    date: '2018-06-29',
    publisher: Publisher.ITNEXT,
    tag: PublicationTag.Authored,
    link: {
      url: 'https://itnext.io/permutations-combinations-algorithms-cheat-sheet-68c14879aba5',
    },
  },
  {
    title: 'Dynamic Programming vs Divide-and-Conquer',
    summary: ['In this article I’m trying to explain the difference/similarities between dynamic programming and divide and conquer approaches based on two examples: binary search and minimum edit distance (Levenshtein distance).', 'Indexed by Google Scholar, where three theses cite it (2026-10-25): a University of Namur master\'s thesis (2020) and a Friedrich Schiller University Jena bachelor thesis written at the German Aerospace Center (2021) reproduce its Levenshtein-distance figure; a Juraj Dobrila University of Pula thesis (2018) adapts its dynamic-programming diagram.'],
    date: '2018-06-15',
    publisher: Publisher.ITNEXT,
    tag: PublicationTag.Authored,
    link: {
      url: 'https://itnext.io/dynamic-programming-vs-divide-and-conquer-2fea680becbe',
    },
  },
  {
    title: 'Algorithms and Data Structures Explained and Implemented in JavaScript (github.com/trekhleb)',
    summary: ['Published on Hacker News frontpage. The link leads to the Hacker News archive for that day where the mention can be found.'],
    date: '2018-05-23',
    publisher: Publisher.HackerNews,
    tag: PublicationTag.Featured,
    link: {
      url: 'https://news.ycombinator.com/front?day=2018-05-23',
    },
  },
  {
    title: 'Algorithms and Data Structures in JavaScript',
    summary: ['Algorithms and data structures implemented in JavaScript with explanations and links to further readings.'],
    date: '2018-05-21',
    publisher: Publisher.ITNEXT,
    tag: PublicationTag.Authored,
    link: {
      url: 'https://itnext.io/algorithms-and-data-structures-in-javascript-a71548f902cb',
    },
  },
  {
    title: 'API Design of X (Twitter) Home Timeline',
    summary: ['My article about the API design of X (Twitter) home timeline has been included to TLDR Newsletter.'],
    date: '2024-12-13',
    publisher: Publisher.TLDRNewsletter,
    tag: PublicationTag.Featured,
    link: {
      url: 'https://tldr.tech/devops/2024-12-13',
    },
  },
  {
    title: 'Why is explainability so important right now?',
    summary: ['My article about the "Genetic algorithm learns how to park a car" has been mentioned in this Towards Data Science publication.'],
    date: '2021-10-07',
    publisher: Publisher.TowardsDataScience,
    tag: PublicationTag.Coverage,
    link: {
      url: 'https://towardsdatascience.com/why-is-explainability-so-important-right-now-60f1b850023a/',
    },
  },
  {
    title: 'Yes-Brainer: A Council of AI Models',
    summary: ['A council of AI models for the decisions that aren\'t no-brainers — models answer in parallel, debate to consensus, or get judged to a verdict. The article explains the ideas behind my yesbrainer.ai project.'],
    date: '2026-07-18',
    publisher: Publisher.ITNEXT,
    tag: PublicationTag.Authored,
    link: {
      url: 'https://itnext.io/yes-brainer-a-council-of-ai-models-fe31baa61f93',
    },
  },
  {
    title: 'Yes-Brainer: A Council of AI Models',
    summary: ['My yesbrainer.ai project has been featured on Sidebar — the five best design and front-end links of the day.'],
    date: '2026-07-17',
    publisher: Publisher.SidebarIO,
    tag: PublicationTag.Featured,
    link: {
      url: 'https://sidebar.io/date/2026-07-17',
    },
  },
  {
    title: 'Developer Technical Interview Notes',
    summary: ['A tech-interview preparation book published by Hanbit Media (South Korea) that cites my GitHub project trekhleb/javascript-algorithms.'],
    date: '2025-04-07',
    publisher: Publisher.HanbitMedia,
    tag: PublicationTag.BookCitation,
    link: {
      url: 'https://books.google.com/books?id=aUZUEQAAQBAJ',
    },
  },
  {
    title: '万星开源推荐: JavaScript Algorithms',
    summary: ['A dedicated article on Juejin (掘金), a major Chinese developer platform, about my GitHub project trekhleb/javascript-algorithms.'],
    date: '2024-11-03',
    publisher: Publisher.Juejin,
    tag: PublicationTag.Coverage,
    link: {
      url: 'https://juejin.cn/post/7433256760679809035',
    },
  },
  {
    title: 'Easys Git & GitHub book',
    summary: ['A Git & GitHub handbook published by Easys Publishing (South Korea) that cites my GitHub project trekhleb/javascript-algorithms.'],
    date: '2024-08-09',
    publisher: Publisher.EasysPublishing,
    tag: PublicationTag.BookCitation,
    link: {
      url: 'https://books.google.com/books?id=vw4dEQAAQBAJ',
    },
  },
  {
    title: 'AI Shift engineering blog (CyberAgent group)',
    summary: ['My GitHub project trekhleb/javascript-algorithms has been referenced in the AI Shift (CyberAgent group, Japan) corporate engineering blog on Zenn.'],
    date: '2024-07-01',
    publisher: Publisher.Zenn,
    tag: PublicationTag.Coverage,
    link: {
      url: 'https://zenn.dev/aishift/articles/8d02ac3e190bb7',
    },
  },
  {
    title: 'Automated Parking Planning with Vision-Based BEV Approach',
    summary: ['The research paper on automated parking (arXiv:2406.15430) that cites my GitHub project trekhleb/self-parking-car-evolution.'],
    date: '2024-05-24',
    publisher: Publisher.ArXiv,
    tag: PublicationTag.ResearchCitation,
    link: {
      url: 'https://arxiv.org/abs/2406.15430',
    },
  },
  {
    title: 'CrashJS: A NodeJS Benchmark for Automated Crash Reproduction',
    summary: ['A peer-reviewed paper from the 21st International Conference on Mining Software Repositories (MSR 2024) that uses my GitHub project trekhleb/javascript-algorithms in its benchmark of real-world JavaScript crashes.'],
    date: '2024-04-15',
    publisher: Publisher.ACM,
    tag: PublicationTag.ResearchCitation,
    link: {
      // Also here: https://arxiv.org/html/2405.05541v1
      url: 'https://dl.acm.org/doi/10.1145/3643991.3644912',
    },
  },
  {
    title: 'SynTest-JavaScript: Automated Unit-Level Test Case Generation for JavaScript',
    summary: ['A peer-reviewed tool paper from the 17th ACM/IEEE International Workshop on Search-Based and Fuzz Testing (SBFT 2024), by TU Delft, that uses my GitHub project trekhleb/javascript-algorithms as one of the benchmark subject systems.'],
    date: '2024-04-14',
    publisher: Publisher.ACM,
    tag: PublicationTag.ResearchCitation,
    link: {
      // Also here: https://repository.tudelft.nl/file/File_d8f52062-ebcb-4d05-a56d-9298e8b7bf78
      url: 'https://dl.acm.org/doi/10.1145/3643659.3643928',
    },
  },
  {
    title: 'Analyzing a Semantics-Aware Bug Seeding Tool\'s Efficacy: A qualitative study with the SemSeed tool',
    summary: ['A peer-reviewed paper from the XXXVII Brazilian Symposium on Software Engineering (SBES 2023) that references my GitHub project trekhleb/javascript-algorithms.'],
    date: '2023-09-25',
    publisher: Publisher.ACM,
    tag: PublicationTag.ResearchCitation,
    link: {
      url: 'https://dl.acm.org/doi/10.1145/3613372.3613412',
    },
  },
  {
    title: 'Introduction to Programming for the Organic Chemist',
    summary: ['A chapter in the Wiley book "Enabling Tools and Techniques for Organic Synthesis" (by Jason M. Stevens, Bristol Myers Squibb) that cites my GitHub project trekhleb/learn-python.'],
    date: '2023-08-31',
    publisher: Publisher.Wiley,
    tag: PublicationTag.BookCitation,
    link: {
      url: 'https://onlinelibrary.wiley.com/doi/10.1002/9781119855668.ch9',
    },
  },
  {
    title: 'JavaScript Algorithms cited in a TU Delft Research Project thesis',
    summary: ['A TU Delft Computer Science research project thesis (E. Li, 2023) that cites my GitHub project trekhleb/javascript-algorithms.'],
    date: '2023-06-25',
    publisher: Publisher.TUDelft,
    tag: PublicationTag.ResearchCitation,
    link: {
      url: 'https://repository.tudelft.nl/file/File_9c3a2e23-83c5-4004-930b-c3b2f5a0a3f7',
    },
  },
  {
    title: 'Every JavaScript Algorithm',
    summary: ['A dedicated Medium article that profiles my GitHub project trekhleb/javascript-algorithms and walks through its algorithm collection.'],
    date: '2023-04-11',
    publisher: Publisher.Medium,
    tag: PublicationTag.Coverage,
    link: {
      url: 'https://medium.com/@fareedkhandev/every-javascript-algorithm-7fb074cd66d1',
    },
  },
  {
    title: 'Guess What: Test Case Generation for Javascript with Unsupervised Probabilistic Type Inference',
    summary: ['A peer-reviewed paper from the 14th International Symposium on Search-Based Software Engineering (SSBSE 2022), published in Springer\'s Lecture Notes in Computer Science, that uses my GitHub project trekhleb/javascript-algorithms for test case generation experiments.'],
    date: '2022-11-15',
    publisher: Publisher.Springer,
    tag: PublicationTag.ResearchCitation,
    link: {
      url: 'https://link.springer.com/chapter/10.1007/978-3-031-21251-2_5',
    },
  },
  {
    title: 'Dbux-PDG: An Interactive Program Dependency Graph for Data Structures and Algorithms',
    summary: ['A peer-reviewed paper from the IEEE Working Conference on Software Visualization (VISSOFT 2022) that uses algorithms from my GitHub project trekhleb/javascript-algorithms as its analysis examples.', 'Reference 23 of the paper reads "Trekhleb, Oleksii. (2018) Javascript algorithms. [Online]. Available: https://github.com/trekhleb/javascript-algorithms".'],
    date: '2022-10-03',
    publisher: Publisher.IEEE,
    tag: PublicationTag.ResearchCitation,
    link: {
      // Also here: https://domiii.github.io/dbux/pdg
      url: 'https://ieeexplore.ieee.org/document/9978351',
    },
  },
  {
    title: 'Top 33 JavaScript Projects on GitHub (August 2018)',
    summary: ['My list of the top 33 JavaScript projects on GitHub as of August 2018.', 'Cited in 2021 by Moog, Demmel, Backes and Fass (Saarland University / CISPA Helmholtz Center) in their IEEE/IFIP DSN paper as the source of the "popular GitHub projects" from which they collected regular JavaScript files to train their detectors.'],
    date: '2018-08-18',
    publisher: Publisher.ITNEXT,
    tag: PublicationTag.Authored,
    link: {
      url: 'https://itnext.io/top-33-javascript-projects-on-github-ad9d1dc822f7',
    },
  },
  {
    title: 'Statically Detecting JavaScript Obfuscation and Minification Techniques in the Wild',
    summary: ['A peer-reviewed paper from the 51st Annual IEEE/IFIP International Conference on Dependable Systems and Networks (DSN 2021) that cites my article "Top 33 JavaScript Projects on GitHub" as the source of the popular GitHub projects used to build its corpus of regular JavaScript files (reference 46).'],
    date: '2021-06-21',
    publisher: Publisher.IEEE,
    tag: PublicationTag.ResearchCitation,
    link: {
      url: 'https://ieeexplore.ieee.org/document/9505063',
    },
  },
  {
    title: 'Understanding Promotion-as-a-Service on GitHub',
    summary: ['A peer-reviewed paper from the 36th Annual Computer Security Applications Conference (ACSAC 2020; Tsinghua University, University of Delaware, Virginia Tech, UT Dallas, UC Irvine, Fudan University) on paid fake-star services. Its Table 2 lists my GitHub project trekhleb/homemade-machine-learning (8,749 stars in December 2018) among the well-known "Popular Author" repositories — beside Facebook Research\'s and Alibaba\'s — that fake accounts star in order to look like normal users.'],
    date: '2020-12-08',
    publisher: Publisher.ACM,
    tag: PublicationTag.ResearchCitation,
    link: {
      url: 'https://doi.org/10.1145/3427228.3427258',
    },
  },
  {
    title: 'Performance Benchmarking of PyScript and Comparative Results with Javascript',
    summary: ['A peer-reviewed paper from the 2022 IEEE 13th Annual Ubiquitous Computing, Electronics & Mobile Communication Conference (UEMCON) that benchmarks PyScript against JavaScript and cites my GitHub project trekhleb/javascript-algorithms (reference 13).'],
    date: '2022-10-26',
    publisher: Publisher.IEEE,
    tag: PublicationTag.ResearchCitation,
    link: {
      url: 'https://ieeexplore.ieee.org/document/9965680',
    },
  },
  {
    title: 'Development of an Educational Mobile Game Applications for Grade 5 for Knowledge Channel Inc.',
    summary: ['A peer-reviewed paper from the 2nd International Conference on Information Science and Systems (ICISS 2019, ACM; Technological Institute of the Philippines). Its Section 2.4 describes the Fisher–Yates shuffle used to randomise questions, items and assets in the mobile games and cites the fisher-yates implementation in my GitHub project trekhleb/javascript-algorithms as its source (references 16 and 17).'],
    date: '2019-03-16',
    publisher: Publisher.ACM,
    tag: PublicationTag.ResearchCitation,
    link: {
      url: 'https://doi.org/10.1145/3322645.3322695',
    },
  },
  {
    title: 'Psalm Text Generator Comparison Between English and Korean Using LSTM Blocks in a Recurrent Neural Network',
    summary: ['A paper from the Korea Institute of Information and Communication Engineering 2022 Fall Conference (Hanbat National University) that cites the "Shakespeare Text Generation (using RNN LSTM)" notebook from my GitHub project trekhleb/machine-learning-experiments as a demonstration of RNN/LSTM text generation (reference 4).'],
    date: '2022-10-27',
    publisher: Publisher.KIICE,
    tag: PublicationTag.ResearchCitation,
    link: {
      url: 'https://koreascience.kr/article/CFKO202232558326317.page',
    },
  },
  {
    title: 'CHATssistant: un agent conversationnel pour l\'apprentissage de la programmation',
    summary: ['A master\'s thesis in computer science (data science) at the University of Namur, Belgium (Maxime Dalla Valle and Antoine Jacques, 2020), whose Figure 14 reproduces the Levenshtein-distance example from my article "Dynamic Programming vs Divide-and-Conquer" and cites it.'],
    // Only the award year of the thesis is known
    date: '2020',
    publisher: Publisher.UniversiteDeNamur,
    tag: PublicationTag.ResearchCitation,
    link: {
      url: 'https://pure.unamur.be/ws/portalfiles/portal/52807751/2020_DallaValleM_memoire.pdf',
    },
  },
  {
    title: 'Komparacija metoda za oblikovanje algoritma (Comparison of Algorithm Design Methods)',
    summary: ['An undergraduate thesis at the Faculty of Informatics, Juraj Dobrila University of Pula, Croatia (Maja Mandarić, defended 2018-09-26), whose Figure 8 on dynamic programming is "adapted from (Trekhleb, n.d.)" — my article "Dynamic Programming vs Divide-and-Conquer" — and which cites it.'],
    date: '2018-09-26',
    publisher: Publisher.UniversityOfPula,
    tag: PublicationTag.ResearchCitation,
    link: {
      url: 'https://repozitorij.unipu.hr/object/unipu:2981',
    },
  },
  {
    title: 'Entwicklung einer nutzergestützten Matching-Software zum Datenaustausch zwischen APIs',
    summary: ['A bachelor thesis at Friedrich Schiller University Jena, written at the German Aerospace Center (DLR) Institute of Data Science (Max Möbius, 2021-03-24; open access on DLR\'s electronic library), whose Figure 3 reproduces the Levenshtein-distance matrix from my article "Dynamic Programming vs Divide-and-Conquer" and cites it as reference 16.'],
    date: '2021-03-24',
    publisher: Publisher.FSUJena,
    tag: PublicationTag.ResearchCitation,
    link: {
      url: 'https://elib.dlr.de/145473/',
    },
  },
  {
    title: 'SBOM Generation Tools Under Microscope: A Focus on the npm Ecosystem',
    summary: ['A peer-reviewed paper from the 39th ACM/SIGAPP Symposium on Applied Computing (SAC 2024; Idaho State University) that evaluates four SBOM generators on the 50 most-starred JavaScript npm projects it found on GitHub. Its Table 2 lists my GitHub project trekhleb/javascript-algorithms first (174 thousand stars, 1,783 kLOC, 11 npm packages), ahead of Bootstrap, three.js and Express.'],
    date: '2024-05-21',
    publisher: Publisher.ACM,
    tag: PublicationTag.ResearchCitation,
    link: {
      url: 'https://doi.org/10.1145/3605098.3635927',
    },
  },
  {
    title: 'Investigating Configurations for Automated Crash Reproduction in JavaScript',
    summary: ['A PhD thesis in engineering at Victoria University of Wellington, New Zealand (Philip Oliver, 2024; DOI 10.26686/wgtn.27633654). Its CrashJS benchmark reuses the SynTest-JavaScript dataset, for which five JavaScript projects with high star counts were selected from GitHub: Commander.js, Express, Moment.js, my GitHub project trekhleb/javascript-algorithms, and Lodash.'],
    date: '2024-11-07',
    publisher: Publisher.VictoriaUniversityOfWellington,
    tag: PublicationTag.ResearchCitation,
    link: {
      url: 'https://doi.org/10.26686/wgtn.27633654',
    },
  },
  {
    title: 'Think & Play: Classifying left and right hand motor imagery EEG signals by using dry electrodes for real-time BCI gaming',
    summary: ['A master\'s thesis in Artificial Intelligence at Utrecht University, Faculty of Science (Hunter Sterk, 16 June 2022; research supported by Sogeti), which cites my article "Playing with Discrete Fourier Transform Algorithm in JavaScript" as the source of its Figure 3.9, the Fourier transform of EEG data (reference 63).'],
    date: '2022-06-16',
    publisher: Publisher.UtrechtUniversity,
    tag: PublicationTag.ResearchCitation,
    link: {
      url: 'https://studenttheses.uu.nl/server/api/core/bitstreams/464cfa46-d23b-483c-a004-ea2561b8cc2e/content',
    },
  },
  {
    title: 'Smart City Management Using Machine Learning Techniques',
    summary: ['A Master of Science thesis in Electrical and Computer Engineering at Virginia Commonwealth University, Richmond (Mostafa Zaman, December 2022; advisor Dr Sherif Abdelwahed; DOI 10.25772/QA5Q-SX30), whose Figure 2 "A map of Machine learning techniques" is the map from my GitHub project trekhleb/homemade-machine-learning, cited as reference 88.'],
    date: '2022-12',
    publisher: Publisher.VirginiaCommonwealthUniversity,
    tag: PublicationTag.ResearchCitation,
    link: {
      url: 'https://doi.org/10.25772/QA5Q-SX30',
    },
  },
  {
    title: 'Law, artificial intelligence, & liability: Assessing the correspondence between Kenyan law and civil liability for autonomous artificially intelligent systems',
    summary: ['An undergraduate (Bachelor of Laws) research dissertation at Strathmore University Law School, Nairobi (Beatrice Shako, March 2024; supervisor Mr Juan Riofrio; published in the SU+ repository in 2025), which cites my project trekhleb/homemade-machine-learning as its example of an open-source machine-learning library that dispersed contributors can modify (footnote 142).'],
    date: '2024-03',
    publisher: Publisher.StrathmoreUniversity,
    tag: PublicationTag.ResearchCitation,
    link: {
      url: 'http://hdl.handle.net/11071/16160',
    },
  },
  {
    title: 'Implementação de Algoritmos de Correção Automática de Tom',
    summary: ['An electrical-engineering graduation project (Projeto de Graduação) at the Universidade Federal do Espírito Santo, Vitória, Brazil (Marcos Corrêa Barcelos Junior, approved 11 December 2020; advisor Prof. Dr. Jorge Leonid Aching Samatelo), on automatic pitch correction, which cites my article "Playing with Discrete Fourier Transform Algorithm in JavaScript" as the source of one of its illustrations.'],
    date: '2020-12-11',
    publisher: Publisher.UFES,
    tag: PublicationTag.ResearchCitation,
    link: {
      url: 'https://engenhariaeletrica.ufes.br/sites/engenhariaeletrica.ufes.br/files/field/anexo/pg_ii_-_marcos_correa_barcelos_junior_-_final-_2020.1.pdf',
    },
  },
  {
    title: 'Top Hill Method - A New Sorting Approach to Reduce Execution Time',
    summary: ['A journal article in i-manager\'s Journal on Software Engineering, vol. 12 no. 4, April–June 2018 (Sandeep Kumar Sharma, Poornima University, Jaipur, and Debabrat Bharali, Assam Down Town University, Guwahati; DOI 10.26634/jse.12.4.14588), which cites the Linked List page of my project trekhleb/javascript-algorithms as its reference for the data structure its sorting method is built on (reference 3).'],
    date: '2018-06',
    publisher: Publisher.IManagerPublications,
    tag: PublicationTag.ResearchCitation,
    link: {
      url: 'https://doi.org/10.26634/jse.12.4.14588',
    },
  },
  {
    title: 'NexttPOS Delivery App: Aplicació mòbil per a la restauració',
    summary: ['A bachelor\'s final project (Treball de Fi de Grau) in Computer Engineering at the Universitat Autònoma de Barcelona, Escola d\'Enginyeria (Daniel Muñoz Vidal, February 2019; tutor Lluís Gesa Boté), a delivery app whose routing solves the Travelling Salesman Problem; it cites my project trekhleb/javascript-algorithms as its reference for the problem (reference 15).'],
    date: '2019-02-12',
    publisher: Publisher.UAB,
    tag: PublicationTag.ResearchCitation,
    link: {
      url: 'https://ddd.uab.cat/record/203341',
    },
  },
  {
    title: 'Software Requirements for Disaster Management Systems: A Study of Literature and Practice',
    summary: ['A paper in the proceedings of ISCRAM 2021, the 18th International Conference on Information Systems for Crisis Response and Management (Bruna Diirr, UNIRIO; Vânia de Oliveira Neves, UFF; Marcus Vinícius Vasconcelos de Almeida Cunha, Ana Beatriz Kapps dos Reis and Jairo Francisco de Souza, UFJF; Virginia Tech, Blacksburg, 2021, pp. 1042–1054), whose repository mining lists my COVID-19 Dashboard repository (trekhleb/covid-19) among the GitHub projects studied (Table 4, R38, Group 2: projects with 100 to 249 stars).'],
    date: '2021',
    publisher: Publisher.ISCRAM,
    tag: PublicationTag.ResearchCitation,
    link: {
      url: 'https://idl.iscram.org/files/brunadiirr/2021/2395_BrunaDiirr_etal2021.pdf',
    },
  },
  {
    title: 'Code-Flow: Leveraging AI-Assisted Visualization and Knowledge-Graph Integration for Enhanced Code Understanding Within the IDE',
    summary: ['A paper at the 2026 4th International Conference on Inventive Computing and Informatics (ICICI), Bangalore, 10–12 June 2026 (Meena Rhoshini C, Catherine Jessie J, Tharun M, Geetha M, Senthamizhselvi S and S. Pavithra; IEEE; DOI 10.1109/ICICI68773.2026.11581039), whose full text, as indexed by Google Scholar, contains the address of my project trekhleb/javascript-algorithms.'],
    date: '2026-06-10',
    publisher: Publisher.IEEE,
    tag: PublicationTag.ResearchCitation,
    link: {
      url: 'https://doi.org/10.1109/ICICI68773.2026.11581039',
    },
  },
  {
    title: 'On the Usage of Emojis to Signal Activism in GitHub Repositories',
    summary: ['A paper at the 2026 International Conference on Smart Computing, IoT and Machine Learning (SIML), Surakarta, Indonesia, 10–11 June 2026 (Amri Zadi Hudaya, Youmei Fan, Raula Gaikovina Kula, Yusuf Sulistyo Nugroho and Kenichi Matsumoto; IEEE; DOI 10.1109/SIML69834.2026.11621497), on emoji in GitHub README files signalling support for social movements, whose full text, as indexed by Google Scholar, contains the phrase "led by javascript-algorithms (193,622 stars)" — my project trekhleb/javascript-algorithms, identified by its star count.'],
    date: '2026-06-10',
    publisher: Publisher.IEEE,
    tag: PublicationTag.ResearchCitation,
    link: {
      url: 'https://doi.org/10.1109/SIML69834.2026.11621497',
    },
  },
  {
    title: 'The Response of Mobile Applications to Crisis in Canada',
    summary: ['A Master of Science (eHealth) thesis at McMaster University, Hamilton, Canada (Noella Noronha, August 2020). Its COVID-19 chapter reviews the online dashboards that let the public follow the pandemic and cites my COVID-19 Dashboard (trekhleb.github.io/covid-19) among them (reference 43).'],
    date: '2020-08',
    publisher: Publisher.McMasterUniversity,
    tag: PublicationTag.ResearchCitation,
    link: {
      url: 'https://hdl.handle.net/11375/25931',
    },
  },
  {
    title: 'Sandbox evasion in web browsers: A research paper on detection of sandbox evasion attacks in web browsers using convolutional neural network',
    summary: ['A master\'s thesis in computer security at Blekinge Institute of Technology, Karlskrona, Sweden (Christoffer Persson and Martin Philipsson, October 2024; supervisor Dr Dragos Ilie; in cooperation with Knowit Cybersecurity & Law), whose Table 3.3 lists my GitHub project trekhleb/javascript-algorithms among the repositories used as "good" (benign) code to build the training and test datasets of its sandbox-evasion detector.'],
    date: '2024-10-28',
    publisher: Publisher.BlekingeInstituteOfTechnology,
    tag: PublicationTag.ResearchCitation,
    link: {
      url: 'https://urn.kb.se/resolve?urn=urn:nbn:se:bth-27000',
    },
  },
  {
    title: 'Sound-based Remote Manufacturing Process Monitoring using Convolutional Neural Network (CNN)',
    summary: ['A doctoral dissertation in engineering at Seoul National University, Department of Mechanical and Aerospace Engineering, Graduate School (Jisoo Kim, February 2021), which cites my article "Playing with Discrete Fourier Transform Algorithm in JavaScript" as the source of its Figure 16 "Concept of Fourier Transform" (reference 85).'],
    date: '2021-02',
    publisher: Publisher.SeoulNationalUniversity,
    tag: PublicationTag.ResearchCitation,
    link: {
      url: 'https://s-space.snu.ac.kr/handle/10371/175175',
    },
  },
  {
    title: 'On the Real-World Interactivity Potential of Minimalistic Knitted Sensors at the Intersection of Artificial Intelligence and User Experience',
    summary: ['A PhD dissertation at Drexel University, Philadelphia (Denisa Qori McDonald, December 2021; DOI 10.17918/00000901), whose Figure 3.2, an example of the Levenshtein distance algorithm, is the "Saturday to Sunday" edit-distance illustration from the Levenshtein Distance page of my project trekhleb/javascript-algorithms, cited as reference 130 ("Trekhleb, Oleksii. Levenshtein distance").'],
    date: '2021-12',
    publisher: Publisher.DrexelUniversity,
    tag: PublicationTag.ResearchCitation,
    link: {
      url: 'https://doi.org/10.17918/00000901',
    },
  },
  {
    title: 'Mitigation of subway induced vibrations using wave barriers',
    summary: ['A Master of Science thesis in civil engineering (geotechnical) at Bangladesh University of Engineering and Technology, Dhaka (Mahbubah Ahmed, 2023; repository date 2023-10-16), which cites my article "Playing with Discrete Fourier Transform Algorithm in JavaScript" (its Medium copy) as the source of its Figure 2.7, a view of a signal in the time and frequency domains.'],
    date: '2023-10',
    publisher: Publisher.BUET,
    tag: PublicationTag.ResearchCitation,
    link: {
      url: 'http://lib.buet.ac.bd:8080/xmlui/handle/123456789/6872',
    },
  },
  {
    title: 'Combining GPS and sensors to determine mode of transportation',
    summary: ['A Bachelor of Engineering thesis in Information Technology at Metropolia University of Applied Sciences, Helsinki (Gajalakshan Chandrasegaran, 6 March 2023; 1,186 downloads on Theseus as of 2026-10-26), which lists my article "Gyro-web: Accessing the device orientation in JavaScript" first among its picture references.'],
    date: '2023-03-06',
    publisher: Publisher.Metropolia,
    tag: PublicationTag.ResearchCitation,
    link: {
      url: 'https://urn.fi/URN:NBN:fi:amk-2023052212712',
    },
  },
  {
    title: 'Etude expérimentale du couplage entre horloge circadienne et métabolisme',
    summary: ['A doctoral thesis in biology (molecular and cellular aspects) at Université de Lille, defended on 18 December 2024 (Alan Vandenberghe; supervisors Prof. Marc Lefranc and Dr Alessandro Furlan; HAL tel-05424736), which cites the French Fourier Transform page of my project trekhleb/javascript-algorithms as the source of its Figure 2-11, the discrete Fourier transform applied to a measured signal.'],
    date: '2024-12-18',
    publisher: Publisher.UniversiteDeLille,
    tag: PublicationTag.ResearchCitation,
    link: {
      url: 'https://theses.hal.science/tel-05424736v1',
    },
  },
  {
    title: 'Hands-free text editing using voice and gaze',
    summary: ['A master\'s thesis in Web Science at Universität Koblenz-Landau, Institute for Web Science and Technologies (Sabin Bhattarai, December 2019; supervisors Prof. Dr. Steffen Staab and Korok Sengupta), which cites the Levenshtein Distance page of my project trekhleb/javascript-algorithms as its reference for the edit-distance metric used in its evaluation (reference 46).'],
    date: '2019-12',
    publisher: Publisher.UniversitaetKoblenzLandau,
    tag: PublicationTag.ResearchCitation,
    link: {
      url: 'https://opus4.kobv.de/opus4-uni-koblenz/frontdoor/index/index/docId/2009',
    },
  },
  {
    title: 'Explainability of Neural Networks – A Novel Method for Language Models',
    summary: ['A master\'s thesis in the Interactive Media programme at the University of Applied Sciences Upper Austria (FH Oberösterreich), Hagenberg Campus (Christina Grafeneder, June 2019; supervisor FH-Prof. Mag. DI Dr. Andreas Stöckl), whose first character-level LSTM language model was trained on the code of my project trekhleb/javascript-algorithms merged with PubNub\'s JavaScript SDK (Section 6.1.1, footnote 2).'],
    date: '2019-06',
    publisher: Publisher.FHOberoesterreich,
    tag: PublicationTag.ResearchCitation,
    link: {
      url: 'https://theses.fh-hagenberg.at/index.php/thesis/Grafeneder19',
    },
  },
  {
    title: 'Designing an Extensible PBT Framework to Support Multiple Search Strategies',
    summary: ['A master\'s dissertation (Mestrado Integrado em Engenharia Informática e Computação) at the Faculty of Engineering of the University of Porto (Rui Jorge Leão Guedes, 28 July 2021; supervisor Prof. Hugo Sereno Ferreira; DOI 10.34626/qf8v-q994), which uses the Stack implementation from my project trekhleb/javascript-algorithms as one of its six evaluation benchmarks for property-based-testing search strategies (Section 7.3.2.2 and Table 7.2; results in Section 7.5.2 and Appendix C).'],
    date: '2021-07-28',
    publisher: Publisher.UniversidadeDoPorto,
    tag: PublicationTag.ResearchCitation,
    link: {
      url: 'https://hdl.handle.net/10216/135614',
    },
  },
  {
    title: 'A drawing app to express, grasp, and organize your thoughts and ideas',
    summary: ['My okso.app drawing app has been featured in the Changelog News.'],
    date: '2022-07-29',
    publisher: Publisher.Changelog,
    tag: PublicationTag.Featured,
    link: {
      url: 'https://changelog.com/news/a-drawing-app-to-express-grasp-and-organize-your-thoughts-and-ideas-PpNm',
    },
  },
  {
    title: 'Algorithms and data structures implemented in JS',
    summary: ['My GitHub project trekhleb/javascript-algorithms has been logged in Changelog News by the editor (2018-05-28).'],
    date: '2018-05-28',
    publisher: Publisher.Changelog,
    tag: PublicationTag.Featured,
    link: {
      url: 'https://changelog.com/news/algorithms-and-data-structures-implemented-in-js-gba0',
    },
  },
  {
    title: 'A self-parking car in 500 lines of code',
    summary: ['My article about trekhleb/self-parking-car-evolution has been featured in Changelog News.'],
    date: '2021-10-06',
    publisher: Publisher.Changelog,
    tag: PublicationTag.Featured,
    link: {
      url: 'https://changelog.com/news/a-selfparking-car-in-500-lines-of-code-zg3q',
    },
  },
  {
    title: 'Content-aware image resizing in JavaScript',
    summary: ['My article about the seam-carving algorithm (trekhleb/js-image-carver) has been featured in Changelog News.'],
    date: '2021-10-25',
    publisher: Publisher.Changelog,
    tag: PublicationTag.Featured,
    link: {
      url: 'https://changelog.com/news/contentaware-image-resizing-in-javascript-4EJ4',
    },
  },
  {
    title: 'Classic Algorithms Implemented in JavaScript',
    summary: ['My GitHub project trekhleb/javascript-algorithms has been included in Hacker Newsletter issue #412 (Learn section).'],
    date: '2018-07-27',
    publisher: Publisher.HackerNewsletter,
    tag: PublicationTag.Featured,
    link: {
      url: 'https://mailchi.mp/hackernewsletter/412',
    },
  },
  {
    title: 'NanoNeuron – simple JavaScript functions that explain how machines learn',
    summary: ['My GitHub project trekhleb/nano-neuron has been included in Hacker Newsletter issue #483 (Favorites section).'],
    date: '2019-12-13',
    publisher: Publisher.HackerNewsletter,
    tag: PublicationTag.Featured,
    link: {
      url: 'https://mailchi.mp/hackernewsletter/483',
    },
  },
  {
    title: 'javascript-algorithms: 包含了多种基于 JavaScript 的算法与数据结构',
    summary: ['My GitHub project trekhleb/javascript-algorithms has been featured in HelloGitHub Vol. 26 (entry 13, JavaScript section).'],
    date: '2018-05-28',
    publisher: Publisher.HelloGitHub,
    tag: PublicationTag.Featured,
    link: {
      url: 'https://hellogithub.com/periodical/volume/26',
    },
  },
  {
    title: 'JavaScript 算法与数据结构 (JavaScript Algorithms and Data Structures)',
    summary: ['My GitHub project trekhleb/javascript-algorithms (its Chinese README) has been featured in Ruan Yifeng\'s weekly, issue #8.'],
    date: '2018-06-08',
    publisher: Publisher.RuanYifengWeekly,
    tag: PublicationTag.Featured,
    link: {
      url: 'https://www.ruanyifeng.com/blog/2018/06/weekly-issue-8.html',
    },
  },
  {
    title: 'JS image carver',
    summary: ['My project trekhleb/js-image-carver has been featured in Ruan Yifeng\'s weekly, issue #156, with an explanation of seam carving and a link to my tutorial.'],
    date: '2021-04-30',
    publisher: Publisher.RuanYifengWeekly,
    tag: PublicationTag.Featured,
    link: {
      url: 'https://www.ruanyifeng.com/blog/2021/04/weekly-issue-156.html',
    },
  },
  {
    title: 'learn-python: 一份以代码和注释方式讲解 Python 的免费教程',
    summary: ['My GitHub project trekhleb/learn-python has been featured in HelloGitHub Vol. 62 (entry 21, Python section).'],
    date: '2021-05-28',
    publisher: Publisher.HelloGitHub,
    tag: PublicationTag.Featured,
    link: {
      url: 'https://hellogithub.com/periodical/volume/62',
    },
  },
  {
    title: 'JavaScript 的浮点数格式 (Binary representation of floating-point numbers)',
    summary: ['My article on binary floating-point numbers in trekhleb/javascript-algorithms has been featured in Ruan Yifeng\'s weekly, issue #171, with my illustration.'],
    date: '2021-08-13',
    publisher: Publisher.RuanYifengWeekly,
    tag: PublicationTag.Featured,
    link: {
      url: 'https://www.ruanyifeng.com/blog/2021/08/weekly-issue-171.html',
    },
  },
  {
    title: 'Dijkstra 算法详细图解 (Dijkstra\'s algorithm, illustrated step by step)',
    summary: ['The Chinese page of the illustrated Dijkstra article in my GitHub project trekhleb/javascript-algorithms has been featured in Ruan Yifeng\'s weekly, issue #373.'],
    date: '2025-11-14',
    publisher: Publisher.RuanYifengWeekly,
    tag: PublicationTag.Featured,
    link: {
      url: 'https://www.ruanyifeng.com/blog/2025/11/weekly-issue-373.html',
    },
  },
  {
    title: 'Application of Deep Learning Techniques for the Impedance-based SHM to the Oil & Gas Industry',
    summary: ['A book chapter published by the University of Brasília (in "Fundamental Concepts and Models for the Direct Problem", 2022) that cites my GitHub project trekhleb/homemade-machine-learning.'],
    // Only the year of the publication is known
    date: '2022',
    publisher: Publisher.UniversidadeDeBrasilia,
    tag: PublicationTag.BookCitation,
    link: {
      url: 'https://doi.editoracubo.com.br/10.4322/978-65-86503-83-8.c13.pdf',
    },
  },
  {
    title: 'Self-Parking Car Evolution',
    summary: ['My GitHub project trekhleb/self-parking-car-evolution has been included to JavaScript Weekly newsletter issue #558'],
    date: '2021-10-01',
    publisher: Publisher.JavaScriptWeekly,
    tag: PublicationTag.Featured,
    link: {
      url: 'https://javascriptweekly.com/issues/558',
    },
  },
  {
    title: 'Seam Carving: Content-Aware Image Resizing in JavaScript',
    summary: ['A dedicated review of my trekhleb/js-image-carver project by Bram Van Damme (Bramus), a Chrome Developer Relations Engineer at Google.'],
    date: '2021-04-26',
    publisher: Publisher.BramUs,
    tag: PublicationTag.Coverage,
    link: {
      url: 'https://www.bram.us/2021/04/26/seam-carving-content-aware-image-resizing-in-javascript/',
    },
  },
  {
    title: 'Accessing device orientation in pure JavaScript (trekhleb.dev)',
    summary: ['Published on Hacker News frontpage. The link leads to the Hacker News post about the Gyro-web article.'],
    date: '2021-03-07',
    publisher: Publisher.HackerNews,
    tag: PublicationTag.Featured,
    link: {
      url: 'https://news.ycombinator.com/item?id=26327532',
    },
  },
  {
    title: 'SegmentFault Tech Weekly (staff editorial)',
    summary: ['My GitHub project trekhleb/javascript-algorithms has been featured in the SegmentFault (思否) Tech Weekly staff editorial.'],
    date: '2021-01-16',
    publisher: Publisher.SegmentFault,
    tag: PublicationTag.Coverage,
    link: {
      url: 'https://segmentfault.com/a/1190000039004357',
    },
  },
  {
    title: 'Making the Printed Links Clickable Using TensorFlow 2 Object Detection API',
    summary: ['My article about the trekhleb/links-detector project has been featured in PyCoder\'s Weekly issue #450.'],
    date: '2020-12-08',
    publisher: Publisher.PyCodersWeekly,
    tag: PublicationTag.Featured,
    link: {
      url: 'https://pycoders.com/issues/450',
    },
  },
  {
    title: 'Generating Cooking Recipes using TensorFlow and LSTM Recurrent Neural Network',
    summary: ['My article about generating cooking recipes with TensorFlow (the machine-learning-experiments project) has been featured in PyCoder\'s Weekly issue #426.'],
    date: '2020-06-23',
    publisher: Publisher.PyCodersWeekly,
    tag: PublicationTag.Featured,
    link: {
      url: 'https://pycoders.com/issues/426',
    },
  },
  {
    title: 'Music Genre Detection (TU Delft BSc thesis)',
    summary: ['A TU Delft Bachelor thesis on music genre detection that cites my article on the Fourier Transform from trekhleb/javascript-algorithms.'],
    date: '2020-06-09',
    publisher: Publisher.TUDelft,
    tag: PublicationTag.ResearchCitation,
    link: {
      url: 'https://repository.tudelft.nl/record/uuid:f26347d8-be90-4099-887d-fd668275ef0e',
    },
  },
  {
    title: 'Interactive Machine Learning Experiments',
    summary: ['My GitHub project trekhleb/machine-learning-experiments has been featured in PyCoder\'s Weekly issue #420.'],
    date: '2020-05-12',
    publisher: Publisher.PyCodersWeekly,
    tag: PublicationTag.Featured,
    link: {
      url: 'https://pycoders.com/issues/420',
    },
  },
  {
    title: 'JavaScript Algorithms and Data Structures',
    summary: ['My GitHub project trekhleb/javascript-algorithms has been featured in Node Weekly newsletter issue #318'],
    date: '2019-12-12',
    publisher: Publisher.NodeWeekly,
    tag: PublicationTag.Featured,
    link: {
      url: 'https://nodeweekly.com/issues/318',
    },
  },
  {
    title: 'Over 150 algorithms and data structures demonstrated in JavaScript',
    summary: ['My GitHub project trekhleb/javascript-algorithms has been featured in Node Weekly newsletter issue #603 ("Available in eighteen written languages")'],
    date: '2025-12-02',
    publisher: Publisher.NodeWeekly,
    tag: PublicationTag.Featured,
    link: {
      url: 'https://nodeweekly.com/issues/603',
    },
  },
  {
    title: 'Homemade Machine Learning (github.com/trekhleb)',
    summary: ['Published on Hacker News frontpage. The link leads to the Hacker News archive for that day where the mention can be found.'],
    date: '2019-11-02',
    publisher: Publisher.HackerNews,
    tag: PublicationTag.Featured,
    link: {
      url: 'https://news.ycombinator.com/front?day=2019-11-02',
    },
  },
  {
    title: 'Hands-On Artificial Intelligence for Cybersecurity',
    summary: ['The book by Alessandro Parisi published by Packt that cites my GitHub project trekhleb/homemade-machine-learning.'],
    date: '2019-08-02',
    publisher: Publisher.Packt,
    tag: PublicationTag.BookCitation,
    link: {
      url: 'https://books.google.com/books?id=7GOnDwAAQBAJ',
    },
  },
  {
    title: 'Here Are the Most Common JavaScript Algorithms and Data Structures',
    summary: ['The Better Programming article walking through the most common JavaScript algorithms and data structures, based on my GitHub project trekhleb/javascript-algorithms.'],
    date: '2019-07-10',
    publisher: Publisher.BetterProgramming,
    tag: PublicationTag.Coverage,
    link: {
      url: 'https://medium.com/better-programming/here-are-the-most-common-javascript-algorithms-and-data-structures-ec3729050169',
    },
  },
  {
    title: 'Homemade Machine Learning',
    summary: ['My GitHub project trekhleb/homemade-machine-learning has been featured in PyCoder\'s Weekly issue #349.'],
    date: '2019-01-01',
    publisher: Publisher.PyCodersWeekly,
    tag: PublicationTag.Featured,
    link: {
      url: 'https://pycoders.com/issues/349',
    },
  },
  {
    title: 'learn-python: Playground and cheatsheet for learning Python',
    summary: ['My GitHub project trekhleb/learn-python has been featured in PyCoder\'s Weekly issue #332 (Projects section).'],
    date: '2018-09-04',
    publisher: Publisher.PyCodersWeekly,
    tag: PublicationTag.Featured,
    link: {
      url: 'https://pycoders.com/issues/332',
    },
  },
  {
    title: 'Algoritmos e estrutura de dados clássicos em JavaScript',
    summary: ['A dedicated iMasters article by Diego Pinho (in Portuguese) about my GitHub project trekhleb/javascript-algorithms.'],
    date: '2018-11-23',
    publisher: Publisher.IMasters,
    tag: PublicationTag.Coverage,
    link: {
      url: 'https://imasters.com.br/desenvolvimento/algoritmos-e-estrutura-de-dados-classicos-em-javascript',
    },
  },
];
