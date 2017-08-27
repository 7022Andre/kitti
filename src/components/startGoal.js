import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Progress from './common/progress';

export default class StartGoal extends Component {
  render() {
    const now = Math.round(100/6 * 2);

    return (
      <div className="StartGoal">
        <Progress now={now} />
        
        <h1>START GOAL</h1>

        <div className="buttons">
          <Link to="/setTimer"><button className="back btn btn-warning">Go back</button></Link>
          <Link to="/"><button className="forward btn btn-success">Next step</button></Link>
        </div>
      </div>
    );
  }
}
