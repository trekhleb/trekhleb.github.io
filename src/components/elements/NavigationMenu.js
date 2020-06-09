// @flow
import React from 'react';
import type { Node } from 'react';

import { routes } from '../../constants/routes';
import Link from '../shared/Link';

const NavigationMenu = (): Node => {
  const listClassName = 'mr-6 last:mr-0';
  const linkClassName = 'uppercase text-xs font-normal';

  return (
    <nav>
      <ul className="flex flex-row">
        <li className={listClassName}>
          <Link className={linkClassName} to={routes.about}>About</Link>
        </li>
        <li className={listClassName}>
          <Link className={linkClassName} to={routes.projects}>Projects</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;
