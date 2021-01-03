import React from 'react';
import { Link } from 'gatsby';

import { Route, routes } from '../../constants/routes';

const NavMenu = (): React.ReactElement => {
  const links = Object.values(routes).map((route: Route): React.ReactElement => {
    return (
      <li key={route.path} className="ml-5">
        <Link
          to={route.path}
          className="uppercase text-xs"
          activeClassName="font-bold"
        >
          {route.name}
        </Link>
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
