import { Profile } from '../types/Profile';
import { socialLinks } from './socialLinks';

export const profile: Profile = {
  firstName: 'Oleksii',
  lastName: 'Trekhleb',
  position: 'Software Engineer @ Uber',
  summary: [
    'Author of 100k ★️ javascript-algorithms repo on GitHub',
  ],
  avatar: {
    srcPath: 'profile/avatar_500x500.jpg',
    caption: 'Oleksii Trekhleb',
  },
  location: {
    name: 'Amsterdam, The Netherlands',
  },
  tags: [
    { name: 'JavaScript' },
    { name: 'React' },
    { name: 'Python' },
    { name: 'GO' },
    { name: 'Full Stack' },
  ],
  socialLinks,
};
