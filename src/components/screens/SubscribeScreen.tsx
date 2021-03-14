import React from 'react';

import PageLayout from '../layouts/PageLayout';
import SEO from '../shared/SEO';
import SubscriptionForm from '../shared/SubscriptionForm';
import ErrorBoundary from '../shared/ErrorBoundary';

const SubscribeScreen = (): React.ReactElement => {
  return (
    <PageLayout>
      <SEO
        title="Subscribe"
        description="Subscribe to get my latest posts and projects updates by email"
      />
      <div className="flex flex-row justify-center items-center">
        <div className="max-w-md">
          <ErrorBoundary>
            <SubscriptionForm />
          </ErrorBoundary>
        </div>
      </div>
    </PageLayout>
  );
};

export default SubscribeScreen;
