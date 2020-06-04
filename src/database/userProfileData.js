// @flow
import type { UserProfileType } from '../types/UserProfileType';
import avatarImage from '../images/avatar_500x500.jpg';
import { socialLinkTypes } from '../types/SocialLinkType';

export const userProfileData: UserProfileType = {
  firstName: 'Oleksii',
  lastName: 'Trekhleb',
  summary: 'Software Engineer @ Uber',
  avatar: {
    src: avatarImage,
  },
  socialLinks: [
    {
      type: socialLinkTypes.gitHub,
      url: 'https://github.com/trekhleb',
    },
    {
      type: socialLinkTypes.twitter,
      url: 'https://twitter.com/Trekhleb',
    },
    {
      type: socialLinkTypes.linkedIn,
      url: 'https://www.linkedin.com/in/trekhleb/',
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
      type: socialLinkTypes.devTo,
      url: 'https://dev.to/trekhleb',
      hidden: true,
    },
  ],
};
