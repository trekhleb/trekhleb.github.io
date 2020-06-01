// @flow
import React from 'react';
import type { Node } from 'react';
import UserProfile from '../elements/UserProfile';

const contentWrapperStyles = {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};

const HomeScreen = (): Node => {
  return (
    <div style={contentWrapperStyles}>
      <UserProfile />
    </div>
  );
};

export default HomeScreen;
