import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/header.css';

export default () => {
  return (
    <div className="Header">
      <ul className="nav nav-tabs">
        <li><Link to="/">Home</Link></li>
        <li><a href="#">About</a></li>
        <li className="pull-right"><a href="#">Sign up | Login</a></li>
      </ul>
    </div>
  );
};
