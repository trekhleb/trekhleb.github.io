import React from 'react';

import AboutScreen from '../components/screens/AboutScreen';
import { profile } from '../data/profile';

const Index = (): React.ReactElement => {
  return (
    <AboutScreen profile={profile} />
  );
};

export default Index;
