import React from 'react';
import Header from '../shared/Header';
import Footer from '../shared/Footer';

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
      <Header />
      <article>
        {children}
      </article>
      <Footer />
    </main>
  );
};

export default PageLayout;
