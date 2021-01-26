import React from 'react';

type RowProps = {
  children: React.ReactNode,
  className?: string,
};

const Row = (props: RowProps): React.ReactElement | null => {
  const { children, className = '' } = props;

  if (!children) {
    return null;
  }

  return (
    <div className={`flex flex-row items-center ${className}`}>
      {children}
    </div>
  );
};

export default Row;
