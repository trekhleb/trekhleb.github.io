import React from 'react';

type ReferenceSourceProps = {
  children: React.ReactNode;
};

export function ReferenceSource(props: ReferenceSourceProps): React.ReactElement {
  const { children } = props;

  return (
    <span className="text-gray-400">
      | <span className="italic">{children}</span>
    </span>
  );
}
