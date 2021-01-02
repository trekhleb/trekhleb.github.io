import React from 'react';
import Logo from './Logo';
import NavMenu from './NavMenu';

const Header = (): React.ReactElement => {
  return (
    <header>
      <div>
        <Logo />
      </div>
      <nav>
        <NavMenu />
      </nav>
    </header>
  );
};

export default Header;
