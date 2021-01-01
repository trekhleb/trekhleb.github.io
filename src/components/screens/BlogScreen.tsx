import React from 'react';

import PageHeader from '../shared/PageHeader';
import PageLayout from '../layouts/PageLayout';
import ScreenTitle from '../shared/ScreenTitle';

const BlogScreen = (): React.ReactElement => {
  return (
    <PageLayout>
      <ScreenTitle>Blog</ScreenTitle>
      <PageHeader>Blog</PageHeader>
      <p>
        In progress...
      </p>
    </PageLayout>
  );
};

export default BlogScreen;
