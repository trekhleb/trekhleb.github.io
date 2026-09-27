import React from 'react';

import PageLayout from '../layouts/PageLayout';
import SEO from '../shared/SEO';
import SubscriptionForm from '../shared/SubscriptionForm';
import ErrorBoundary from '../shared/ErrorBoundary';
import PageHeader from '../shared/PageHeader';

const SubscribeScreen = (): React.ReactElement => {
  return (
    <PageLayout>
      <SEO
        title="Subscribe"
        description="Subscribe to get my latest posts and projects updates by email"
      />
      <div className="mx-auto max-w-xl">
        <PageHeader>Subscribe to the newsletter</PageHeader>
        <ErrorBoundary>
          <SubscriptionForm withHeader={false} />
        </ErrorBoundary>
      </div>
    </PageLayout>
  );
};

export default SubscribeScreen;
