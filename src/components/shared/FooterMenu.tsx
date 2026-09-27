import React from 'react';

import { FOOTER_NAV, Route } from '../../constants/routes';
import { Link } from '../../types/Link';
import HyperLink from './HyperLink';

const FooterMenu = (): React.ReactElement => {
  const links = Object.values(FOOTER_NAV)
    .map((route: Route): React.ReactElement => {
      // Adding a / to the end of the links so that activeClassName parameter
      // would work correctly.
      const url = route.path === '/' ? route.path : `${route.path}/`;
      const link: Link = { url };
      return (
        <li key={route.path}>
          <HyperLink
            link={link}
            className="inline-flex h-10 items-center text-sm text-muted hover:text-fg"
            hoverClassName="hover:text-fg"
            activeClassName="text-fg"
          >
            {route.name}
          </HyperLink>
        </li>
      );
    });

  return (
    <ul className="flex flex-row flex-wrap gap-x-5">
      {links}
    </ul>
  );
};

export default FooterMenu;
