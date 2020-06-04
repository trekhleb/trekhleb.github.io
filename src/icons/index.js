// @flow
import { ReactComponent as FacebookIcon } from './facebook.svg';
import { ReactComponent as GithubIcon } from './github.svg';
import { ReactComponent as InstagramIcon } from './instagram.svg';
import { ReactComponent as MediumIcon } from './medium.svg';
import { ReactComponent as TwitterIcon } from './twitter.svg';
import { ReactComponent as LinkedinIcon } from './linkedin.svg';
import { ReactComponent as StackoverflowIcon } from './stackoverflow.svg';
import { ReactComponent as DevtoIcon } from './devto.svg';

export const iconKeys = {
  facebook: 'facebook',
  github: 'github',
  instagram: 'instagram',
  linkedin: 'linkedin',
  medium: 'medium',
  stackoverflow: 'stackoverflow',
  twitter: 'twitter',
  devto: 'devto',
};

export const icons = {
  [iconKeys.facebook]: FacebookIcon,
  [iconKeys.github]: GithubIcon,
  [iconKeys.instagram]: InstagramIcon,
  [iconKeys.medium]: MediumIcon,
  [iconKeys.twitter]: TwitterIcon,
  [iconKeys.linkedin]: LinkedinIcon,
  [iconKeys.stackoverflow]: StackoverflowIcon,
  [iconKeys.devto]: DevtoIcon,
};
