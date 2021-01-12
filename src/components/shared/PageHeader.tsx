import React from 'react';
import H, { hLevel } from './H';

type PageHeaderProps = {
  children: React.ReactNode,
};

const PageHeader = (props: PageHeaderProps): React.ReactElement | null => {
  const { children } = props;

  return (
    <H level={hLevel.h1} className="mb-6">{children}</H>
  );
};

export default PageHeader;
