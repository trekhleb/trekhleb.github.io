// @flow
import React from 'react';
import type { Node } from 'react';
import { Route, Switch } from 'react-router-dom';

import { routes } from '../constants/routes';
import UserProfile from './UserProfile';
import NotFound from './NotFound';

const Routes = (): Node => {
  return (
    <Switch>
      <Route exact path={routes.home}>
        <UserProfile />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Routes;
