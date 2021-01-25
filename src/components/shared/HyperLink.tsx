import { Link } from 'gatsby';
import React from 'react';

import type { Link as LinkType } from '../../types/Link';
import { activeLinkColor } from '../../constants/style';

type HyperLinkProps = {
  link: LinkType,
  children: React.ReactNode,
  className?: string,
  activeClassName?: string,
  startEnhancer?: React.ReactNode,
  formatted?: boolean,
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void,
};

const HyperLink = (props: HyperLinkProps): React.ReactElement | null => {
  const {
    link,
    children,
    className = '',
    activeClassName = '',
    startEnhancer = null,
    formatted = true,
    onClick = (e) => {},
  } = props;

  if (!link?.url) {
    return null;
  }

  const commonClasses = formatted
    ? `transition duration-200 ease-in-out flex flex-row items-center hover:${activeLinkColor}`
    : '';

  const isExternal = link.url.startsWith('http');
  const isHash = link.url.startsWith('#');

  const separator = startEnhancer ? (
    <span className="w-1" />
  ) : null;

  const externalLink = (
    <a
      href={link.url}
      className={`${commonClasses} ${className}`}
      onClick={onClick}
    >
      {formatted && startEnhancer}
      {formatted && separator}
      {children}
    </a>
  );

  const internalLink = (
    <Link
      to={link.url}
      activeClassName={activeClassName}
      className={`${commonClasses} ${className}`}
      onClick={onClick}
    >
      {formatted && startEnhancer}
      {formatted && separator}
      {children}
    </Link>
  );

  return isExternal || isHash ? externalLink : internalLink;
};

export default HyperLink;
