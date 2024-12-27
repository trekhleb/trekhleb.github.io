import React from 'react';

type AProps = {
  href: string,
  children: React.ReactNode,
};

const A = (props: AProps): React.ReactElement => {
  const { href, children } = props;

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
  );
};

export default A;
