// @flow
import React from 'react';
import type { Node } from 'react';
import { Route, Switch } from 'react-router-dom';

import { routes } from '../constants/routes';
import NotFoundScreen from './screens/NotFoundScreen';
import HomeScreen from './screens/HomeScreen';

const Routes = (): Node => {
  return (
    <Switch>
      <Route exact path={routes.home}>
        <HomeScreen />
      </Route>
      <Route path="*">
        <NotFoundScreen />
      </Route>
    </Switch>
  );
};

export default Routes;
