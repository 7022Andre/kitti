import React from 'react';
import { Link } from 'react-router-dom';
import Header from './common/kittiHeader';
import '../css/about.css';

export default () => {
  return (
    <div className="About">
      <Header title={"About Kitti"} />
      <div className="about-feature">
        <div className="about-content">
          <div className="about-content">
            <h3>What is Kitti?</h3>
            <p>
              You and your child choose a task, reward and activity and set the timer. A progress bar and
              countdown will visualize the remaining fun time.
              The basic idea is that the longer you take to complete tasks the less fun time you have.
            </p>
          </div>
          
          <div className="about-content">
            <h3>Kitti?</h3>
            <p>
              Kitti is the abbreviation for <strong>Ki</strong>ds Ac<strong>t</strong>ivi<strong>t</strong>y
              T<strong>i</strong>mer and also sounds like a small cat ... meow.
            </p>
          </div>

          <div className="about-content">
            <h3>How does it work? What can I do with it?</h3>
            <p>
              Check out the <Link to='/help'><button className="btn btn-large btn-success">help page</button></Link> to see how it works.
            </p>
            <p>
              Kitti is not intended to force kids to do something in a short amount of time.<br />
              Encourage your child to help you choose a task, a reward and an activty and set her/him up for success.
              Keep in mind that kids take longer to do tasks than you as an adult.
            </p>
          </div>

          <div className="about-content">
            <h3>How and why did you write Kitti?</h3>
            <p>
              Kitti is my capstone project at Bloc.io - a mentorship- and project-based coding school.
              I came up with the idea while trying to explain to my daughter that the longer she takes to
              get dressed, brush her hair and make her bed the less time she has to play before we need
              to go to school.<br />
              I initially got a pen and some paper out and drew a timeline with some boxes below it and
              was surprised how fast she can finish the tasks.<br />

              When I had to decide what I wanted to do for my capstone project I immediately knew that I
              wanted to turn this idea into an app. My mentor recommended to learn React.js and I could not
              be happier to have folllowed his advice.
            </p>
          </div>

          <div className="about-content">
            <h3>Boring coding stuff</h3>
            <p>Kitti was written in React.js (15.6.1) using <a href="https://github.com/facebookincubator/create-react-app">create-react-app</a> and includes the following modules:</p>
            <ul>
              <li>redux (5.0.6)</li>
              <li>react-router (4.1.2)</li>
              <li><a href="https://github.com/pughpugh/react-countdown-clock">react-countdown-clock</a></li>
              <li><a href="https://github.com/abdennour/react-progressbar">react-progressbar (modified)</a></li>
              <li><a href="https://github.com/vlad-ignatov/react-numeric-input">react-numeric-input</a></li>
              <li><a href="http://freesound.org/people/JustinBW/sounds/80921/">Alert sound</a></li>
            </ul>
          </div>
        </div>
      </div>
      <Link to="/main"><button className="btn btn-lg btn-success">Get Started</button></Link>
    </div>
  );
}
