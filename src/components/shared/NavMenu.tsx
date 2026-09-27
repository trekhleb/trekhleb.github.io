import React from 'react';

import { Route, TOP_NAV } from '../../constants/routes';
import { Link } from '../../types/Link';
import HyperLink from './HyperLink';

const NavMenu = (): React.ReactElement => {
  const links = Object.values(TOP_NAV)
    .map((route: Route): React.ReactElement => {
      // Adding a / to the end of the links so that activeClassName parameter
      // would work correctly.
      const url = route.path === '/' ? route.path : `${route.path}/`;
      const link: Link = { url };
      return (
        <li key={route.path}>
          <HyperLink
            link={link}
            className="relative inline-flex h-11 items-center px-1 text-[14px] font-medium text-muted transition-colors duration-150 hover:text-fg sm:h-9 sm:rounded-lg sm:px-3 sm:text-[15px] sm:hover:bg-subtle"
            hoverClassName="hover:text-fg"
            activeClassName="is-active !text-fg after:absolute after:inset-x-1 after:bottom-0 after:h-0.5 after:rounded-full after:bg-fg sm:after:inset-x-3 sm:after:-bottom-px"
            partiallyActive
          >
            {route.name}
          </HyperLink>
        </li>
      );
    });

  return (
    <ul className="flex flex-row items-center gap-0.5 sm:gap-1">
      {links}
    </ul>
  );
};

export default NavMenu;
