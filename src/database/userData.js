// @flow
import type { UserType } from '../types/UserType';
import avatarImage from './images/avatar_500x500.jpg';
import { socialLinkTypes } from '../types/SocialLinkType';

export const userData: UserType = {
  firstName: 'Oleksii',
  lastName: 'Trekhleb',
  position: 'Software Engineer @ Uber',
  summary: [
    'Author of 70k ★️ javascript-algorithms repo on GitHub',
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
  socialLinks: [
    {
      type: socialLinkTypes.linkedIn,
      url: 'https://www.linkedin.com/in/trekhleb/',
    },
    {
      type: socialLinkTypes.gitHub,
      url: 'https://github.com/trekhleb',
    },
    {
      type: socialLinkTypes.twitter,
      url: 'https://twitter.com/Trekhleb',
    },
    {
      type: socialLinkTypes.facebook,
      url: 'https://www.facebook.com/oleksii.trekhleb',
      secondary: true,
    },
    {
      type: socialLinkTypes.instagram,
      url: 'https://www.instagram.com/oleksii_trekhleb',
      secondary: true,
    },
    {
      type: socialLinkTypes.medium,
      url: 'https://medium.com/@trekhleb',
      secondary: true,
    },
    {
      type: socialLinkTypes.devTo,
      url: 'https://dev.to/trekhleb',
      secondary: true,
    },
    {
      type: socialLinkTypes.stackOverflow,
      url: 'https://stackoverflow.com/users/7794070/oleksii-trekhleb',
      secondary: true,
    },
    {
      type: socialLinkTypes.youTube,
      url: 'https://www.youtube.com/c/OleksiiTrekhlebs',
      secondary: true,
    },
  ],
};
