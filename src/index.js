import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './css/index.css';

import Header from './components/common/header';
import Footer from './components/common/footer';

import LandingPage from './components/landingPage';
import Main from './components/main';
import SetTimer from './components/setTimer';
import StartGoal from './components/startGoal';

import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div className="container-fluid">
        <Header />
        <Route exact path="/" component={ LandingPage } />
        <Route path="/main" component={ Main } />
        <Route path="/setTimer" component={ SetTimer } />
        <Route path="/startGoal" component={ StartGoal } />
        <Footer />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);
