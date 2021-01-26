import React from 'react';
import H, { hLevel } from './H';

type PageHeaderProps = {
  children: React.ReactNode,
  className?: string,
};

const PageHeader = (props: PageHeaderProps): React.ReactElement | null => {
  const { children, className = '' } = props;

  const commonClasses = 'mb-6 uppercase font-extrabold';

  const classes = `${commonClasses} ${className}`;

  return (
    <H level={hLevel.h1} className={classes}>{children}</H>
  );
};

export default PageHeader;
