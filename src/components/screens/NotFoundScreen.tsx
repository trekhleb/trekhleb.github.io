import React from 'react';

import PageLayout from '../layouts/PageLayout';
import ScreenTitle from '../shared/ScreenTitle';
import PageHeader from '../shared/PageHeader';

const NotFoundScreen = (): React.ReactElement => {
  return (
    <PageLayout>
      <ScreenTitle title="Page not found" />
      <PageHeader>Page not found</PageHeader>
    </PageLayout>
  );
};

export default NotFoundScreen;
