import React from 'react';

type CardsProps = {
  children: React.ReactNode,
};

const Cards = (props: CardsProps): React.ReactElement | null => {
  const { children } = props;

  if (!children) {
    return null;
  }

  return (
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  );
};

export default Cards;
