import React from 'react';

import H1 from '../shared/H1';
import PageLayout from '../layouts/PageLayout';
import ScreenTitle from '../shared/ScreenTitle';
import type { Profile as ProfileType } from '../../types/Profile';
import Profile from '../elements/Profile';

type AboutScreenProps = {
  profile: ProfileType,
};

const AboutScreen = (props: AboutScreenProps): React.ReactElement => {
  const { profile } = props;

  return (
    <PageLayout>
      <ScreenTitle>About</ScreenTitle>
      <H1>About</H1>
      <Profile profile={profile} />
    </PageLayout>
  );
};

export default AboutScreen;
