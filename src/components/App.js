// @flow
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Layout from './Layout';
import Routes from './Routes';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
