import * as React from 'react';
import { PageProps } from 'gatsby';
import PageHeader from '../components/shared/PageHeader';

const NotFound = (props: PageProps): React.ReactElement => {
  return (
    <main>
      <title>Not found</title>
      <PageHeader>Page not found</PageHeader>
    </main>
  );
}

export default NotFound;
