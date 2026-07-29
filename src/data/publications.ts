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
    summary: ['My GitHub project trekhleb/javascript-algorithms is mentioned as an implementation example in the MDN Web Docs article.'],
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
    summary: ['Pass your algorithms interview with confidence by learning data structures and algorithms in JavaScript. The book should help engineers to better prepare for tech interviews.'],
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
    summary: ['In this article I’m trying to explain the difference/similarities between dynamic programming and divide and conquer approaches based on two examples: binary search and minimum edit distance (Levenshtein distance).'],
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
    summary: ['A peer-reviewed paper from the IEEE Working Conference on Software Visualization (VISSOFT 2022) that uses algorithms from my GitHub project trekhleb/javascript-algorithms as its analysis examples.'],
    date: '2022-10-03',
    publisher: Publisher.IEEE,
    tag: PublicationTag.ResearchCitation,
    link: {
      // Also here: https://domiii.github.io/dbux/pdg
      url: 'https://ieeexplore.ieee.org/document/9978351',
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
