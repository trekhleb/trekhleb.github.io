// @flow

import type { NavigationsType } from '../types/NavigationType';
import { routes } from '../constants/routes';

export const navigation: NavigationsType = {
  [routes.about]: {
    route: routes.about,
    menuName: 'About',
  },
  [routes.projects]: {
    route: routes.projects,
    menuName: 'Projects',
    pageTitle: 'Projects',
  },
};
