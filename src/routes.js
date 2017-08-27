import React from 'react';
import { Route } from 'react-router-dom';

import Header from './components/common/header';
import Footer from './components/common/footer';

import LandingPage from './components/landingPage';
import SetTimer from './components/setTimer';
import StartGoal from './components/startGoal';

export default (
  <div className="container text-center">
    <Header />
    <Route exact path="/" component={ LandingPage } />
    <Route path="/setTimer" component={ SetTimer } />
    <Route path="/startGoal" component={ StartGoal } />
    <Footer />
  </div>
);
