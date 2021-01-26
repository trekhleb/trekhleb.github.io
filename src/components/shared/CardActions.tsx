import React from 'react';
import Row from './Row';

type CardActionsProps = {
  children: React.ReactNode,
};

const CardActions = (props: CardActionsProps): React.ReactElement | null => {
  const { children } = props;

  if (!children) {
    return null;
  }

  const commonClasses = 'px-6 pb-6';

  return (
    <div className={commonClasses}>
      <Row>
        {children}
      </Row>
    </div>
  );
};

export default CardActions;
