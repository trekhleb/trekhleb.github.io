import React from 'react';

type SectionsProps = {
  children: React.ReactNode,
}

export function Sections(props: SectionsProps): React.ReactElement {
  const { children } = props;
  return (
    <>
      {children}
      <div>&nbsp;</div>
    </>
  );
}
