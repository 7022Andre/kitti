import React from 'react';
import { Link } from 'react-router-dom';
import Header from './common/kittiHeader';
import '../css/help.css';

export default () => {
  return (
    <div className="Help">
      <Header title={'Help'} />
      <div className="help-content">
        <div>
          <h3>How does it work?</h3>
          <div className="help-feature">
            <p>Encourage your child to help you choose a task, a reward and an activty and set her/him up for success. Keep in mind that kids take longer to do tasks than you as an adult.</p>
          </div>
        </div>
        <div className="help-list jumbotron">
          <ol>
            <li>Choose a task.</li>
            <li>Choose a reward.</li>
            <li>Choose an activity.</li>
            <li>Set the timer.</li>
            <li>Hit "Start".</li>
            <li>A progress bar and countdown will visualize the remaining fun time.</li>
            <li>An alert will sound when there are 3, 2 and 1 minute(s) left.</li>
          </ol>
        </div>
      </div>

      <h3>Watch a demo of Kitti</h3>
      <br />
      <div className="video">
        <iframe title="kitti-demo" src="//youtube.com/embed/uQV9P_b9dq8" frameBorder="0" allowFullScreen />
      </div>
      <br />
      <Link to="/main"><button className="btn btn-lg btn-success">Get Started</button></Link>
    </div>
  );
};
