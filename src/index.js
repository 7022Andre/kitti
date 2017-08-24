import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';
import './css/index.css';
import routes from './routes';

ReactDOM.render(<Router>{routes}</Router>, document.getElementById('app'));
