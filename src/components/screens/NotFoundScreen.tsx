import React from 'react';

import PageLayout from '../layouts/PageLayout';
import PageHeader from '../shared/PageHeader';
import SEO from '../shared/SEO';

const NotFoundScreen = (): React.ReactElement => {
  return (
    <PageLayout>
      <SEO
        title="Page not found"
        description="Page not found"
      />
      <PageHeader>Page not found</PageHeader>
    </PageLayout>
  );
};

export default NotFoundScreen;
