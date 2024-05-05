import { Projects } from '../types/Project';

export const projects: Projects = {
  'micrograd-ts': {
    id: 'micrograd-ts',
    name: '🤖 Micrograd TS',
    srcURL: { url: 'https://github.com/trekhleb/micrograd-ts' },
    demoURL: { url: 'https://trekhleb.dev/micrograd-ts' },
    cover: { srcPath: 'projects/micrograd-ts/04-cover.png' },
    startDate: '2023-08-06',
    summary: [
      'A tiny scalar-valued autograd engine and a neural net on top of it. A TypeScript version of the karpathy/micrograd repo.',
    ],
    tags: [
      { name: 'AI' },
      { name: 'ML' },
      { name: 'Machine Learning' },
      { name: 'TypeScript' },
    ],
    gitHubRepo: {
      owner: 'trekhleb',
      repo: 'micrograd-ts',
    },
    achievements: [],
  },
  observations: {
    id: 'observations',
    name: '👁️ Observations',
    demoURL: { url: '/blog/2023/observations/' },
    cover: { srcPath: 'projects/observations/05-cover.png' },
    startDate: '2023-06-01',
    summary: [
      'Subjective graph of observations, assumptions, questions, and interpretations',
    ],
    tags: [
      { name: 'Observations' },
      { name: 'Thoughts' },
    ],
    achievements: [],
  },
  okso: {
    id: 'okso',
    name: '✍🏻 Ok! So...',
    demoURL: { url: 'https://okso.app/' },
    cover: { srcPath: 'projects/okso/cover-00.jpeg' },
    startDate: '2022-07-20',
    summary: [
      'Drawing app to express, grasp, and organize your thoughts and ideas. Draw to explain. Draw to grasp.',
    ],
    tags: [
      { name: 'Drawing' },
      { name: 'Sketching' },
      { name: 'Whiteboard' },
    ],
    achievements: [
      {
        title: 'Top Hot post on r/coding sub-reddit',
        image: { srcPath: 'projects/okso/achievements/00-reddit-coding-hot-2022-08-31.png' },
        link: { url: 'https://www.reddit.com/r/coding/comments/x1imp0/data_structure_sketches/', caption: 'The post on Reddit' },
        date: '2022-08-31',
      },
      {
        title: 'Top Hot post on r/coding sub-reddit',
        image: { srcPath: 'projects/okso/achievements/01-reddit-coding-hot-2022-10-05.png' },
        link: { url: 'https://www.reddit.com/r/coding/comments/xvujvl/solid_principles_sketches/', caption: 'The post on Reddit' },
        date: '2022-10-05',
      },
      {
        title: 'Top Hot post on r/InternetIsBeautiful sub-reddit',
        image: { srcPath: 'projects/okso/achievements/02-reddit-internetisbeautiful-hot-2022-10-05.png' },
        link: { url: 'https://www.reddit.com/r/InternetIsBeautiful/comments/xvum4n/interactive_sketches_to_illustrate_solid/', caption: 'The post on Reddit' },
        date: '2022-10-05',
      },
      {
        title: 'Listed on Hacker News',
        image: { srcPath: 'projects/okso/achievements/03-hacker-news-2022-10-09.png' },
        date: '2022-10-09',
        link: { url: 'https://news.ycombinator.com/front?day=2022-10-09', caption: 'Hacker News archive' },
      },
      {
        title: 'Mentioned in the TechCrunch article',
        image: { srcPath: 'projects/okso/achievements/04-techcrunch-2022-12-16.png' },
        date: '2022-12-16',
        link: { url: 'https://techcrunch.com/2022/12/16/tldraw-offers-a-collaborative-whiteboard-without-any-login/', caption: 'TechCrunch article' },
      },
    ],
  },
  'self-parking-car-evolution': {
    id: 'self-parking-car-evolution',
    name: '🧬 Self-Parking Car Evolution',
    srcURL: { url: 'https://github.com/trekhleb/self-parking-car-evolution' },
    demoURL: { url: 'https://trekhleb.dev/self-parking-car-evolution' },
    cover: { srcPath: 'projects/self-parking-car-evolution/cover-00.jpg' },
    startDate: '2021-05-13',
    endDate: '2021-09-15',
    summary: [
      'Training the car to do self-parking using a genetic algorithm',
    ],
    tags: [
      { name: 'Genetic' },
      { name: 'Algorithms' },
      { name: 'Three.js' },
      { name: 'Cannon.js' },
      { name: 'TypeScript' },
    ],
    gitHubRepo: {
      owner: 'trekhleb',
      repo: 'self-parking-car-evolution',
    },
    achievements: [
      {
        title: 'Listed on Hacker News',
        image: { srcPath: 'projects/self-parking-car-evolution/achievements/00-hacker-news-2021-09-28.png' },
        date: '2021-09-28',
        link: { url: 'https://news.ycombinator.com/front?day=2021-09-28', caption: 'Hacker News archive' },
      },
      {
        title: 'Javascript SubReddit: Top 3 of the hot list',
        image: { srcPath: 'projects/self-parking-car-evolution/achievements/01-reddit-javascript-hot-list-2021-09-29.png' },
        date: '2021-09-29',
        link: { url: 'https://www.reddit.com/r/javascript/comments/px71z7/selfparking_car_in_500_lines_of_code_trekhleb/', caption: 'Reddit post' },
      },
      {
        title: 'Listed in JavaScript Weekly',
        image: { srcPath: 'projects/self-parking-car-evolution/achievements/04-javascript-weekly-newsletter-2021-10-01.png' },
        date: '2021-10-01',
        link: { url: 'https://javascriptweekly.com/issues/558', caption: 'JavaScript Weekly Newsletter' },
      },
    ],
  },
  'js-image-carver': {
    id: 'js-image-carver',
    name: '🌅 JS Image Carver',
    srcURL: { url: 'https://github.com/trekhleb/js-image-carver' },
    demoURL: { url: 'https://trekhleb.dev/js-image-carver' },
    cover: { srcPath: 'projects/js-image-carver/cover.png' },
    startDate: '2021-04-01',
    endDate: '2021-04-30',
    summary: [
      'Content-aware image resizer based on Seam Carving algorithm. Also performs objects removal',
    ],
    tags: [
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'Algorithms' },
      { name: 'Seam Carving' },
      { name: 'Image Processing' },
    ],
    gitHubRepo: {
      owner: 'trekhleb',
      repo: 'js-image-carver',
    },
    achievements: [
      {
        title: 'Listed on Hacker News front page',
        image: { srcPath: 'projects/js-image-carver/achievements/00-hacker-news-2021-04-16.png' },
        date: '2021-04-16',
        link: { url: 'https://news.ycombinator.com/front?day=2021-04-16', caption: 'Hacker News archive' },
      },
      {
        title: '#3 product of the day on Product Hunt',
        image: { srcPath: 'projects/js-image-carver/achievements/01-product-hunt-third-product-of-the-day-2021-04-19.png' },
        date: '2021-04-19',
        link: { url: 'https://www.producthunt.com/posts/js-image-carver', caption: 'Product page' },
      },
    ],
  },
  'trekhleb-dev': {
    id: 'trekhleb-dev',
    name: '🧬 Trekhleb.dev',
    srcURL: { url: 'https://github.com/trekhleb/trekhleb.github.io' },
    demoURL: { url: 'https://trekhleb.dev' },
    cover: { srcPath: 'projects/trekhleb-dev/cover.png' },
    startDate: '2020-12-30',
    summary: [
      'My personal website with a list of my projects that help people learn and blog posts about life, web-development, and machine-learning',
    ],
    tags: [
      { name: 'Gatsby' },
      { name: 'TypeScript' },
      { name: 'Blog' },
    ],
    gitHubRepo: {
      owner: 'trekhleb',
      repo: 'trekhleb.github.io',
    },
    achievements: [
      {
        title: 'Listed on Hacker News front page',
        image: { srcPath: 'projects/trekhleb-dev/achievements/00-hacker-news-2021-04-25.jpg' },
        date: '2021-04-25',
        link: { url: 'https://news.ycombinator.com/front?day=2021-04-25', caption: 'Hacker News archive' },
      },
      {
        title: 'Listed on Hacker News front page',
        image: { srcPath: 'projects/trekhleb-dev/achievements/00-hacker-news-2021-04-16.png' },
        date: '2021-04-16',
        link: { url: 'https://news.ycombinator.com/front?day=2021-04-16', caption: 'Hacker News archive' },
      },
      {
        title: 'Listed on Hacker News front page',
        image: { srcPath: 'projects/trekhleb-dev/achievements/00-hacker-news-2021-03-07.png' },
        date: '2021-03-07',
        link: { url: 'https://news.ycombinator.com/item?id=26327532', caption: 'HN Post' },
      },
      {
        title: 'Listed on Hacker News front page',
        image: { srcPath: 'projects/trekhleb-dev/achievements/01-hacker-news-2021-10-09.jpg' },
        date: '2021-10-09',
        link: { url: 'https://news.ycombinator.com/front?day=2021-10-09', caption: 'Hacker News archive' },
      },
    ],
  },
  'links-detector': {
    id: 'links-detector',
    name: '📖 👆🏻 Printed Links Detector',
    srcURL: { url: 'https://github.com/trekhleb/links-detector' },
    demoURL: { url: 'https://trekhleb.dev/links-detector/' },
    cover: { srcPath: 'projects/links-detector/cover.png' },
    startDate: '2020-10-01',
    endDate: '2020-12-01',
    summary: [
      'Links Detector makes printed links clickable via your smartphone camera. No need to type a link in, just scan and click on it',
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
    gitHubRepo: {
      owner: 'trekhleb',
      repo: 'links-detector',
    },
  },
  'machine-learning-experiments': {
    id: 'machine-learning-experiments',
    name: '🤖 Interactive Machine Learning Experiments',
    srcURL: { url: 'https://github.com/trekhleb/machine-learning-experiments' },
    demoURL: { url: 'https://trekhleb.dev/machine-learning-experiments/' },
    cover: { srcPath: 'projects/machine-learning-experiments/cover.png' },
    startDate: '2020-01-01',
    endDate: '2020-05-01',
    summary: [
      'Interactive Machine Learning experiments: models training + models demo',
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
    gitHubRepo: {
      owner: 'trekhleb',
      repo: 'machine-learning-experiments',
    },
    achievements: [
      {
        title: 'Listed on Hacker News 2nd page',
        image: { srcPath: 'projects/machine-learning-experiments/achievements/00-hacker-news-2nd-2020-06-22.png' },
        date: '2020-06-22',
        link: { url: 'https://news.ycombinator.com/front?day=2020-06-22&p=2', caption: 'Hacker News archive' },
      },
      {
        title: 'Featured on Towards Data Science frontpage',
        image: { srcPath: 'projects/machine-learning-experiments/achievements/01-towards-data-science-front-2020-06-20.png' },
        date: '2020-06-20',
        link: {
          url: 'https://towardsdatascience.com/generating-cooking-recipes-using-tensorflow-and-lstm-recurrent-neural-network-a7bf242acad3',
          caption: 'Publication',
        },
      },
      {
        title: 'Most shared article of the week on KDnuggets',
        image: { srcPath: 'projects/machine-learning-experiments/achievements/02-kdnuggets-most-shared-2020-06-01.png' },
        date: '2020-06-01',
        link: {
          url: 'https://www.kdnuggets.com/2020/05/interactive-machine-learning-experiments.html',
          caption: 'Publication',
        },
      },
    ],
  },
  'state-of-the-art-shitcode': {
    id: 'state-of-the-art-shitcode',
    name: '💩 State-of-the-Art Shitcode Principles',
    srcURL: { url: 'https://github.com/trekhleb/state-of-the-art-shitcode' },
    cover: { srcPath: 'projects/state-of-the-art-shitcode/cover.png' },
    startDate: '2020-02-28',
    summary: [
      'Curated list of state-of-the-art shitcode principles your project should follow to call it a proper shitcode',
    ],
    tags: [
      { name: 'JavaScript' },
      { name: 'StyleGuide' },
      { name: 'Coding' },
      { name: 'BestPractices' },
    ],
    gitHubRepo: {
      owner: 'trekhleb',
      repo: 'state-of-the-art-shitcode',
    },
  },
  'covid-dashboard': {
    id: 'covid-dashboard',
    name: '📈 Coronavirus (COVID-19) Dashboard',
    srcURL: { url: 'https://github.com/trekhleb/covid-19/' },
    demoURL: { url: 'https://trekhleb.dev/covid-19/' },
    cover: { srcPath: 'projects/covid-dashboard/cover.png' },
    startDate: '2020-03-01',
    endDate: '2020-04-01',
    summary: [
      'Coronavirus (COVID-19) dashboard to show the dynamics of Сoronavirus distribution per country',
    ],
    tags: [
      { name: 'COVID-19' },
      { name: 'React' },
    ],
    gitHubRepo: {
      owner: 'trekhleb',
      repo: 'covid-19',
    },
  },
  'nano-neuron': {
    id: 'nano-neuron',
    name: '🤖 NanoNeuron',
    srcURL: { url: 'https://github.com/trekhleb/nano-neuron' },
    cover: { srcPath: 'projects/nano-neuron/cover.png' },
    startDate: '2019-12-01',
    endDate: '2020-01-01',
    summary: [
      'NanoNeuron is 7 simple JavaScript functions that will give you a feeling of how machines can actually "learn".',
    ],
    tags: [
      { name: 'AI' },
      { name: 'ML' },
      { name: 'Machine Learning' },
      { name: 'JavaScript' },
      { name: 'Algorithms' },
    ],
    gitHubRepo: {
      owner: 'trekhleb',
      repo: 'nano-neuron',
    },
    achievements: [
      {
        title: 'Listed on Hacker News front page',
        image: { srcPath: 'projects/nano-neuron/achievements/00-hacker-news-2019-12-06.png' },
        date: '2019-12-06',
        link: { url: 'https://news.ycombinator.com/front?day=2019-12-06', caption: 'Hacker News archive' },
      },
      {
        title: 'Listed in the Hot list of JavaScript subreddit',
        image: { srcPath: 'projects/nano-neuron/achievements/01-reddit-javascript-hot-2021-02-14.png' },
        date: '2021-02-14',
        link: {
          url: 'https://www.reddit.com/r/javascript/comments/ljl416/nanoneuron_7_simple_js_functions_that_explain_how/',
          caption: 'Reddit post',
        },
      },
    ],
  },
  'use-position': {
    id: 'use-position',
    name: '🌍 usePosition: React hook for fetching and following a browser geolocation',
    srcURL: { url: 'https://github.com/trekhleb/use-position' },
    demoURL: { url: 'https://trekhleb.dev/use-position' },
    cover: { srcPath: 'projects/use-position/cover.png' },
    startDate: '2019-01-01',
    endDate: '2019-02-01',
    summary: [
      'React hook usePosition() for fetching and following a browser geolocation',
    ],
    tags: [
      { name: 'JavaScript' },
      { name: 'React' },
      { name: 'Geolocation' },
      { name: 'React Hooks' },
    ],
    gitHubRepo: {
      owner: 'trekhleb',
      repo: 'use-position',
    },
    achievements: [
      {
        title: '1000+ weekly installs on NPM',
        image: { srcPath: 'projects/use-position/achievements/01-npm-stats-2021-10-26.png' },
        date: '2021-10-26',
        link: { url: 'https://www.npmjs.com/package/use-position', caption: 'Package page on NPM' },
      },
    ],
  },
  'javascript-algorithms-book': {
    id: 'javascript-algorithms-book',
    name: '📘 JavaScript Algorithms Book',
    demoURL: { url: 'https://www.newline.co/javascript-algorithms' },
    cover: { srcPath: 'projects/javascript-algorithms-book/cover-1.png' },
    startDate: '2018-09-01',
    endDate: '2019-09-01',
    summary: [
      'The book about basic algorithms and datastructures implemented in JavaScript',
    ],
    tags: [
      { name: 'JavaScript' },
      { name: 'Algorithms' },
      { name: 'Book' },
    ],
    achievements: [
      {
        title: 'The book is published on GumRoad',
        image: { srcPath: 'projects/javascript-algorithms-book/achievements/00-published-on-gumroad.png' },
        link: { url: 'https://gumroad.com/l/javascript-algorithms-full', caption: 'The book page' },
      },
      {
        title: 'The book is published on NewLine',
        image: { srcPath: 'projects/javascript-algorithms-book/achievements/01-published-on-newline.png' },
        link: { url: 'https://www.newline.co/javascript-algorithms', caption: 'The book page' },
      },
    ],
  },
  'homemade-machine-learning': {
    id: 'homemade-machine-learning',
    name: '🤖 Homemade Machine Learning',
    srcURL: { url: 'https://github.com/trekhleb/homemade-machine-learning' },
    startDate: '2018-12-01',
    endDate: '2019-01-01',
    cover: { srcPath: 'projects/homemade-machine-learning/cover.png' },
    summary: [
      'Python examples of popular machine learning algorithms with interactive Jupyter demos and math being explained',
    ],
    tags: [
      { name: 'AI' },
      { name: 'ML' },
      { name: 'Machine Learning' },
      { name: 'Algorithms' },
      { name: 'Python' },
      { name: 'Jupyter Notebook' },
    ],
    gitHubRepo: {
      owner: 'trekhleb',
      repo: 'homemade-machine-learning',
    },
    achievements: [
      {
        title: 'Listed on Hacker News front page',
        image: { srcPath: 'projects/homemade-machine-learning/achievements/00-hacker-news-2019-11-02.png' },
      },
      {
        title: 'Listed on GitHub Explore page',
        image: { srcPath: 'projects/homemade-machine-learning/achievements/01-github-explore-2019-11-02.png' },
      },
      {
        title: 'GitHub trending devs of the day',
        image: { srcPath: 'projects/homemade-machine-learning/achievements/02-github-trending-devs-day-2019-11-02.png' },
      },
      {
        title: 'Trending repository of the day on GitHub',
        image: { srcPath: 'projects/homemade-machine-learning/achievements/03-github-trending-repo-day-2019-11-02.png' },
      },
      {
        title: 'Trending repository of the day on GitHub',
        image: { srcPath: 'projects/homemade-machine-learning/achievements/05-github-trending-week-2019-05-09.png' },
        date: '2019-05-09',
      },
      {
        title: 'Trending repository of the week on GitHub',
        image: { srcPath: 'projects/homemade-machine-learning/achievements/06-github-trending-week-2019-11-02.png' },
      },
    ],
  },
  'promote-your-next-startup': {
    id: 'promote-your-next-startup',
    name: '📣 Promote Your Next Startup',
    srcURL: { url: 'https://github.com/trekhleb/promote-your-next-startup' },
    startDate: '2018-06-11',
    cover: { srcPath: 'projects/promote-your-next-startup/cover-01.jpg' },
    summary: [
      'Curated list of the free web-resources you may want to use to promote your next startup',
    ],
    tags: [
      { name: 'Promotion' },
      { name: 'Links' },
      { name: 'Startup' },
    ],
    gitHubRepo: {
      owner: 'trekhleb',
      repo: 'promote-your-next-startup',
    },
    achievements: [
      {
        title: 'Listed on Hacker News',
        image: { srcPath: 'projects/promote-your-next-startup/achievements/00-hacker-news-2021-10-09.png' },
        date: '2021-10-09',
        link: { url: 'https://news.ycombinator.com/front?day=2021-10-09', caption: 'Hacker News archive' },
      },
      {
        title: 'Trending repository of the day on GitHub',
        image: { srcPath: 'projects/promote-your-next-startup/achievements/01-github-trending-of-the-day-2021-10-11.png' },
        date: '2021-10-11',
      },
    ],
  },
  'javascript-algorithms': {
    id: 'javascript-algorithms',
    name: '📝 JavaScript Algorithms and Data-Structures',
    srcURL: { url: 'https://github.com/trekhleb/javascript-algorithms' },
    startDate: '2018-02-01',
    cover: { srcPath: 'projects/javascript-algorithms/cover.png' },
    summary: [
      'Algorithms and data structures implemented in JavaScript with explanations and links to further readings',
    ],
    tags: [
      { name: 'JavaScript' },
      { name: 'Jest' },
      { name: 'Algorithms' },
      { name: 'Data Structures' },
    ],
    gitHubRepo: {
      owner: 'trekhleb',
      repo: 'javascript-algorithms',
    },
    achievements: [
      {
        title: 'Listed on Hacker News front page',
        image: { srcPath: 'projects/javascript-algorithms/achievements/00-hacker-news-2018-05-23.png' },
        date: '2018-05-23',
        link: { url: 'https://news.ycombinator.com/front?day=2018-05-23', caption: 'Hacker News archive' },
      },
      {
        title: 'Listed on Hacker News front page',
        image: { srcPath: 'projects/javascript-algorithms/achievements/00-hacker-news-2018-07-20.png' },
        date: '2018-07-20',
        link: { url: 'https://news.ycombinator.com/front?day=2018-07-20', caption: 'Hacker News archive' },
      },
      {
        title: 'Ranked as #6 of top JavaScript repositories on GitHub',
        image: { srcPath: 'projects/javascript-algorithms/achievements/00-top-js-repos-on-github-2021-04-30.png' },
        date: '2021-04-30',
        link: {
          url: 'https://github.com/search?l=&o=desc&q=stars%3A%3E0+language%3AJavaScript&s=stars&type=Repositories',
          caption: 'GitHub search query example',
        },
      },
      {
        title: 'Trending repository of the day on GitHub',
        image: { srcPath: 'projects/javascript-algorithms/achievements/01-github-trending-day.png' },
      },
      {
        title: 'Trending repository of the day on GitHub',
        image: { srcPath: 'projects/javascript-algorithms/achievements/02-github-trending-day-2020-11-19.png' },
        date: '2020-11-19',
      },
      {
        title: 'Trending repository of the month on GitHub',
        image: { srcPath: 'projects/javascript-algorithms/achievements/03-github-trending-month.png' },
      },
      {
        title: 'Trending repository of the week on GitHub',
        image: { srcPath: 'projects/javascript-algorithms/achievements/04-github-trending-week-2020-12-13.png' },
        date: '2020-12-13',
      },
      {
        title: 'Trending developer of the day on GitHub',
        image: { srcPath: 'projects/javascript-algorithms/achievements/05-github-trending-dev-day.png' },
      },
      {
        title: 'Trending repository of the day on GitHub',
        image: { srcPath: 'projects/javascript-algorithms/achievements/06-github-trending-day-2021-03-29.png' },
        date: '2021-03-29',
      },
      {
        title: 'Trending repository of the week on GitHub',
        image: { srcPath: 'projects/javascript-algorithms/achievements/07-github-trending-week-2021-04-04.png' },
        date: '2021-04-04',
      },
      {
        title: '2nd trending repository of the day on GitHub',
        image: { srcPath: 'projects/javascript-algorithms/achievements/08-github-trending-day-2021-07-14.png' },
        date: '2021-07-14',
      },
      {
        title: 'Listed on Hacker News front page',
        image: { srcPath: 'projects/javascript-algorithms/achievements/09-hacker-news-2021-07-26.png' },
        date: '2021-07-26',
        link: { url: 'https://news.ycombinator.com/front?day=2021-07-26', caption: 'Hacker News archive' },
      },
      {
        title: '3rd trending repository of the day on GitHub',
        image: { srcPath: 'projects/javascript-algorithms/achievements/10-github-trending-day-2021-10-18.png' },
        date: '2021-10-18',
      },
      {
        title: 'Listed on Hacker News front page',
        image: { srcPath: 'projects/javascript-algorithms/achievements/11-hacker-news-2021-10-22.png' },
        date: '2021-10-22',
        link: { url: 'https://news.ycombinator.com/front?day=2021-10-22', caption: 'Hacker News archive' },
      },
      {
        title: 'Trending repository of the day on GitHub',
        image: { srcPath: 'projects/javascript-algorithms/achievements/12-github-trending-day-2021-12-07.png' },
        date: '2021-12-07',
      },
      {
        title: 'Listed on Mozilla MDN Web Docs',
        image: { srcPath: 'projects/javascript-algorithms/achievements/13-mozilla-mdn-web-docs-2022-01-26.png' },
        date: '2022-01-20',
        link: { url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures', caption: 'MDN Web Docs' },
      },
      {
        title: '3rd trending repository of the day on GitHub',
        image: { srcPath: 'projects/javascript-algorithms/achievements/14-github-trending-day-2022-08-16.png' },
        date: '2022-08-16',
      },
      {
        title: '1st trending repository of the day on GitHub',
        image: { srcPath: 'projects/javascript-algorithms/achievements/15-github-trending-day-2023-01-25.png' },
        date: '2023-01-25',
      },
      {
        title: 'Listed on Hacker News front page',
        image: { srcPath: 'projects/javascript-algorithms/achievements/16-hacker-news-2023-04-07.png' },
        date: '2023-04-07',
        link: { url: 'https://news.ycombinator.com/front?day=2023-04-07', caption: 'Hacker News archive' },
      },
      {
        title: '2nd trending repository of the day on GitHub',
        image: { srcPath: 'projects/javascript-algorithms/achievements/17-github-trending-day-2023-04-08.png' },
        date: '2023-04-08',
      },
      {
        title: '5th trending repository of the week on GitHub',
        image: { srcPath: 'projects/javascript-algorithms/achievements/18-github-trending-week-2023-04-08.png' },
        date: '2023-04-08',
      },
      {
        title: '200+ contributors on GitHub',
        image: { srcPath: 'projects/javascript-algorithms/achievements/19-github-contributors-2024-05-05.png' },
      },
      {
        title: '180K+ stars, 29K+ forks on GitHub',
        image: { srcPath: 'projects/javascript-algorithms/achievements/20-github-stats-2024-05-05.png' },
      },
    ],
  },
  'machine-learning-octave': {
    id: 'machine-learning-octave',
    name: '🤖 Machine Learning in MatLab/Octave',
    srcURL: { url: 'https://github.com/trekhleb/machine-learning-octave' },
    startDate: '2018-10-01',
    endDate: '2018-11-01',
    cover: { srcPath: 'projects/machine-learning-octave/cover.png' },
    summary: [
      'MatLab/Octave examples of popular machine learning algorithms with code examples and mathematics being explained',
    ],
    tags: [
      { name: 'AI' },
      { name: 'ML' },
      { name: 'Machine Learning' },
      { name: 'MatLab' },
      { name: 'Octave' },
    ],
    gitHubRepo: {
      owner: 'trekhleb',
      repo: 'machine-learning-octave',
    },
  },
  'learn-python': {
    id: 'learn-python',
    name: '📚 Playground and cheatsheet for learning Python',
    srcURL: { url: 'https://github.com/trekhleb/learn-python' },
    startDate: '2018-08-01',
    endDate: '2018-09-01',
    cover: { srcPath: 'projects/learn-python/cover-2.jpg' },
    summary: [
      'Playground and cheatsheet for learning Python. Collection of Python scripts that are split by topics and contain code examples with explanations',
    ],
    tags: [
      { name: 'Python' },
    ],
    gitHubRepo: {
      owner: 'trekhleb',
      repo: 'learn-python',
    },
    achievements: [
      {
        title: 'Trending repository of the day on GitHub',
        image: { srcPath: 'projects/learn-python/achievements/00-github-trending-day.png' },
      },
      {
        title: 'Trending repository of the day on GitHub',
        image: { srcPath: 'projects/learn-python/achievements/01-github-trending-day-2020-11-21.png' },
        date: '2020-11-21',
      },
      {
        title: 'Trending repository of the day on GitHub',
        image: { srcPath: 'projects/learn-python/achievements/02-github-trending-day-2020-11-23.png' },
        date: '2020-11-23',
      },
    ],
  },
  aggregatus: {
    id: 'aggregatus',
    name: '➡️ Aggregatus | Data Aggregation Service',
    demoURL: { url: 'https://aggregatus.io/' },
    startDate: '2017-01-01',
    endDate: '2018-01-01',
    archived: true,
    cover: { srcPath: 'projects/aggregatus/cover-1.png' },
    summary: [
      'Service that helps you to aggregate information of the same meaning but from the different websites and makes it searchable, filterable, and sortable as if it all was from the one website',
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
    links: [
      {
        url: 'https://trekhleb.dev/blog/2018/aggregatus-service-is-live/',
        caption: 'About the service',
      },
    ],
  },
  'angular-library-seed': {
    id: 'angular-library-seed',
    name: '🌾 Angular-library-seed',
    srcURL: { url: 'https://github.com/trekhleb/angular-library-seed' },
    cover: { srcPath: 'projects/angular-library-seed/cover.png' },
    startDate: '2017-01-01',
    endDate: '2018-01-01',
    summary: [
      'Seed project for Angular libraries that are AOT/JIT compatible and that use external SCSS-styles and HTML-templates',
    ],
    tags: [
      { name: 'TypeScript' },
      { name: 'WebPack' },
      { name: 'Angular' },
    ],
    gitHubRepo: {
      owner: 'trekhleb',
      repo: 'angular-library-seed',
    },
  },
  allbible: {
    id: 'allbible',
    name: '📕 AllBible.info',
    demoURL: { url: 'https://allbible.info/' },
    startDate: '2010-02-01',
    endDate: '2017-02-01',
    cover: { srcPath: 'projects/allbible/cover.png' },
    summary: [
      'Online Bible study web-service that gives users possibility to study Bible by reading it in 4 modern translations, comparing verses to theirs Greek and Hebrew originals, investigating cross-linked verses, making a cross-Bible search, listening to audio Bible, using different Bible study plans and more',
    ],
    tags: [
      { name: 'JavaScript' },
      { name: 'PHP' },
      { name: 'MySQL' },
      { name: 'Bible' },
    ],
  },
  'hook-and-thread': {
    id: 'hook-and-thread',
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
    tags: [
      { name: 'Wordpress' },
      { name: 'WooCommerce' },
    ],
  },
  siteprom: {
    id: 'siteprom',
    name: '🕸 SiteProm Web Studio',
    demoURL: { url: 'http://site-prom.com/' },
    cover: { srcPath: 'projects/siteprom/cover-1.png' },
    startDate: '2008-01-01',
    endDate: '2011-12-01',
    archived: true,
    summary: [
      'The web-studio that was created by my friend and I where we were specialized on providing a full-support during website creation',
    ],
    tags: [
      { name: 'PHP' },
      { name: 'MySQL' },
      { name: 'JavaScript' },
    ],
  },
};
