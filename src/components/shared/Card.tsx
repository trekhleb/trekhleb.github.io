import React from 'react';

type CardMode = 'row' | 'column';

export const cardModeRow: CardMode = 'row';
export const cardModeColumn: CardMode = 'column';

type CardProps = {
  children: React.ReactNode,
  mode?: CardMode,
  // Lifts the card slightly on hover (for cards that link somewhere).
  interactive?: boolean,
  className?: string,
};

const Card = (props: CardProps): React.ReactElement | null => {
  const {
    children,
    mode = cardModeColumn,
    interactive = true,
    className = '',
  } = props;

  if (!children) {
    return null;
  }

  const commonCardStyles = `card group flex flex-col ${interactive ? 'card-hover' : ''}`;

  const classes = mode === cardModeRow
    ? `${commonCardStyles} sm:flex-row sm:items-stretch ${className}`
    : `${commonCardStyles} ${className}`;

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export default Card;
