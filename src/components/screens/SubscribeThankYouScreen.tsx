import React from 'react';

import PageLayout from '../layouts/PageLayout';
import SEO from '../shared/SEO';
import PageHeader from '../shared/PageHeader';

const SubscribeThankYouScreen = (): React.ReactElement => {
  return (
    <PageLayout>
      <SEO
        title="Subscription confirmed"
        description="Your subscription has been confirmed"
      />
      <PageHeader>Subscription confirmed</PageHeader>
      <p className="mb-3">
        Your subscription has been confirmed.
      </p>
      <p>
        Thank you for subscribing!
      </p>
    </PageLayout>
  );
};

export default SubscribeThankYouScreen;
