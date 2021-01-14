import React from 'react';

type CardActionsProps = {
  children: React.ReactNode,
};

const CardActions = (props: CardActionsProps): React.ReactElement | null => {
  const { children } = props;

  if (!children) {
    return null;
  }

  return (
    <div className="mb-3">
      {children}
    </div>
  );
};

export default CardActions;
