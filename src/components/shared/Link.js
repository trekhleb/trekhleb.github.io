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
};

const Link = (props: LinkProps): Node => {
  const { children, to, className = '' } = props;

  const isExternal = to.startsWith('http');

  const externalLink = (
    <a
      href={to}
      className={`hover:${activeLinkColor} ${className}`}
    >
      {children}
    </a>
  );

  const internalLink = (
    <NavLink
      activeClassName={activeLinkColor}
      to={to}
      className={`hover:${activeLinkColor} ${className}`}
      exact
    >
      {children}
    </NavLink>
  );

  return isExternal ? externalLink : internalLink;
};

Link.defaultProps = defaultProps;

export default Link;
