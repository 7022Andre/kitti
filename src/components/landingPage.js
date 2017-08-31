import React from 'react';
import { Link } from 'react-router-dom';
import '../css/landingPage.css';

export default () => {
  return (
    <div className="Landing">
      <div className="Landing-main">
        <img src={process.env.PUBLIC_URL + 'img/logo.png'} className="Landing-logo" alt="logo" />
        <h1>Welcome to Kitti</h1>
        <h3>A Kids Activity Fun Timer</h3>
      </div>

      <div className="Landing-intro jumbotron">
        <h3>Why? Why? Why?</h3>
        <br />
        <p>Help your child understand and visualize time by setting goals.</p>
        <Link to="/setTimer"><button className="btn btn-success">Get Started</button></Link>
      </div>
    </div>
  );
};
