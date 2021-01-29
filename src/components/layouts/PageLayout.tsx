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
    <main className="flex flex-col items-center">
      <div className="max-w-screen-xl self-stretch m-auto w-full">
        <Header className={`${layoutPaddingX} ${layoutPaddingY}`} />
        <article className={`${layoutPaddingX} ${layoutPaddingY}`}>
          {children}
        </article>
        <Footer className={`${layoutPaddingX} py-12`} />
      </div>
    </main>
  );
};

export default PageLayout;
