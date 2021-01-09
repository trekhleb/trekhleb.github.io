import { SocialLink } from './SocialLink';
import { Tag } from './Tag';
import { Location } from './Location';
import { Image } from './Image';

export type Profile = {
  firstName?: string,
  lastName?: string,
  positions?: string[],
  avatar?: Image,
  summary?: string[],
  socialLinks?: SocialLink[],
  tags?: Tag[],
  location?: Location,
};
