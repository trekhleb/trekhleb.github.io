import React from 'react';

import { Route, routes } from '../../constants/routes';
import { Link } from '../../types/Link';
import HyperLink from './HyperLink';

const NavMenu = (): React.ReactElement => {
  const links = Object.values(routes).map((route: Route): React.ReactElement => {
    // Adding a / to the end of the links so that activeClassName parameter
    // would work correctly.
    const url = route.path === '/' ? route.path : `${route.path}/`;
    const link: Link = { url };
    return (
      <li key={route.path} className="ml-5">
        <HyperLink
          link={link}
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
