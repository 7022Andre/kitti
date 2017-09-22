import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/header.css';

export default () => {
  return (
    <div className="Header">
      <ul className="nav nav-tabs">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/help">Help</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </div>
  );
};
