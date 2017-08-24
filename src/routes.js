import React from 'react';
import { Route } from 'react-router-dom';

import Header from './components/common/header';
import Footer from './components/common/footer';
import LandingPage from './components/landingPage';
import SetTimer from './components/setTimer';

const routes = (
  <div className="container text-center">
    <Header />
    <Route exact path="/" component={ LandingPage } />
    <Route path="/setTimer" component={ SetTimer } />
    <Footer />
  </div>
);

export default routes;
