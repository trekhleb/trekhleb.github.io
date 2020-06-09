// @flow
import React from 'react';
import type { Node } from 'react';
import { Route, Switch } from 'react-router-dom';

import { routes } from '../constants/routes';
import NotFoundScreen from './screens/NotFoundScreen';
import HomeScreen from './screens/HomeScreen';
import ProjectsScreen from './screens/ProjectsScreen';

const Routes = (): Node => {
  return (
    <Switch>
      <Route exact path={routes.about}>
        <HomeScreen />
      </Route>
      <Route exact path={routes.projects}>
        <ProjectsScreen />
      </Route>
      <Route path="*">
        <NotFoundScreen />
      </Route>
    </Switch>
  );
};

export default Routes;
