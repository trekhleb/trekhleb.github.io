import { Profile } from '../types/Profile';
import { SOCIAL_LINKS } from './socialLinks';

export const PROFILE: Profile = {
  firstName: 'Oleksii',
  lastName: 'Trekhleb',
  position: 'Senior Software Engineer @ Uber',
  summary: [
    'Author of 180k ★️ js-algorithms GitHub repo',
    '8+ times on HackerNews homepage',
    '15+ years of full-stack experience',
  ],
  avatar: {
    // srcPath: 'profile/avatar_500x500.jpg',
    srcPath: 'profile/avatar_500x500_v2.jpg',
    caption: 'Oleksii Trekhleb',
  },
  location: {
    name: 'Amsterdam, The Netherlands • (from Ukraine)',
  },
  tags: [],
  socialLinks: SOCIAL_LINKS,
};
