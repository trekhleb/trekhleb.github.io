// @flow
import type { Image } from './image';
import type { SocialLink } from './links';

export type Profile = {|
  firstName?: ?string,
  lastName?: ?string,
  picture?: ?Image,
  socialLinks?: ?Array<SocialLink>,
|};
