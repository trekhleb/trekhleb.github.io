import React from 'react';

type LinkProps = {
  href: string;
  children: React.ReactNode;
  asRef?: boolean;
};

export function Link(props: LinkProps): React.ReactElement {
  const { children, href, asRef } = props;

  if (asRef) {
    return (
      <sup>
        <span className="not-prose">
          <a href={href} className="font-medium underline hover:text-red-600">
            [{children}]
          </a>
        </span>
      </sup>
    );
  }

  return (
    <span className="not-prose">
      <a href={href} className="font-medium underline hover:text-red-600">
        {children}
      </a>
    </span>
  );
}
