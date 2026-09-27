import React, { useEffect, useState } from 'react';
import Logo from './Logo';
import NavMenu from './NavMenu';

type HeaderProps = {
  className?: string,
};

// Sticky, translucent header: wordmark + main navigation in one compact row on every screen size.
const Header = (props: HeaderProps): React.ReactElement => {
  const { className = '' } = props;

  // A hairline appears under the header once the page is scrolled.
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = (): void => {
      setScrolled(window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return (): void => window.removeEventListener('scroll', onScroll);
  }, []);

  const borderClasses = scrolled ? 'border-line' : 'border-transparent';

  return (
    <header
      className={`sticky top-0 z-40 border-b bg-[var(--header-bg)] backdrop-blur-md transition-colors duration-200 ${borderClasses} ${className}`}
    >
      {/* The wordmark stands apart from the navigation (36px + item padding) so it is not read
          as a fourth menu item; nav items are 8px + padding apart. On phones the navigation sits
          on the right edge instead (`justify-between`; if the row ever wraps, at 320px, the
          wrapped navigation starts on the left under the wordmark), and `-mr-1` cancels the last
          item's padding so "Publications" ends exactly on the content edge. */}
      <div className="container-page flex min-h-[3.5rem] flex-wrap items-center justify-between gap-x-4 sm:min-h-[4rem] sm:justify-start sm:gap-x-9">
        <Logo />
        <nav aria-label="Main navigation" className="-mr-1 sm:mr-0">
          <NavMenu />
        </nav>
      </div>
    </header>
  );
};

export default Header;
