import React from 'react';

type CardMediaProps = {
  children: React.ReactNode,
};

const CardMedia = (props: CardMediaProps): React.ReactElement | null => {
  const { children } = props;
  return (
    <div className="mb-2 bg-cover h-48 bg-gray-200 overflow-hidden">
      {children}
    </div>
  );
};

export default CardMedia;
