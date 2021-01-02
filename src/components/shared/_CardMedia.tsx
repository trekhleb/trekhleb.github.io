import React from 'react';

type CardMediaProps = {
  children: React.ReactNode,
};

const _CardMedia = (props: CardMediaProps): React.ReactElement | null => {
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

export default _CardMedia;
