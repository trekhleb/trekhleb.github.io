import React from 'react';

import PublicationsScreen from '../components/screens/PublicationsScreen';
import { PUBLICATIONS } from '../data/publications';

const Publications = (): React.ReactElement => {
  return (
    <PublicationsScreen publications={PUBLICATIONS} />
  );
};

export default Publications;
