// @flow
import type { ImageType } from './ImageType';
import type { SocialLinkType } from './SocialLinkType';
import type { TagType } from './TagType';
import type { LocationType } from './LocationType';

export type UserType = {|
  firstName?: string,
  lastName?: string,
  avatar?: ImageType,
  summary?: string[],
  socialLinks?: SocialLinkType[],
  tags?: TagType[],
  location?: LocationType,
|};
