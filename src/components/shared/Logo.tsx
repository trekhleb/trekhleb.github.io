import React from 'react';
import { Link } from 'gatsby';
import { routes } from '../../constants/routes';

const Logo = (): React.ReactElement => {
  return (
    <div>
      <Link to={routes.home.path} className="font-extrabold text-xs tracking-widest">
        TREKHLEB
      </Link>
    </div>
  );
};

export default Logo;
