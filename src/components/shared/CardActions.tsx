import React from 'react';

type CardActionsProps = {
  children: React.ReactNode,
  className?: string,
};

// Button row at the bottom of a card. Sits above the stretched card link so buttons stay clickable.
const CardActions = (props: CardActionsProps): React.ReactElement | null => {
  const { children, className = 'px-5 pb-5 sm:px-6 sm:pb-6' } = props;

  if (!children) {
    return null;
  }

  return (
    <div className={`relative z-10 ${className}`}>
      <div className="flex flex-row flex-wrap items-center gap-4">
        {children}
      </div>
    </div>
  );
};

export default CardActions;
