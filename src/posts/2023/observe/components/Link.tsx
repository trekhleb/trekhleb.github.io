import React from 'react';

type LinkProps = {
  href: string,
  children: React.ReactNode,
}

export function Link(props: LinkProps): React.ReactElement {
  const { children, href } = props;

  return (
    <span className="not-prose">
      <a
        href={href}
        className="font-medium underline hover:text-red-600"
      >
        {children}
      </a>
    </span>
  );
}
