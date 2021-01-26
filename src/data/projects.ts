import { Project } from '../types/Project';

export const projects: Project[] = [
  {
    name: '📖 👆🏻 Printed Links Detector',
    srcURL: { url: 'https://github.com/trekhleb/links-detector' },
    demoURL: { url: 'https://trekhleb.dev/links-detector/' },
    cover: { srcPath: 'projects/links-detector/cover.png' },
    startDate: '2020-10-01',
    endDate: '2020-12-01',
    summary: [
      'Links Detector makes printed links clickable via your smartphone camera. No need to type a link in, just scan and click on it.',
    ],
    description: [
      'Links Detector makes printed links clickable via your smartphone camera. No need to type a link in, just scan and click on it.',
    ],
    tags: [
      { name: 'ML' },
      { name: 'AI' },
      { name: 'Machine Learning' },
      { name: 'TensorFlow' },
      { name: 'Tesseract' },
      { name: 'Python' },
      { name: 'TypeScript' },
      { name: 'React' },
      { name: 'OCR' },
      { name: 'Computer Vision' },
      { name: 'Object Detection' },
    ],
  },
  {
    name: '🤖 Interactive Machine Learning Experiments',
    srcURL: { url: 'https://github.com/trekhleb/machine-learning-experiments' },
    demoURL: { url: 'https://trekhleb.dev/machine-learning-experiments/' },
    cover: { srcPath: 'projects/machine-learning-experiments/cover.png' },
    startDate: '2020-01-01',
    endDate: '2020-05-01',
    summary: [
      'Interactive Machine Learning experiments: models training + models demo',
    ],
    description: [
      'This is a collection of interactive machine-learning experiments. Each experiment consists of Jupyter/Colab notebook (to see how a model was trained) and demo page (to see a model in action right in your browser).',
    ],
    tags: [
      { name: 'ML' },
      { name: 'AI' },
      { name: 'Machine Learning' },
      { name: 'TensorFlow' },
      { name: 'Python' },
      { name: 'JavaScript' },
      { name: 'React' },
    ],
  },
  {
    name: '📈 Coronavirus (COVID-19) Dashboard',
    srcURL: { url: 'https://github.com/trekhleb/covid-19/' },
    demoURL: { url: 'https://trekhleb.dev/covid-19/' },
    cover: { srcPath: 'projects/covid-dashboard/cover.png' },
    startDate: '2020-03-01',
    endDate: '2020-04-01',
    summary: [
      'Coronavirus (COVID-19) dashboard to show the dynamics of Сoronavirus distribution per country',
    ],
    description: [
      'Coronavirus (COVID-19) dashboard to show the dynamics of Coronavirus distribution per country',
    ],
    tags: [
      { name: 'COVID-19' },
      { name: 'React' },
    ],
  },
  {
    name: '🤖 NanoNeuron',
    srcURL: { url: 'https://github.com/trekhleb/nano-neuron' },
    cover: { srcPath: 'projects/nano-neuron/cover.png' },
    startDate: '2019-12-01',
    endDate: '2020-01-01',
    summary: [
      'NanoNeuron is 7 simple JavaScript functions that will give you a feeling of how machines can actually "learn".',
    ],
    description: [
      'NanoNeuron is 7 simple JavaScript functions that will give you a feeling of how machines can actually "learn".',
    ],
    tags: [
      { name: 'AI' },
      { name: 'ML' },
      { name: 'Machine Learning' },
      { name: 'JavaScript' },
      { name: 'Algorithms' },
    ],
  },
  {
    name: '🌍 usePosition: React hook for fetching and following a browser geolocation',
    srcURL: { url: 'https://github.com/trekhleb/use-position' },
    demoURL: { url: 'https://trekhleb.dev/use-position' },
    cover: { srcPath: 'projects/use-position/cover.png' },
    startDate: '2019-01-01',
    endDate: '2019-02-01',
    summary: [
      'React hook usePosition() for fetching and following a browser geolocation',
    ],
    description: [
      'React hook usePosition() allows you to fetch client\'s browser geolocation and/or subscribe to all further geolocation changes.',
    ],
    tags: [
      { name: 'JavaScript' },
      { name: 'React' },
      { name: 'Geolocation' },
      { name: 'React Hooks' },
    ],
  },
  {
    name: '📘 JavaScript Algorithms Book',
    demoURL: { url: 'https://www.newline.co/javascript-algorithms' },
    cover: { srcPath: 'projects/javascript-algorithms-book/cover-1.png' },
    startDate: '2018-09-01',
    endDate: '2019-09-01',
    summary: [
      'The book about basic algorithms and datastructures implemented in JavaScript',
    ],
    description: [
      'Pass your algorithms interview with confidence by learning data structures and algorithms in JavaScript. We\'ve been working on this JavaScript Algorithms book for a long time. The book should help engineers to better prepare for tech interviews.',
    ],
    tags: [
      { name: 'JavaScript' },
      { name: 'Algorithms' },
      { name: 'Book' },
    ],
  },
  {
    name: '🤖 Homemade Machine Learning',
    srcURL: { url: 'https://github.com/trekhleb/homemade-machine-learning' },
    startDate: '2018-12-01',
    endDate: '2019-01-01',
    cover: { srcPath: 'projects/homemade-machine-learning/cover.png' },
    summary: [
      'Python examples of popular machine learning algorithms with interactive Jupyter demos and math being explained',
    ],
    description: [
      'The project contains examples of popular machine learning algorithms implemented in Python with the mathematics behind them is explained. Each algorithm has an interactive Jupyter Notebook demo that allows you to play with training data, algorithms configurations and immediately see the results, charts, and predictions right in your browser.',
      'This 13K+ stars project has been counted as "The most trending repository of the day" on GitHub as of December 27th, 2018.',
    ],
    tags: [
      { name: 'AI' },
      { name: 'ML' },
      { name: 'Machine Learning' },
      { name: 'Algorithms' },
      { name: 'Python' },
      { name: 'Jupyter Notebook' },
    ],
  },
  {
    name: '📝 JavaScript Algorithms and Data-Structures',
    srcURL: { url: 'https://github.com/trekhleb/javascript-algorithms' },
    startDate: '2018-02-01',
    cover: { srcPath: 'projects/javascript-algorithms/cover.png' },
    summary: [
      'Algorithms and data structures implemented in JavaScript with explanations and links to further readings',
    ],
    description: [
      'I\'ve created an open-source repository with ES6 based JavaScript examples of classic data structures and algorithms for learning purposes. Each data-structure and algorithm has its own README description. All code is 100% covered with unit-tests. The repository also contains a simple playground where users may practice/test different data-structures and algorithmic approaches. It also has a link on the YouTube playlist with all data-structures and algorithms related videos being gathered in one place.',
      'This 90k ★️ project was "The most trending repository of the week" on GitHub (as of May 25th, 2018) and "The most trending repository of the month" (as of June 15th, 2018) with a peak of 5000 stars per day!',
      'The project has been counted as a 2nd among “Top 10 projects open-sourced in 2018” based on the number of the stars during their first 28 days after the launch by @github (https://blog.github.com/2018-12-13-new-open-source-projects/)',
    ],
    tags: [
      { name: 'JavaScript' },
      { name: 'Jest' },
      { name: 'Algorithms' },
      { name: 'Data Structures' },
    ],
  },
  {
    name: '🤖 Machine Learning in MatLab/Octave',
    srcURL: { url: 'https://github.com/trekhleb/machine-learning-octave' },
    startDate: '2018-10-01',
    endDate: '2018-11-01',
    cover: { srcPath: 'projects/machine-learning-octave/cover.png' },
    summary: [
      'MatLab/Octave examples of popular machine learning algorithms with code examples and mathematics being explained',
    ],
    description: [
      'Examples of popular machine learning algorithms (neural networks, linear/logistic regression, K-Means, etc.) with code examples and mathematics being explained.',
    ],
    tags: [
      { name: 'AI' },
      { name: 'ML' },
      { name: 'Machine Learning' },
      { name: 'MatLab' },
      { name: 'Octave' },
    ],
  },
  {
    name: '📚 Playground and cheatsheet for learning Python',
    srcURL: { url: 'https://github.com/trekhleb/learn-python' },
    startDate: '2018-08-01',
    endDate: '2018-09-01',
    cover: { srcPath: 'projects/learn-python/cover-2.jpg' },
    summary: [
      'Playground and cheatsheet for learning Python. Collection of Python scripts that are split by topics and contain code examples with explanations',
    ],
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
    demoURL: { url: 'https://aggregatus.io/' },
    startDate: '2017-01-01',
    endDate: '2018-01-01',
    archived: true,
    cover: { srcPath: 'projects/aggregatus/cover-1.png' },
    summary: [
      'Service that helps you to aggregate information of the same meaning but from the different websites and make it searchable, filterable and sortable as if it all was from the one website',
    ],
    description: [
      'Aggregatus is a service that helps you to aggregate information of the same meaning but from different websites and make it searchable, filterable, and sortable as if it all was from the one website.',
      'I\'ve launched this project in my spare time to fill the possible gaps in aggregation SaaS tools and also to learn new technologies.',
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
    srcURL: { url: 'https://github.com/trekhleb/angular-library-seed' },
    cover: { srcPath: 'projects/angular-library-seed/cover.png' },
    startDate: '2017-01-01',
    endDate: '2018-01-01',
    summary: [
      'Seed project for Angular libraries that are AOT/JIT compatible and that use external SCSS-styles and HTML-templates',
    ],
    description: [
      'Seed project for Angular libraries that are AOT/JIT compatible and that use external SCSS-styles and HTML-templates. The project contains a reusable environment for the libraries that allows to build, test, lint, document, explore, and publish them.',
      'I\'ve launched this open-source project since I was trying to create Angular library (Elasticsearch client dashboard) and I found out that there was a lack of appropriate documentation and examples in this area.',
    ],
    tags: [
      { name: 'TypeScript' },
      { name: 'WebPack' },
      { name: 'Angular' },
    ],
  },
  {
    name: '📕 AllBible.info',
    srcURL: { url: 'http://allbible.info/' },
    startDate: '2010-02-01',
    endDate: '2017-02-01',
    cover: { srcPath: 'projects/allbible/cover.png' },
    summary: [
      'Online Bible study web-service that gives users possibility to study Bible by reading it in 4 modern translations, comparing verses to theirs Greek and Hebrew originals, investigating cross-linked verses, making a cross-Bible search, listening to audio Bible, using different Bible study plans and more',
    ],
    description: [
      'Online Bible study web-service that gives users possibility to study Bible by reading it in 4 modern translations, comparing verses to theirs Greek and Hebrew originals, investigating cross-linked verses, making a cross-Bible search, listening to audio Bible, using different Bible study plans (chronological, topical and so on), exploring Bible geographic maps and using a lot more other features.',
      'I have created this project after I realized that different Bible study methods exist here and there but at that moment there was no consolidated web-service that would give users to use all of those study methods in one place.',
      'Project has 100K+ users monthly.',
    ],
    tags: [
      { name: 'JavaScript' },
      { name: 'PHP' },
      { name: 'MySQL' },
      { name: 'Bible' },
    ],
  },
  {
    name: '🧶 Hook&Thread',
    demoURL: { url: 'http://hook-and-thread.com/' },
    cover: { srcPath: 'projects/hook-and-thread/cover-2.png' },
    startDate: '2016-11-01',
    endDate: '2016-12-01',
    archived: true,
    summary: [
      'Web-shop of knitted accessories.',
      'We\'ve launched this project with my wife to get an online selling platform for knitted accessories she was producing at that time.',
      'The project was running on WordPress with the great support of the WooCommerce module.',
    ],
    description: [
      'Hook&Thread is a web-shop of knitted accessories.',
      'We\'ve launched this project with my wife to get an online selling platform for knitted accessories she was producing at that time.',
    ],
    tags: [
      { name: 'Wordpress' },
      { name: 'WooCommerce' },
    ],
  },
  {
    name: '🕸 SiteProm Web Studio',
    demoURL: { url: 'http://site-prom.com/' },
    cover: { srcPath: 'projects/siteprom/cover-1.png' },
    startDate: '2008-01-01',
    endDate: '2011-12-01',
    archived: true,
    summary: [
      'The web-studio that was created by my friend and I where we were specialized on providing a full-support during website creation',
    ],
    description: [
      'My friend and I created a web-studio that was specialized on providing a full-support during website creation starting from understanding customer requirements and ending with web-site promotion. We\'ve been working mostly with the Ukrainian market. Among our clients: "KIA-Motors Ukraine", "Andre TAN", "КОСМО", "Ичня", "Химлаборрекатив", "ЛабЭксперт" and others.',
    ],
    tags: [
      { name: 'PHP' },
      { name: 'MySQL' },
      { name: 'JavaScript' },
    ],
  },
];
