// @flow
import type { LinkType } from './LinkType';

export const socialLinkTypes = {
  devTo: 'DevTo',
  facebook: 'Facebook',
  gitHub: 'GitHub',
  instagram: 'Instagram',
  linkedIn: 'LinkedIn',
  medium: 'Medium',
  stackOverflow: 'StackOverflow',
  twitter: 'Twitter',
  youTube: 'YouTube',
};

export type SocialLinkType = {|
  ...LinkType,
  type: $Values<typeof socialLinkTypes>,
  hidden?: ?boolean,
|};
