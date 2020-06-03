// @flow
import React from 'react';
import type { Node } from 'react';

import { routes } from '../../constants/routes';
import RouterLink from '../shared/RouterLink';

const NavigationMenu = (): Node => {
  return (
    <nav>
      <ul className="flex flex-row">
        <li className="mr-3">
          <RouterLink to={routes.home}>Home</RouterLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;
