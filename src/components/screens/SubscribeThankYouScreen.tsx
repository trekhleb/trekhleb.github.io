import React from 'react';

import PageLayout from '../layouts/PageLayout';
import SEO from '../shared/SEO';
import PageHeader from '../shared/PageHeader';
import HyperLink from '../shared/HyperLink';
import { routes } from '../../constants/routes';

const SubscribeThankYouScreen = (): React.ReactElement => {
  return (
    <PageLayout>
      <SEO
        title="Subscription confirmed"
        description="Your subscription has been confirmed"
        noindex
      />
      <div className="mx-auto max-w-xl">
        <PageHeader>Subscription confirmed</PageHeader>
        <p className="text-lg leading-relaxed text-fg/90">
          Your subscription has been confirmed.
        </p>
        <p className="mt-3 text-lg leading-relaxed text-fg/90">
          Thank you for subscribing!
        </p>
        <p className="mt-8">
          <HyperLink
            link={{ url: `${routes.blog.path}/` }}
            className="text-sm font-medium text-muted"
            hoverClassName="hover:text-fg"
          >
            <span className="link-underline">Read the latest articles</span>
          </HyperLink>
        </p>
      </div>
    </PageLayout>
  );
};

export default SubscribeThankYouScreen;
