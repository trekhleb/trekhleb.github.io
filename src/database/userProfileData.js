// @flow
import type { UserProfileType } from '../types/UserProfileType';
import avatarImage from './images/avatar_500x500.jpg';
import { socialLinkTypes } from '../types/SocialLinkType';

export const userProfileData: UserProfileType = {
  firstName: 'Oleksii',
  lastName: 'Trekhleb',
  summary: [
    'Software Engineer @ Uber',
    'Author of 70k ⭐️ javascript-algorithms repo @ GitHub',
  ],
  avatar: {
    src: avatarImage,
    caption: 'Oleksii Trekhleb',
  },
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
      type: socialLinkTypes.medium,
      url: 'https://medium.com/@trekhleb',
      hidden: true,
    },
    {
      type: socialLinkTypes.stackOverflow,
      url: 'https://stackoverflow.com/users/7794070/oleksii-trekhleb',
      hidden: true,
    },
    {
      type: socialLinkTypes.facebook,
      url: 'https://www.facebook.com/oleksii.trekhleb',
      hidden: true,
    },
    {
      type: socialLinkTypes.instagram,
      url: 'https://www.instagram.com/oleksii_trekhleb',
      hidden: true,
    },
    {
      type: socialLinkTypes.devTo,
      url: 'https://dev.to/trekhleb',
      hidden: true,
    },
  ],
};
