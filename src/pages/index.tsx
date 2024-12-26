import React from 'react';

import AboutScreen from '../components/screens/AboutScreen';
import { PROFILE } from '../data/profile';

const Index = (): React.ReactElement => {
  return (
    <AboutScreen profile={PROFILE} />
  );
};

export default Index;
