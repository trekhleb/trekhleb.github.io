import { Link } from 'gatsby';
import React from 'react';

import type { Link as LinkType } from '../../types/Link';

export type HyperLinkProps = {
  link: LinkType,
  children: React.ReactNode,
  className?: string,
  activeClassName?: string,
  // Marks the link active for nested routes as well (e.g. "Blog" while reading a post).
  partiallyActive?: boolean,
  hoverClassName?: string | null | undefined,
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
    partiallyActive = false,
    hoverClassName = null,
    startEnhancer = null,
    formatted = true,
    /* eslint-disable-next-line @typescript-eslint/no-empty-function */
    onClick = (): void => {},
  } = props;

  if (!link?.url) {
    return null;
  }

  const hoverClasses = hoverClassName || 'hover:text-accent';

  // `gap-1.5` is the default icon->label distance; callers override it when they need to.
  const commonClasses = formatted
    ? `inline-flex flex-row items-center gap-1.5 transition-colors duration-150 ease-out ${hoverClasses}`
    : '';

  const caption = link?.caption || undefined;

  const isExternal = link.url.startsWith('http');
  const isHash = link.url.startsWith('#');

  const externalLink = (
    <a
      href={link.url}
      className={`${commonClasses} ${className}`}
      onClick={onClick}
      title={caption}
      rel={isExternal ? 'noopener' : undefined}
    >
      {formatted && startEnhancer}
      {children}
    </a>
  );

  const internalLink = (
    <Link
      to={link.url}
      activeClassName={activeClassName}
      partiallyActive={partiallyActive}
      className={`${commonClasses} ${className}`}
      onClick={onClick}
      title={caption}
    >
      {formatted && startEnhancer}
      {children}
    </Link>
  );

  return isExternal || isHash ? externalLink : internalLink;
};

export default HyperLink;
