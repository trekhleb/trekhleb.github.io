// @flow
import type { ImageType } from './ImageType';
import type { SocialLinkType } from './SocialLinkType';
import type { TagType } from './TagType';

export type UserType = {|
  firstName?: string,
  lastName?: string,
  avatar?: ImageType,
  summary?: string[],
  socialLinks?: SocialLinkType[],
  tags?: TagType[],
|};
