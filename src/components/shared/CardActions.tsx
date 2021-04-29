import React from 'react';
import Row from './Row';

type CardActionsProps = {
  children: React.ReactNode,
  className?: string,
};

const CardActions = (props: CardActionsProps): React.ReactElement | null => {
  const { children, className = 'px-6 pb-6' } = props;

  if (!children) {
    return null;
  }

  return (
    <div className={className}>
      <Row>
        {children}
      </Row>
    </div>
  );
};

export default CardActions;
