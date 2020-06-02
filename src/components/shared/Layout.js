// @flow
import React from 'react';
import type { Node } from 'react';
import NavigationMenu from '../elements/NavigationMenu';
import { framePadding } from '../../constants/styles';

type LayoutProps = {
  children: Node,
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
};

const menuContainerStyle = {
  display: 'flex',
  flexDirection: 'row',
  padding: framePadding,
  borderBottom: '1px solid #EEE',
};

const contentContainerStyle = {
  display: 'flex',
  flexDirection: 'row',
  flex: 1,
  padding: framePadding,
};

const Layout = (props: LayoutProps): Node => {
  const { children } = props;

  return (
    <div style={containerStyle}>
      <div style={menuContainerStyle}>
        <NavigationMenu />
      </div>
      <div style={contentContainerStyle}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
