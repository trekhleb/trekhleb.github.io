import React from 'react';

import PageLayout from '../layouts/PageLayout';
import SEO from '../shared/SEO';
import PageHeader from '../shared/PageHeader';
import HyperLink from '../shared/HyperLink';
import { routes } from '../../constants/routes';

const SubscribeConfirmScreen = (): React.ReactElement => {
  return (
    <PageLayout>
      <SEO
        title="Subscription almost finished"
        description="Please check your inbox and confirm your subscription"
        noindex
      />
      <div className="mx-auto max-w-xl">
        <PageHeader>Almost finished...</PageHeader>
        <p className="text-lg leading-relaxed text-fg/90">
          Please check your inbox and confirm your subscription
        </p>
        <p className="mt-8">
          <HyperLink
            link={{ url: routes.home.path }}
            className="text-sm font-medium text-muted"
            hoverClassName="hover:text-fg"
          >
            <span className="link-underline">Back to the home page</span>
          </HyperLink>
        </p>
      </div>
    </PageLayout>
  );
};

export default SubscribeConfirmScreen;
