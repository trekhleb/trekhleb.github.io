import * as React from 'react';
import { PageProps } from 'gatsby';

import PageHeader from '../components/shared/PageHeader';

const Index = (props: PageProps): React.ReactElement => {
  return (
    <React.Fragment>
      <PageHeader>About</PageHeader>
      <p>
        About info
      </p>
    </React.Fragment>
  );
}

export default Index;
