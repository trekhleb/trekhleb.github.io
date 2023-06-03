import React from 'react';

type RefProps = {
  children: React.ReactNode,
  link: string,
}

export function Ref(props: RefProps): React.ReactElement {
  const { children, link } = props;

  const linkStyle: React.CSSProperties = {};

  return (
    <a href={link} style={linkStyle}>
      {children}
    </a>
  );
}
