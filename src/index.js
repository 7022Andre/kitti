import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './css/index.css';
import routes from './routes';

ReactDOM.render(<BrowserRouter>{routes}</BrowserRouter>, document.getElementById('app'));
