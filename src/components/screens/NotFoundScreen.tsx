import React from 'react';
import PageHeader from '../shared/PageHeader';
import PageLayout from '../layouts/PageLayout';
import ScreenTitle from '../shared/ScreenTitle';

const NotFoundScreen = (): React.ReactElement => {
  return (
    <PageLayout>
      <ScreenTitle>Not found</ScreenTitle>
      <title>Not found</title>
      <PageHeader>Page not found</PageHeader>
    </PageLayout>
  );
};

export default NotFoundScreen;
