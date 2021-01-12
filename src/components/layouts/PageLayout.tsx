import React from 'react';
import Header from '../shared/Header';
import Footer from '../shared/Footer';
import { layoutPaddingX, layoutPaddingY } from '../../constants/style';

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
      <Header className={`${layoutPaddingX} ${layoutPaddingY}`} />
      <article className={`${layoutPaddingX} ${layoutPaddingY}`}>
        {children}
      </article>
      <Footer className={`${layoutPaddingX} ${layoutPaddingY}`} />
    </main>
  );
};

export default PageLayout;
