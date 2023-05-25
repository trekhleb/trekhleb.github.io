import React from 'react';

type RootLayoutProps = {
  children: React.ReactNode,
};

const RootLayout = (props: RootLayoutProps): React.ReactElement => {
  const { children } = props;
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {children}
    </>
  );
};

export default RootLayout;
