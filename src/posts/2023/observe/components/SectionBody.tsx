import React from 'react';

type SectionBodyProps = {
  children: React.ReactNode,
}

export function SectionBody(props: SectionBodyProps): React.ReactElement {
  const { children } = props;
  return <div className="text-sm">{children}</div>;
}
