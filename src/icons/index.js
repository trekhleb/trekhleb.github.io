// @flow
import type { ComponentType } from 'react';

// $FlowFixMe
import { ReactComponent as FacebookIcon } from './icomoon/facebook.svg';
// $FlowFixMe
import { ReactComponent as GithubIcon } from './icomoon/github.svg';
// $FlowFixMe
import { ReactComponent as InstagramIcon } from './icomoon/instagram.svg';
// $FlowFixMe
import { ReactComponent as MediumIcon } from './icomoon/medium.svg';
// $FlowFixMe
import { ReactComponent as TwitterIcon } from './icomoon/twitter.svg';
// $FlowFixMe
import { ReactComponent as LinkedinIcon } from './icomoon/linkedin.svg';
// $FlowFixMe
import { ReactComponent as StackoverflowIcon } from './icomoon/stackoverflow.svg';
// $FlowFixMe
import { ReactComponent as DevtoIcon } from './icomoon/devto.svg';
// $FlowFixMe
import { ReactComponent as YouTubeIcon } from './icomoon/youtube.svg';
// $FlowFixMe
import { ReactComponent as LocationIcon } from './feather/location.svg';
// $FlowFixMe
import { ReactComponent as BriefcaseIcon } from './feather/briefcase.svg';
// $FlowFixMe
import { ReactComponent as PriceTagIcon } from './icomoon/price-tag.svg';

export type IconKeysType = {
  [string]: string,
};

export const iconKeys: IconKeysType = {
  devto: 'devto',
  facebook: 'facebook',
  github: 'github',
  instagram: 'instagram',
  linkedin: 'linkedin',
  location: 'location',
  medium: 'medium',
  pricetag: 'pricetag',
  stackoverflow: 'stackoverflow',
  twitter: 'twitter',
  youtube: 'youtube',
  briefcase: 'briefcase',
};

export type IconType = {|
  component: ComponentType<any>,
  fillCurrent?: boolean,
|};

export type IconsType = {
  [iconKey: $Values<typeof iconKeys>]: IconType,
};

export const icons: IconsType = {
  [iconKeys.devto]: { component: DevtoIcon },
  [iconKeys.facebook]: { component: FacebookIcon },
  [iconKeys.github]: { component: GithubIcon },
  [iconKeys.instagram]: { component: InstagramIcon },
  [iconKeys.linkedin]: { component: LinkedinIcon },
  [iconKeys.location]: {
    component: LocationIcon,
    fillCurrent: false,
  },
  [iconKeys.medium]: { component: MediumIcon },
  [iconKeys.pricetag]: { component: PriceTagIcon },
  [iconKeys.stackoverflow]: { component: StackoverflowIcon },
  [iconKeys.twitter]: { component: TwitterIcon },
  [iconKeys.youtube]: { component: YouTubeIcon },
  [iconKeys.briefcase]: {
    component: BriefcaseIcon,
    fillCurrent: false,
  },
};
