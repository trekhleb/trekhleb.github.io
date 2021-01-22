import React from 'react';

type CardMediaMode = 'row' | 'column';

export const cardMediaModeRow: CardMediaMode = 'row';
export const cardMediaModeColumn: CardMediaMode = 'column';

type CardMediaProps = {
  children: React.ReactNode,
  className?: string,
  mode?: CardMediaMode,
};

const CardMedia = (props: CardMediaProps): React.ReactElement | null => {
  const { children, className = '', mode = cardMediaModeColumn } = props;

  const commonClasses = `mb-2 bg-cover h-48 bg-gray-200 overflow-hidden block ${className}`;

  const classes = mode === cardMediaModeRow
    ? `${commonClasses} sm:h-full sm:w-2/5 lg:w-1/4`
    : `${commonClasses}`;

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export default CardMedia;
