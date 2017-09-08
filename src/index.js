import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import './css/index.css';
import Header from './components/common/header';
import Footer from './components/common/footer';
import LandingPage from './components/landingPage';
import Main from './components/main';
import FunGoal from './components/funGoal';
import Tasks from './components/tasks';
import RunDashboard from './components/runDashboard';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div className="container-fluid">
        <Header />
        <Route exact path="/" component={ LandingPage } />
        <Route path="/main" component={ Main } />
        <Route path="/fungoal" component={ FunGoal } />
        <Route path="/tasks/:id" component={ Tasks } />
        <Route path="/run" component={ RunDashboard } />
        
        <Footer />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);
