// @flow
import { socialLinkTypes } from '../types/SocialLinkType';
import type { SocialLinkType } from '../types/SocialLinkType';

export const socialLinks: SocialLinkType[] = [
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
];
