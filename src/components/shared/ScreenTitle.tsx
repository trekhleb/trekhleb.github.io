import React from 'react';
import { Helmet } from 'react-helmet';

type ScreenTitleProps = {
  children: React.ReactNode,
};

const ScreenTitle = (props: ScreenTitleProps): React.ReactElement | null => {
  const { children } = props;

  if (!children) {
    return null;
  }

  return (
    <Helmet>
      <title>
        Trekhleb
        {' | '}
        {children}
      </title>
    </Helmet>
  );
};

export default ScreenTitle;
