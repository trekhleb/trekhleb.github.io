import React from 'react';

import { Route, routes } from '../../constants/routes';
import HyperLink from './HyperLink';

const NavMenu = (): React.ReactElement => {
  const links = Object.values(routes).map((route: Route): React.ReactElement => {
    return (
      <li key={route.path} className="ml-5">
        <HyperLink
          to={route.path}
          className="uppercase text-xs"
          activeClassName="font-bold"
        >
          {route.name}
        </HyperLink>
      </li>
    );
  });

  return (
    <ul className="flex flex-row">
      {links}
    </ul>
  );
};

export default NavMenu;
