import React from 'react';

import H1 from '../shared/H1';
import PageLayout from '../layouts/PageLayout';
import ScreenTitle from '../shared/ScreenTitle';

const BlogScreen = (): React.ReactElement => {
  return (
    <PageLayout>
      <ScreenTitle>Blog</ScreenTitle>
      <H1>Blog</H1>
      <p>
        In progress...
      </p>
    </PageLayout>
  );
};

export default BlogScreen;
