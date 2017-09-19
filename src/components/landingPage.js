import React from 'react';
import { Link } from 'react-router-dom';
import '../css/landingPage.css';
import Logo from '../static/logo.gif';

export default () => {
  return (
    <div className="Landing">
      <div className="Landing-main">
        <img src={Logo} className="logo" alt="logo" />
        <h1>Welcome to Kitti</h1>
        <h3>A Kids Activity Fun Timer</h3>
      </div>

      <div className="Landing-intro jumbotron">
        <h3>Why? Why? Why?</h3>
        <br />
        <p>Help your child understand and visualize time by setting goals.</p>
        <div>
          <Link to="/main"><button className="btn btn-lg btn-success">Get Started</button></Link>
        </div>
        <br />
        <div>
          <Link to="/howto"><button className="btn btn-lg btn-info">How does it work?</button></Link>
        </div>
      </div>
    </div>
  );
};
