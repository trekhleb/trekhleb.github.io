// @flow
import type { UserProfileType } from '../types/UserProfileType';
import avatarImage from '../images/avatar_500x500.jpg';

export const userProfileData: UserProfileType = {
  firstName: 'Oleksii',
  lastName: 'Trekhleb',
  summary: 'Software Engineer',
  avatar: {
    src: avatarImage,
  },
};
