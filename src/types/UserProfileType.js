// @flow
import type { ImageType } from './ImageType';
import type { SocialLink } from './links';

export type UserProfileType = {|
  firstName?: ?string,
  lastName?: ?string,
  summary?: ?string,
  avatar?: ?ImageType,
  socialLinks?: ?Array<SocialLink>,
|};
