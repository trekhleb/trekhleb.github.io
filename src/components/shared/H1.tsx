import React from 'react';

type H1Props = {
  children: React.ReactNode,
};

const H1 = (props: H1Props): React.ReactElement | null => {
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

export default H1;
