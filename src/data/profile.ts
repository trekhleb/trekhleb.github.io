import { Profile } from '../types/Profile';
import { socialLinks } from './socialLinks';
import { Publisher } from '../types/Publication';

export const profile: Profile = {
  firstName: 'Oleksii',
  lastName: 'Trekhleb',
  position: 'Senior Software Engineer @ Uber',
  // First job: Web Studio Tochka, August 2007.
  careerStartDate: '2007-08-01',
  summary: [
    'Author of 190k ★️ js-algorithms GitHub repo',
    '8+ times on HackerNews homepage',
    '15+ years of full-stack experience',
  ],
  // Rendered as stats on the home page. Every number is derived from data (projectStars.json,
  // refreshed before each build, and publications.ts), so none goes stale.
  highlights: [
    {
      label: 'GitHub stars across all {projects} projects',
      totalStars: true,
      link: { url: '/projects/?sort=starsDesc', caption: 'Projects by stars' },
    },
    {
      label: 'GitHub stars on **javascript-algorithms** · {forks} forks · {contributors} contributors · translated into {translations} languages by volunteers',
      starsOfProject: 'javascript-algorithms',
      link: { url: 'https://github.com/trekhleb/javascript-algorithms', caption: 'javascript-algorithms on GitHub' },
    },
    {
      // Names instead of a count: a number here would have to match the publications page,
      // which also lists articles and citations; the best-known names say it at a glance.
      heading: 'Featured in',
      label: 'including {hackerNewsFrontPages} **Hacker News** front pages · cited in {researchPapers} research papers and {books} books',
      logos: [
        Publisher.HackerNews,
        Publisher.TechCrunch,
        Publisher.Wikipedia,
        Publisher.MozillaMDNWebDocs,
        Publisher.JavaScriptWeekly,
        Publisher.TowardsDataScience,
        Publisher.KDnuggets,
        Publisher.Changelog,
      ],
      link: { url: '/publications/', caption: 'All publications' },
    },
  ],
  avatar: {
    // srcPath: 'profile/avatar_500x500.jpg',
    srcPath: 'profile/avatar_500x500_v2.jpg',
    caption: 'Oleksii Trekhleb',
  },
  location: {
    name: 'San Francisco Bay Area • (from Ukraine)',
  },
  tags: [],
  socialLinks,
};
