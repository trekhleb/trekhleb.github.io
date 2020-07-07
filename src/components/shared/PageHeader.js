// @flow
import React from 'react';
import type { Node } from 'react';

type PageHeaderProps = {
  children: ?Node,
};

const PageHeader = (props: PageHeaderProps): Node => {
  const { children } = props;

  if (!children) {
    return null;
  }

  return (
    <h1 className="text-2xl mb-6 leading-tight font-normal">
      {children}
    </h1>
  );
};

export default PageHeader;
