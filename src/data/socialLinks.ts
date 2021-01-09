// @flow
import { socialLinkTypes } from '../types/SocialLink';
import type { SocialLink } from '../types/SocialLink';

export const socialLinks: SocialLink[] = [
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
  },
  {
    type: socialLinkTypes.instagram,
    url: 'https://www.instagram.com/oleksii_trekhleb',
  },
  {
    type: socialLinkTypes.medium,
    url: 'https://medium.com/@trekhleb',
  },
  {
    type: socialLinkTypes.devTo,
    url: 'https://dev.to/trekhleb',
  },
  {
    type: socialLinkTypes.stackOverflow,
    url: 'https://stackoverflow.com/users/7794070/oleksii-trekhleb',
  },
  {
    type: socialLinkTypes.youTube,
    url: 'https://www.youtube.com/c/OleksiiTrekhlebs',
  },
];
