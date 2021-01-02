import React from 'react';

type CardContentProps = {
  children: React.ReactNode,
};

const CardContent = (props: CardContentProps): React.ReactElement | null => {
  const { children } = props;

  if (!children) {
    return null;
  }

  return (
    <div className="p-3">
      {children}
    </div>
  );
};

export default CardContent;
