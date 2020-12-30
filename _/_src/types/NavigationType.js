// @flow
import { routes } from '../constants/routes';

export type NavigationType = {|
  route: $Values<typeof routes>,
  menuName: string,
  pageTitle?: string,
|};

export type NavigationsType = {
  [route: $Values<typeof routes>]: NavigationType,
};
