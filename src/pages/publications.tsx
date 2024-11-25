import React from 'react';

import PublicationsScreen from '../components/screens/PublicationsScreen';
import { publications } from '../data/publications';

const Publications = (): React.ReactElement => {
  return (
    <PublicationsScreen publications={publications} />
  );
};

export default Publications;
