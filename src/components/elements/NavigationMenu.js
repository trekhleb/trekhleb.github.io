// @flow
import React from 'react';
import type { Node } from 'react';

import Link from '../shared/Link';
import { navigation } from '../../database/navigation';
import type { NavigationType } from '../../types/NavigationType';

const NavigationMenu = (): Node => {
  const listClassName = 'mr-6 last:mr-0';
  const linkClassName = 'uppercase text-xs font-normal';

  const navigationItems = Object.values(navigation)
    // $FlowFixMe
    .map((navigationItem: NavigationType) => {
      return (
        <li className={listClassName} key={navigationItem.route}>
          <Link className={linkClassName} to={navigationItem.route}>
            {navigationItem.menuName}
          </Link>
        </li>
      );
    });

  return (
    <nav>
      <ul className="flex flex-row">
        {navigationItems}
      </ul>
    </nav>
  );
};

export default NavigationMenu;
