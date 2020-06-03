// @flow
import React from 'react';
import type { Node } from 'react';
import { Link } from 'react-router-dom';

import { routes } from '../../constants/routes';

const NavigationMenu = (): Node => {
  return (
    <nav>
      <ul className="flex flex-row">
        <li className="mr-3">
          <Link to={routes.home}>Home</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;
