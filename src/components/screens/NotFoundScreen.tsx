import React from 'react';

import PageLayout from '../layouts/PageLayout';
import PageHeader from '../shared/PageHeader';
import SEO from '../shared/SEO';
import HyperLink from '../shared/HyperLink';
import { routes, TOP_NAV } from '../../constants/routes';

const NotFoundScreen = (): React.ReactElement => {
  const links = [routes.home, ...TOP_NAV].map((route) => {
    const url = route.path === '/' ? route.path : `${route.path}/`;
    const label = route.path === '/' ? 'Home' : route.name;
    return (
      <li key={route.path}>
        <HyperLink
          link={{ url }}
          className="text-sm font-medium text-muted"
          hoverClassName="hover:text-fg"
        >
          <span className="link-underline">{label}</span>
        </HyperLink>
      </li>
    );
  });

  return (
    <PageLayout>
      <SEO
        title="Page not found"
        description="Page not found"
        noindex
      />
      <div className="mx-auto max-w-xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-wider text-muted">404</p>
        <PageHeader>Page not found</PageHeader>
        <p className="text-lg leading-relaxed text-fg/90">
          The page you are looking for does not exist or has moved.
          Here are a few places to go instead:
        </p>
        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
          {links}
        </ul>
      </div>
    </PageLayout>
  );
};

export default NotFoundScreen;
