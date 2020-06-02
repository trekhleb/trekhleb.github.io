// @flow
import React from 'react';
import type { Node } from 'react';
import { Link } from 'react-router-dom';

import { routes } from '../../constants/routes';

const NavigationMenu = (): Node => {
  return (
    <ul className="m-0 p-0">
      <li>
        <Link to={routes.home}>Home</Link>
      </li>
    </ul>
  );
};

export default NavigationMenu;
