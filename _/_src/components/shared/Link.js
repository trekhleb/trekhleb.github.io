// @flow
import React from 'react';
import type { Node } from 'react';
import { NavLink } from 'react-router-dom';

import { activeLinkColor } from '../../constants/style';

const defaultProps = {
  className: '',
};

type LinkProps = {
  to: string,
  children: Node,
  className?: string,
  startEnhancer?: Node,
};

const Link = (props: LinkProps): Node => {
  const {
    children,
    to,
    className = '',
    startEnhancer = null,
  } = props;

  const commonClasses = 'flex flex-row items-center';

  const isExternal = to.startsWith('http');

  const externalLink = (
    <a
      href={to}
      className={`${commonClasses} hover:${activeLinkColor} ${className}`}
    >
      {startEnhancer}
      {children}
    </a>
  );

  const internalLink = (
    <NavLink
      activeClassName={activeLinkColor}
      to={to}
      className={`${commonClasses} hover:${activeLinkColor} ${className}`}
      exact
    >
      {startEnhancer}
      {children}
    </NavLink>
  );

  return isExternal ? externalLink : internalLink;
};

Link.defaultProps = defaultProps;

export default Link;
