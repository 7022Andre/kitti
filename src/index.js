import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import './css/index.css';
import Header from './components/common/header';
import Footer from './components/common/footer';
import LandingPage from './components/landingPage';
import Main from './components/main';
import About from './components/about';
import FunGoal from './components/funGoal';
import TargetGoal from './components/targetGoal';
import Tasks from './components/tasks';
import RunDashboard from './components/runDashboard';
import NotFound from './components/notFound';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={ LandingPage } />
          <Route path="/main" component={ Main } />
          <Route path="/about" component={ About } />
          <Route path="/fungoal" component={ FunGoal } />
          <Route path="/targetgoal" component={ TargetGoal } />
          <Route path="/tasks/:id" component={ Tasks } />
          <Route path="/run" component={ RunDashboard } />
          <Route component={ NotFound } />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);
