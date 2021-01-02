import React from 'react';

type CardHeaderProps = {
  children: React.ReactNode,
};

const _CardHeader = (props: CardHeaderProps): React.ReactElement | null => {
  const { children } = props;

  if (!children) {
    return null;
  }

  return (
    <div>
      {children}
    </div>
  );
};

export default _CardHeader;
