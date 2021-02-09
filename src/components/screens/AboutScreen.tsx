import React from 'react';

import PageLayout from '../layouts/PageLayout';
import type { Profile as ProfileType } from '../../types/Profile';
import Profile from '../elements/Profile';
import SEO from '../shared/SEO';

type AboutScreenProps = {
  profile: ProfileType,
};

const AboutScreen = (props: AboutScreenProps): React.ReactElement => {
  const { profile } = props;

  return (
    <PageLayout>
      <SEO
        title="About"
        description={`${profile.firstName} ${profile.lastName}. ${profile.position}. ${profile.summary}`}
      />
      <Profile profile={profile} />
    </PageLayout>
  );
};

export default AboutScreen;
