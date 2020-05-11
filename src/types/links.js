// @flow

export const socialLinkTypes = {
  twitter: 'twitter',
  linkedInd: 'linkedIn',
  gitHub: 'gitHub',
  medium: 'medium',
  devTo: 'devTo',
  facebook: 'facebook',
  stackOverflow: 'stackOverflow',
};

export type Link = {
  url?: ?string,
  caption?: ?string,
};

export type SocialLink = {|
  ...Link,
  type?: $Values<typeof socialLinkTypes>,
|};
