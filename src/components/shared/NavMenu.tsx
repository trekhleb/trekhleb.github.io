import * as React from 'react';
import { Link } from 'gatsby';

import { routes } from '../../constants/routes';

const NavMenu = (): React.ReactElement => {
  return (
    <ul>
      <li>
        <Link to={routes.home.path}>
          About
        </Link>
      </li>
      <li>
        <Link to={routes.projects.path}>
          Projects
        </Link>
      </li>
      <li>
        <Link to={routes.blog.path}>
          Blog
        </Link>
      </li>
    </ul>
  );
};

export default NavMenu;
