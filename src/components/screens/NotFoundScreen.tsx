import React from 'react';

import PageLayout from '../layouts/PageLayout';
import ScreenTitle from '../shared/ScreenTitle';
import H, { hLevel } from '../shared/H';

const NotFoundScreen = (): React.ReactElement => {
  return (
    <PageLayout>
      <ScreenTitle title="Page not found" />
      <H level={hLevel.h1}>Page not found</H>
    </PageLayout>
  );
};

export default NotFoundScreen;
