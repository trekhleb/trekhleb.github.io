// @flow
import type { ProjectType } from '../types/ProjectType';

export const projects: ProjectType[] = [
  {
    name: '📖 👆🏻 Printed Links Detector',
    url: 'https://trekhleb.github.io/links-detector/',
    startDate: new Date('01/12/2020'),
    endDate: new Date('01/10/2020'),
    description: [
      'Links Detector makes printed links clickable via your smartphone camera. No need to type a link in, just scan and click on it.',
    ],
    tags: [
      { name: 'TensorFlow' },
      { name: 'Tesseract' },
      { name: 'Python' },
      { name: 'TypeScript' },
      { name: 'React' },
    ],
  },
  {
    name: '🤖 Interactive Machine Learning Experiments',
    url: 'https://github.com/trekhleb/machine-learning-experiments',
    startDate: new Date('01/01/2020'),
    endDate: new Date('01/05/2020'),
    description: [
      'This is a collection of interactive machine-learning experiments. Each experiment consists of Jupyter/Colab notebook (to see how a model was trained) and demo page (to see a model in action right in your browser).',
    ],
    tags: [
      { name: 'TensorFlow' },
      { name: 'Python' },
      { name: 'JavaScript' },
      { name: 'React' },
    ],
  },
  {
    name: '📈 Coronavirus (COVID-19) Dashboard',
    url: 'https://trekhleb.github.io/covid-19/',
    startDate: new Date('01/03/2020'),
    description: [
      'Coronavirus (COVID-19) dashboard to show the dynamics of Coronavirus distribution per country',
    ],
    tags: [
      { name: 'React' },
    ],
  },
  {
    name: '🤖 NanoNeuron',
    url: 'https://github.com/trekhleb/nano-neuron',
    startDate: new Date('01/12/2019'),
    description: [
      'NanoNeuron is 7 simple JavaScript functions that will give you a feeling of how machines can actually "learn".',
    ],
    tags: [
      { name: 'JavaScript' },
    ],
  },
  {
    name: '🌍 usePosition: React hook for fetching and following a browser geolocation',
    url: 'https://github.com/trekhleb/use-position',
    startDate: new Date('01/01/2019'),
    description: [
      'React hook usePosition() allows you to fetch client\'s browser geolocation and/or subscribe to all further geolocation changes.',
    ],
    tags: [
      { name: 'JavaScript' },
      { name: 'React' },
    ],
  },
  {
    name: '🤖 Homemade Machine Learning',
    url: 'https://github.com/trekhleb/homemade-machine-learning',
    startDate: new Date('01/12/2018'),
    description: [
      'The project contains examples of popular machine learning algorithms implemented in Python with mathematics behind them being explained. Each algorithm has interactive Jupyter Notebook demo that allows you to play with training data, algorithms configurations and immediately see the results, charts and predictions right in your browser.',
      'This 13k+ ★️ project has been counted as "The most trending repository of the day" on GitHub as for December 27th, 2018',
    ],
    tags: [
      { name: 'Python' },
      { name: 'Jupyter Notebook' },
    ],
  },
  {
    name: '📝 JavaScript Algorithms and Data-Structures',
    url: 'https://github.com/trekhleb/javascript-algorithms',
    startDate: new Date('01/02/2018'),
    endDate: new Date('01/10/2018'),
    description: [
      'I\'ve created open-source repository with ES6 based JavaScript examples of classic data-structures and algorithms for learning purpose. Each data-structure and algorithm has its own README description. All code is 100% covered with unit-tests. Repository also contains simple playground where users may practice/test different data-structures and algorithmic approaches. It also has a link on YouTube playlist with all data-structures and algorithms related videos being gathered in one place.',
      'This 70k+ ★️ project was "The most trending repository of the week" on GitHub (as for May 25th, 2018) and "The most trending repository of the month" (as for June 15th, 2018) with the peak of 5000 stars per day!',
      'The project has been counted as a 2nd among “Top 10 projects open sourced in 2018” based on the stars number during their first 28 days after the launch by @github (https://blog.github.com/2018-12-13-new-open-source-projects/)',
    ],
    tags: [
      { name: 'JavaScript' },
      { name: 'Jest' },
    ],
  },
  {
    name: '🤖 Machine Learning in MatLab/Octave',
    url: 'https://github.com/trekhleb/machine-learning-octave',
    startDate: new Date('01/10/2018'),
    description: [
      'Examples of popular machine learning algorithms (neural networks, linear/logistic regression, K-Means, etc.) with code examples and mathematics being explained.',
    ],
    tags: [
      { name: 'MatLab' },
      { name: 'Octave' },
    ],
  },
  {
    name: '📚 Playground and cheatsheet for learning Python',
    url: 'https://github.com/trekhleb/learn-python',
    startDate: new Date('01/08/2018'),
    description: [
      'Collection of Python scripts that are split by topics and contain code examples with explanations, different use cases and links to further readings.',
      'This 3K+ stars repository was "The most trending Python repository of the day" on GitHub (August 31st, 2018)',
    ],
    tags: [
      { name: 'Python' },
    ],
  },
  {
    name: '➡️ Aggregatus | Data Aggregation Service',
    url: 'https://aggregatus.io/',
    startDate: new Date('01/01/2017'),
    endDate: new Date('01/01/2018'),
    archived: true,
    description: [
      'Aggregatus is a service that helps you to aggregate information of the same meaning but from the different websites and make it searchable, filterable and sortable as if it all was from the one website.',
      'I\'ve launched this project in free of main job time to fill possible gap in aggregation SaaS tools and also to learn new technologies.',
    ],
    tags: [
      { name: 'Nginx' },
      { name: 'React' },
      { name: 'Lumen' },
      { name: 'MySQL' },
      { name: 'Elasticsearch' },
      { name: 'Scrapy' },
      { name: 'Splash' },
      { name: 'Docker Swarm' },
    ],
  },
  {
    name: '🌾 Angular-library-seed',
    url: 'https://github.com/trekhleb/angular-library-seed',
    startDate: new Date('01/01/2017'),
    endDate: new Date('01/01/2018'),
    description: [
      'Seed project for Angular libraries that are AOT/JIT compatible and that use external SCSS-styles and HTML-templates. Project contains reusable environment for the libraries that allows to build, test, lint, document, explore and publish them.',
      'I\'ve launched this open-source project since I was trying to create Angular library (Elasticsearch client dashboard) and I found out that there was a lack of appropriate documentation and examples in this area.',
    ],
    tags: [
      { name: 'TypeScript' },
      { name: 'WebPack' },
      { name: 'Angular 4' },
      { name: 'Node.js' },
    ],
  },
  {
    name: '📕 AllBible.info',
    url: 'http://allbible.info/',
    startDate: new Date('01/02/2010'),
    endDate: new Date('01/02/2017'),
    description: [
      'Online Bible study web-service that gives users possibility to study Bible by reading it in 4 modern translations, comparing verses to theirs Greek and Hebrew originals, investigating cross-linked verses, making a cross-Bible search, listening to audio Bible, using different Bible study plans (chronological, topical and so on), exploring Bible geographic maps and using a lot more other features.',
      'I was created this project after I realized that different Bible study methods are exists here and there but at that moment there were no consolidated web-service that would give users to use all of that study methods in one place.',
      'Project has 100K+ users monthly.',
    ],
    tags: [
      { name: 'JavaScript' },
      { name: 'PHP' },
      { name: 'MySQL' },
    ],
  },
  {
    name: '🧶 Hook&Thread',
    url: 'http://hook-and-thread.com/',
    startDate: new Date('01/11/2016'),
    archived: true,
    description: [
      'Hook&Thread is web-shop of knitted accessories.',
      'We\'ve launched this project with my wife to get an online selling platform for knitted accessories she was producing at that time.',
    ],
    tags: [
      { name: 'Wordpress' },
      { name: 'WooCommerce' },
    ],
  },
  {
    name: '🕸 SiteProm Web Studio',
    url: 'http://site-prom.com/',
    startDate: new Date('01/01/2008'),
    endDate: new Date('01/12/2011'),
    archived: true,
    description: [
      'We with my friend has founded a web-studio that was specialized of providing a full-support during web-site creations starting from understanding customer requirements and ending with web-site promotion. We\'ve been working mostly with Ukrainian market. Among our clients: "KIA-Motors Ukraine", "Andre TAN", "КОСМО", "Ичня", "Химлаборрекатив", "ЛабЭксперт" and others.',
    ],
    tags: [
      { name: 'PHP' },
      { name: 'MySQL' },
      { name: 'JavaScript' },
    ],
  },
];
