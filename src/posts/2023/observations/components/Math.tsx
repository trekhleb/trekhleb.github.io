import React from 'react';

type MathProps = {
  children: React.ReactNode,
}

export function Math(props: MathProps): React.ReactElement {
  const { children } = props;

  return (
    <span className="font-mono font-medium text-xs">
      {children}
    </span>
  );
}
