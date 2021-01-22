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
};

const HyperLink = (props: HyperLinkProps): React.ReactElement | null => {
  const {
    link,
    children,
    className = '',
    activeClassName = '',
    startEnhancer = null,
    formatted = true,
  } = props;

  if (!link?.url) {
    return null;
  }

  const commonClasses = formatted ? `flex flex-row items-center hover:${activeLinkColor}` : '';

  const isExternal = link.url.startsWith('http');

  const separator = startEnhancer ? (
    <span className="w-1" />
  ) : null;

  const externalLink = (
    <a
      href={link.url}
      className={`${commonClasses} ${className}`}
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
    >
      {formatted && startEnhancer}
      {formatted && separator}
      {children}
    </Link>
  );

  return isExternal ? externalLink : internalLink;
};

export default HyperLink;
