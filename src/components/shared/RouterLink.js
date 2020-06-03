// @flow
import React from 'react';
import type { Node } from 'react';
import { NavLink } from 'react-router-dom';
import { activeLinkColor } from '../../constants/style';

type RouterLinkProps = {
  to: string,
  children: Node,
};

const RouterLink = (props: RouterLinkProps): Node => {
  const { children, to } = props;

  return (
    <NavLink
      activeClassName={activeLinkColor}
      to={to}
      exact
    >
      {children}
    </NavLink>
  );
};

export default RouterLink;
