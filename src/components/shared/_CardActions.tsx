import React from 'react';

type CardActionsProps = {
  children: React.ReactNode,
};

const _CardActions = (props: CardActionsProps): React.ReactElement | null => {
  const { children } = props;

  if (!children) {
    return null;
  }

  return (
    <div>
      {children}
    </div>
  );
};

export default _CardActions;
