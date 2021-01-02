import React from 'react';

type PageHeaderProps = {
  children: React.ReactNode,
};

const PageHeader = (props: PageHeaderProps): React.ReactElement | null => {
  const { children } = props;

  if (!children) {
    return null;
  }

  return (
    <h1 className="text-3xl mb-6">
      {children}
    </h1>
  );
};

export default PageHeader;
