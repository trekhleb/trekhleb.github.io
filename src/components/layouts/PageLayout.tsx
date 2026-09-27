import React, { useEffect } from 'react';
import Header from '../shared/Header';
import Footer from '../shared/Footer';
import SkipLink from '../shared/SkipLink';
import { installHashScroll } from '../../utils/scroll';

type PageLayoutProps = {
  children: React.ReactNode,
  // Lets a screen opt out of the default container (e.g. to place full-bleed sections).
  contained?: boolean,
};

export const MAIN_CONTENT_ID = 'main';

const PageLayout = (props: PageLayoutProps): React.ReactElement | null => {
  const { children, contained = true } = props;

  // Same-page anchors scroll in a fixed 260ms rather than the browser's distance-based easing.
  useEffect(() => installHashScroll(), []);

  if (!children) {
    return null;
  }

  const mainClasses = contained
    ? 'container-page flex-1 pt-8 pb-16 sm:pt-12 sm:pb-24'
    : 'flex-1 pt-8 pb-16 sm:pt-12 sm:pb-24';

  return (
    <>
      <SkipLink />
      {/* min-h-screen keeps the footer at the bottom of short pages (home, 404, subscribe). */}
      <div className="flex min-h-screen min-h-[100dvh] flex-col">
        <Header />
        <main id={MAIN_CONTENT_ID} className={mainClasses}>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PageLayout;
