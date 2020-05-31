// @flow
import React from 'react';
import type { Node } from 'react';

type LayoutProps = {
  children: Node,
};

const Layout = (props: LayoutProps): Node => {
  const { children } = props;

  return (
    <div>
      {children}
    </div>
  );
};

export default Layout;
