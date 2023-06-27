import React from 'react';

type YearsProps = {
  children: React.ReactNode,
}

export function Years(props: YearsProps): React.ReactElement {
  const { children } = props;

  return (
    <span className="text-xs text-slate-400">
      {children}
    </span>
  );
}
