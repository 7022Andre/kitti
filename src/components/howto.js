import React from 'react';
import { Link } from 'react-router-dom';
import Header from './common/kittiHeader'

export default () => {
  return (
    <div className="HowTo">
      <Header title={"Help with Kitti"} />
      <div className="howto-main">
        <h1>Demo</h2>
        
      </div>
      <Link to="/main"><button className="btn btn-lg btn-success">Get Started</button></Link>
    </div>
  );
}
