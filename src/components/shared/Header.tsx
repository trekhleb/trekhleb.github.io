import React from 'react';
import Logo from './Logo';
import NavMenu from './NavMenu';

const Header = (): React.ReactElement => {
  return (
    <header className="flex flex-row items-center py-6 px-12">
      <div className="mr-6">
        <Logo />
      </div>
      <nav>
        <NavMenu />
      </nav>
    </header>
  );
};

export default Header;
