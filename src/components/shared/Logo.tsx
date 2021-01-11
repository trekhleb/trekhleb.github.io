import React from 'react';
import { Link } from 'gatsby';

import { routes } from '../../constants/routes';
import { brandName } from '../../constants/siteMeta';

const Logo = (): React.ReactElement => {
  return (
    <div>
      <Link to={routes.home.path} className="font-extrabold text-sm tracking-widest uppercase">
        {brandName}
      </Link>
    </div>
  );
};

export default Logo;
