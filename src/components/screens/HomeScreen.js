// @flow
import React from 'react';
import type { Node } from 'react';

import UserProfile from '../elements/UserProfile';
import { userData } from '../../database/userData';
import type { NavigationType } from '../../types/NavigationType';
import PageHeader from '../shared/PageHeader';

type HomeScreenProps = {
  navigation: NavigationType,
};

const HomeScreen = (props: HomeScreenProps): Node => {
  const { navigation } = props;

  return (
    <div className="flex flex-col flex-grow justify-center items-center">
      <PageHeader>{navigation.pageTitle}</PageHeader>
      <UserProfile userData={userData} />
    </div>
  );
};

export default HomeScreen;
