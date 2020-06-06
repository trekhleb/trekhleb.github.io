// @flow
import type { ImageType } from './ImageType';
import type { SocialLinkType } from './SocialLinkType';

export type UserProfileType = {|
  firstName: string,
  lastName: string,
  avatar: ImageType,
  summary: string[],
  socialLinks: SocialLinkType[],
|};
