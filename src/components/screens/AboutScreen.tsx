import React from 'react';

import H1 from '../shared/H1';
import PageLayout from '../layouts/PageLayout';
import ScreenTitle from '../shared/ScreenTitle';

const AboutScreen = (): React.ReactElement => {
  return (
    <PageLayout>
      <ScreenTitle>About</ScreenTitle>
      <H1>About</H1>
      <p>
        About info
      </p>
    </PageLayout>
  );
};

export default AboutScreen;
