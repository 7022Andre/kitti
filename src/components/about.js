import React from 'react';
import '../css/about.css';

export default () => {
  return (
    <div className="About">
      <div className="About-main">
        <h1>About Kitti</h1>
      </div>
      <div className="About-feature">
        <div className="About-content">
          <h3>What is Kitti?</h3>
          <p>
            Kitti is an app that (hopefully) helps your child to understand time by visualizing it
            rather than just talking about it.
          </p>
        
          <h3>Kitti? That's a weird name.</h3>
          <p>
            Kitti is an abbreviation for <strong>Ki</strong>ds Ac<strong>t</strong>ivi<strong>t</strong>y
            T<strong>i</strong>mer and also sounds like a small cat ... meow.
          </p>

          <h3>Does that mean you don't like puppies?</h3>
          <p>No, not at all. I actually like dogs more than cats and was simply trying to find an
           abbreviation that is easy to remember, sounds like an animal and would also be able to
           describe "Kids Activity Timer."  
          </p>

          <h3>How and why did you write Kitti?</h3>
          <p>
            Kitti is my capstone project at Bloc.io - a mentorship- and project-based coding school.
            I came up with the idea while trying to explain to my daughter that the longer she takes to
            brush her hair, make her bed or get dressed, the less time she has to play before she
            has to go to school.<br />
            I initially got a marker and some paper out and drew a timeline with some boxes below it and
            was surprised how fast she can get dressed and make her bed.<br />

            When it was time for my capstone I immediately knew that I wanted to write this idea. My
            mentor recommended to learn React.js and I could not be happier to folllowed his advice.
          </p>

          <h3>Boring coding stuff</h3>
          <p>Kitti was written in React.js (15.6.1) and includes the following modules:</p>
          <ul>
            <li>redux (5.0.6)</li>
            <li>react-router (4.1.2)</li>
            <li>react-countdown-clock (2.00)</li>
          </ul>

        </div>
      </div>
    </div>
  );
}
