import { Link } from 'gatsby';
import React from 'react';

type HyperLinkProps = {
  to: string,
  children: React.ReactNode,
  className?: string,
  activeClassName?: string,
  startEnhancer?: React.ReactNode,
};

const HyperLink = (props: HyperLinkProps): React.ReactElement => {
  const {
    to,
    children,
    className = '',
    activeClassName = '',
    startEnhancer = null,
  } = props;

  const commonClasses = 'flex flex-row items-center';

  const isExternal = to.startsWith('http');

  const separator = startEnhancer ? (
    <span className="w-1" />
  ) : null;

  const externalLink = (
    <a
      href={to}
      className={`${commonClasses} ${className}`}
    >
      {startEnhancer}
      {separator}
      {children}
    </a>
  );

  const internalLink = (
    <Link
      to={to}
      activeClassName={activeClassName}
      className={`${commonClasses} ${className}`}
    >
      {startEnhancer}
      {children}
    </Link>
  );

  return isExternal ? externalLink : internalLink;
};

export default HyperLink;
