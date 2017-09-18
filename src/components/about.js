import React from 'react';
import { Link } from 'react-router-dom';
import '../css/about.css';

export default () => {
  return (
    <div className="About">
      <div className="about-main">
        <img src={process.env.PUBLIC_URL + 'img/logo.gif'} className="Landing-logo" alt="logo" />
        <h1>About Kitti</h1>
        <img src={process.env.PUBLIC_URL + 'img/logo.gif'} className="Landing-logo" alt="logo" />
      </div>
      <div className="about-feature">
        <div className="about-content">
          <div className="row about-content">
            <h3>What is Kitti?</h3>
            <p>
              You and your child choose a task, reward and activity and set the timer. A progressbar and
              countdown will visualize the remaining fun time.
            </p>
          </div>
          
          <div className="row about-content">
            <h3>Kitti?</h3>
            <p>
              Kitti is the abbreviation for <strong>Ki</strong>ds Ac<strong>t</strong>ivi<strong>t</strong>y
              T<strong>i</strong>mer and also sounds like a small cat ... meow.
            </p>
          </div>

          <div className="row about-content">
            <h3>How does it work? What can I do with it?</h3>
            <p>
              Check out a demo at <a href=''>here</a> to see how it works.
            </p>
            <p>
              Kitti is not intended to punish or force kids to do something in a too short amount of time.<br />
              Encourage your child to help you choose a task, a reward and an activty and set her/him up for success.
              Keep in mind that kids take longer to do tasks than you as an adult.
            </p>
          </div>

          <div className="row about-content">
            <h3>How and why did you write Kitti?</h3>
            <p>
              Kitti is my capstone project at Bloc.io - a mentorship- and project-based coding school.
              I came up with the idea while trying to explain to my daughter that the longer she takes to
              get dressed, brush her hair and make her bed the less time she can play before we need
              to go to school.<br />
              I initially got a pen and some paper out and drew a timeline with some boxes below it and
              was surprised how fast she can accomplish the tasks.<br />

              When I had to decide what I wanted to do for my capstone project I immediately knew that I
              wanted to turn this idea into an app. My mentor recommended to learn React.js and I could not
              be happier to have folllowed his advice.
            </p>
          </div>

          <div className="row about-content">
            <h3>Boring coding stuff</h3>
            <p>Kitti was written in React.js (15.6.1) and includes the following modules:</p>
            <ul>
              <li>redux (5.0.6)</li>
              <li>react-router (4.1.2)</li>
              <li>react-countdown-clock</li>
              <li>react-progressbar</li>
              <li>react-numeric-input</li>
            </ul>
          </div>
        </div>
      </div>
      <Link to="/main"><button className="btn btn-lg btn-success">Get Started</button></Link>
    </div>
  );
}
