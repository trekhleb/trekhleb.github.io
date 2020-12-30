// @flow
import avatarImage from './images/avatar_500x500.jpg';
import { socialLinks } from './socialLinks';
import type { UserType } from '../types/UserType';

export const userData: UserType = {
  firstName: 'Oleksii',
  lastName: 'Trekhleb',
  position: 'Software Engineer @ Uber',
  summary: [
    'Author of 90k ★️ javascript-algorithms repo on GitHub',
  ],
  avatar: {
    src: avatarImage,
    caption: 'Oleksii Trekhleb',
  },
  location: {
    name: 'Amsterdam, The Netherlands',
  },
  tags: [
    { name: 'javascript' },
    { name: 'react' },
    { name: 'python' },
    { name: 'full stack' },
  ],
  socialLinks,
};
