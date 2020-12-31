import * as React from 'react';

type PageHeaderProps = {
  children: React.ReactNode,
};

const PageHeader = (props: PageHeaderProps): React.ReactElement => {
  const { children } = props;

  if (!children) {
    return null;
  }

  return (
    <h1>
      {children}
    </h1>
  );
};

export default PageHeader;
