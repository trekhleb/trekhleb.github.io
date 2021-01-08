import React from 'react';

type CardProps = {
  children: React.ReactNode,
};

const Card = (props: CardProps): React.ReactElement | null => {
  const { children } = props;

  if (!children) {
    return null;
  }

  return (
    <div className="shadow-xl rounded-md overflow-hidden bg-white flex flex-col">
      {children}
    </div>
  );
};

export default Card;
