import React from 'react';

type CardMode = 'row' | 'column';

export const cardModeRow: CardMode = 'row';
export const cardModeColumn: CardMode = 'column';

type CardProps = {
  children: React.ReactNode,
  mode?: CardMode,
};

const Card = (props: CardProps): React.ReactElement | null => {
  const { children, mode = cardModeColumn } = props;

  if (!children) {
    return null;
  }

  const commonCardStyles = 'transition duration-200 ease-in-out shadow-card rounded-md overflow-hidden bg-white flex flex-col';

  const classes = mode === cardModeRow
    ? `${commonCardStyles} sm:flex-row items-stretch`
    : `${commonCardStyles}`;

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export default Card;
