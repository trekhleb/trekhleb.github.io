import React from 'react';

type CardsMode = 'list' | 'grid';

export const cardModeList: CardsMode = 'list';
export const cardModeGrid: CardsMode = 'grid';

type CardsProps = {
  children: React.ReactNode,
  mode?: CardsMode,
};

const Cards = (props: CardsProps): React.ReactElement | null => {
  const { children, mode = cardModeGrid } = props;

  if (!children) {
    return null;
  }

  const classes = mode === cardModeGrid
    ? 'grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3'
    : 'grid grid-cols-1 gap-5';

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export default Cards;
