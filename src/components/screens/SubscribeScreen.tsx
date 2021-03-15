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
      <PageHeader>Subscribe to the newsletter</PageHeader>
      <div className="flex flex-row justify-start items-center">
        <div className="max-w-md">
          <ErrorBoundary>
            <SubscriptionForm withHeader={false} />
          </ErrorBoundary>
        </div>
      </div>
    </PageLayout>
  );
};

export default SubscribeScreen;
