import React from 'react';

type CardContentMode = 'row' | 'column';

export const cardContentModeRow: CardContentMode = 'row';
export const cardContentModeColumn: CardContentMode = 'column';

type CardContentProps = {
  children: React.ReactNode,
  className?: string,
  mode?: CardContentMode,
};

const CardContent = (props: CardContentProps): React.ReactElement | null => {
  const { children, className = '', mode = cardContentModeColumn } = props;

  if (!children) {
    return null;
  }

  const commonClasses = `p-6 ${className}`;

  const classes = mode === cardContentModeRow
    ? `${commonClasses} sm:w-3/5 lg:w-3/4`
    : `${commonClasses}`;

  return (
    <div className={classes} style={{ flex: 1 }}>
      {children}
    </div>
  );
};

export default CardContent;
