import { Link } from 'gatsby';
import React from 'react';

import type { Link as LinkType } from '../../types/Link';

export type HyperLinkProps = {
  link: LinkType,
  children: React.ReactNode,
  className?: string,
  activeClassName?: string,
  separatorClassName?: string,
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
    separatorClassName = 'w-2',
    hoverClassName = null,
    startEnhancer = null,
    formatted = true,
    /* eslint-disable-next-line @typescript-eslint/no-empty-function */
    onClick = (): void => {},
  } = props;

  if (!link?.url) {
    return null;
  }

  const hoverClasses = hoverClassName || 'hover:text-red-600';

  const commonClasses = formatted
    ? `transition duration-200 ease-in-out flex flex-row items-center ${hoverClasses}`
    : '';

  const caption = link?.caption || undefined;

  const isExternal = link.url.startsWith('http');
  const isHash = link.url.startsWith('#');

  const separator = startEnhancer ? (
    <span className={separatorClassName} />
  ) : null;

  const externalLink = (
    <a
      href={link.url}
      className={`${commonClasses} ${className}`}
      onClick={onClick}
      title={caption}
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
      title={caption}
    >
      {formatted && startEnhancer}
      {formatted && separator}
      {children}
    </Link>
  );

  return isExternal || isHash ? externalLink : internalLink;
};

export default HyperLink;
