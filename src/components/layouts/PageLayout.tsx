import React from 'react';
import NavMenu from '../shared/NavMenu';

type PageLayoutProps = {
  children: React.ReactNode,
};

const PageLayout = (props: PageLayoutProps): React.ReactElement | null => {
  const { children } = props;

  if (!children) {
    return null;
  }

  return (
    <main>
      <nav>
        <NavMenu />
      </nav>
      <article>
        {children}
      </article>
    </main>
  );
};

export default PageLayout;
