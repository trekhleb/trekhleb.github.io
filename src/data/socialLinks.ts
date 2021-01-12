// @flow
import { socialLinkTypes } from '../types/SocialLink';
import type { SocialLink } from '../types/SocialLink';

export const socialLinks: SocialLink[] = [
  {
    type: socialLinkTypes.linkedIn,
    url: 'https://www.linkedin.com/in/trekhleb/',
    secondary: false,
  },
  {
    type: socialLinkTypes.gitHub,
    url: 'https://github.com/trekhleb',
    secondary: false,
  },
  {
    type: socialLinkTypes.twitter,
    url: 'https://twitter.com/Trekhleb',
    secondary: false,
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
];
