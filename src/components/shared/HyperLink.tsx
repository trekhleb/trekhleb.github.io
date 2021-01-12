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
};

const HyperLink = (props: HyperLinkProps): React.ReactElement | null => {
  const {
    link,
    children,
    className = '',
    activeClassName = '',
    startEnhancer = null,
  } = props;

  if (!link?.url) {
    return null;
  }

  const commonClasses = `flex flex-row items-center hover:${activeLinkColor}`;

  const isExternal = link.url.startsWith('http');

  const separator = startEnhancer ? (
    <span className="w-1" />
  ) : null;

  const externalLink = (
    <a
      href={link.url}
      className={`${commonClasses} ${className}`}
    >
      {startEnhancer}
      {separator}
      {children}
    </a>
  );

  const internalLink = (
    <Link
      to={link.url}
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
