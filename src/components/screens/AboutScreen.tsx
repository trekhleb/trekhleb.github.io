import * as React from 'react';

import PageHeader from '../shared/PageHeader';

const AboutScreen = (): React.ReactElement => {
  return (
    <React.Fragment>
      <PageHeader>About</PageHeader>
      <p>
        About info
      </p>
    </React.Fragment>
  );
}

export default AboutScreen;
