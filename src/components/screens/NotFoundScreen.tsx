import React from 'react';
import H1 from '../shared/H1';
import PageLayout from '../layouts/PageLayout';
import ScreenTitle from '../shared/ScreenTitle';

const NotFoundScreen = (): React.ReactElement => {
  return (
    <PageLayout>
      <ScreenTitle>Not found</ScreenTitle>
      <title>Not found</title>
      <H1>Page not found</H1>
    </PageLayout>
  );
};

export default NotFoundScreen;
