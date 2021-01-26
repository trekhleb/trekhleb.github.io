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

  const commonClasses = 'grid gap-12 grid-cols-1';

  const classes = mode === cardModeGrid
    ? `${commonClasses} sm:grid-cols-2 lg:grid-cols-3`
    : `${commonClasses}`;

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export default Cards;
