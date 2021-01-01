import * as React from 'react';

import PageHeader from '../shared/PageHeader';
import PageLayout from '../layouts/PageLayout';
import ScreenTitle from '../shared/ScreenTitle';

const AboutScreen = (): React.ReactElement => {
  return (
    <PageLayout>
      <ScreenTitle>About</ScreenTitle>
      <PageHeader>About</PageHeader>
      <p>
        About info
      </p>
    </PageLayout>
  );
};

export default AboutScreen;
