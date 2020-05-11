// @flow
import type { Image } from './image';

export type Profile = {|
  firstName?: ?string,
  lastName?: ?string,
  picture?: ?Image,
|};
