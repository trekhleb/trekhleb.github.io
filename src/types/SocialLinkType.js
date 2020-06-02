// @flow
import type { LinkType } from './LinkType';

export const socialLinkTypes = {
  twitter: 'Twitter',
  linkedIn: 'LinkedIn',
  gitHub: 'GitHub',
  medium: 'Medium',
  devTo: 'DevTo',
  facebook: 'Facebook',
  stackOverflow: 'StackOverflow',
  instagram: 'Instagram',
};

export type SocialLinkType = {|
  ...LinkType,
  type?: $Values<typeof socialLinkTypes>,
|};
