import React from 'react';

type H3Props = {
  children: React.ReactNode,
};

const H3 = (props: H3Props): React.ReactElement | null => {
  const { children } = props;

  if (!children) {
    return null;
  }

  return (
    <h3 className="text-xl mb-5 mt-0">
      {children}
    </h3>
  );
};

export default H3;
