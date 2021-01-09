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

  const modeClasses = mode === cardModeGrid
    ? 'grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
    : 'grid gap-8 grid-cols-1';

  return (
    <div className={`${modeClasses}`}>
      {children}
    </div>
  );
};

export default Cards;
