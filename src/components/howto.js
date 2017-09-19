import React from 'react';
import { Link } from 'react-router-dom';
import Header from './common/kittiHeader'

import '../css/howto.css';

export default () => {
  return (
    <div className="HowTo">
      <Header title={"Help"} />
      <div className="howto-content">
        <h3>How does it work?</h3>
        <div className="howto-feature">
          <p>Encourage your child to help you choose a task, a reward and an activty and set her/him up for success. Keep in mind that kids take longer to do tasks than you as an adult.</p>
        </div>
        <div className="howto-list">
          <ol>
            <li>Choose a task.</li>
            <li>Choose a reward.</li>
            <li>Choose an activity.</li>
            <li>Set the timer.</li>
            <li>Hit "Start".</li>
            <li>A progress bar and countdown will visualize the remaining fun time.</li>
          </ol>
        </div>
      </div>

      <h3>Watch a demo of Kitti below:</h3>
      <br />
      <div className="video">
        <iframe title="kitti-demo" src="//youtube.com/embed/uQV9P_b9dq8" frameBorder="0" allowFullScreen></iframe>
      </div>
      <br />
      <Link to="/main"><button className="btn btn-lg btn-success">Get Started</button></Link>
    </div>
  );
}
