// @flow
import { socialLinkTypes } from '../types/SocialLink';
import type { SocialLink } from '../types/SocialLink';

export const socialLinks: SocialLink[] = [
  {
    type: socialLinkTypes.linkedIn,
    url: 'https://www.linkedin.com/in/trekhleb/',
    secondary: false,
    caption: 'Oleksii Trekhleb on LinkedIn',
  },
  {
    type: socialLinkTypes.gitHub,
    url: 'https://github.com/trekhleb',
    secondary: false,
    caption: 'Oleksii Trekhleb on GitHub',
  },
  {
    type: socialLinkTypes.twitter,
    url: 'https://twitter.com/Trekhleb',
    secondary: false,
    caption: 'Oleksii Trekhleb on Twitter',
  },
  {
    type: socialLinkTypes.facebook,
    url: 'https://www.facebook.com/oleksii.trekhleb',
    secondary: true,
    caption: 'Oleksii Trekhleb on Facebook',
  },
  {
    type: socialLinkTypes.instagram,
    url: 'https://www.instagram.com/oleksii_trekhleb',
    secondary: true,
    caption: 'Oleksii Trekhleb on Instagram',
  },
  {
    type: socialLinkTypes.medium,
    url: 'https://medium.com/@trekhleb',
    secondary: true,
    caption: 'Oleksii Trekhleb on Medium',
  },
  {
    type: socialLinkTypes.devTo,
    url: 'https://dev.to/trekhleb',
    secondary: true,
    caption: 'Oleksii Trekhleb on DevTo',
  },
  {
    type: socialLinkTypes.stackOverflow,
    url: 'https://stackoverflow.com/users/7794070/oleksii-trekhleb',
    secondary: true,
    caption: 'Oleksii Trekhleb on StackOverflow',
  },
  {
    type: socialLinkTypes.youTube,
    url: 'https://www.youtube.com/c/OleksiiTrekhlebs',
    secondary: true,
    caption: 'Oleksii Trekhleb on YouTube',
  },
];
