import React from 'react';

import PageLayout from '../layouts/PageLayout';
import SEO from '../shared/SEO';
import PageHeader from '../shared/PageHeader';

const SubscribeConfirmScreen = (): React.ReactElement => {
  return (
    <PageLayout>
      <SEO
        title="Subscription almost finished"
        description="Please check your inbox and confirm your subscription"
      />
      <PageHeader>Almost finished...</PageHeader>
      <p>
        Please check your inbox and confirm your subscription
      </p>
    </PageLayout>
  );
};

export default SubscribeConfirmScreen;
