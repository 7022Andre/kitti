import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './css/index.css';
import configureStore from './store/configureStore';
import routes from './routes';

const store = configureStore();

ReactDOM.render(
  <Provider store ={store}>
    <BrowserRouter>{routes}</BrowserRouter>
  </Provider>,
  document.getElementById('app')
);
