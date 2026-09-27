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
          [
          <a href={href} className="font-medium !underline !underline-offset-1 !decoration-black dark:!decoration-white hover:text-accent hover:!decoration-accent">
            {children}
          </a>
          ]
        </span>
      </sup>
    );
  }

  return (
    <span className="not-prose">
      <a href={href} className="font-medium underline hover:text-accent">
        {children}
      </a>
    </span>
  );
}
