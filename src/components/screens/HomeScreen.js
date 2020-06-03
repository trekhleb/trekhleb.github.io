// @flow
import React from 'react';
import type { Node } from 'react';
import UserProfile from '../elements/UserProfile';

const HomeScreen = (): Node => {
  return (
    <div className="flex flex-col flex-grow justify-center items-center">
      <UserProfile />
    </div>
  );
};

export default HomeScreen;
