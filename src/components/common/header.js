import React, { Component } from 'react';
import '../../css/header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <ul className="nav nav-tabs">
          <li><a href="">Home</a></li>
          <li><a href="#">About</a></li>
          <li className="pull-right"><a href="#">Sign in | Login</a></li>
        </ul>
      </div>
    );
  }
}

export default Header;
