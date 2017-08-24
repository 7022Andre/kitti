import React from 'react';
import { Router, Route, Switch } from 'react-router';
import SetTimer from './components/setTimer';
import LandingPage from './components/landingPage';
import App from './components/app';

const routes = (
  <Route path="/" component={App}>
    <Switch>
      <Route path="landingPage" component={LandingPage} />
      <Route path="setTimer" component={SetTimer} />
    </Switch>
  </Route>
);

export default routes;
