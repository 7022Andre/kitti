import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactCountdownClock from 'react-countdown-clock';
import Progress from 'react-progressbar';

import '../css/main.css';
import ShowTasks from './common/showTasks';

class RunDashboard extends Component {
  render() {
    const funGoal = this.props.store.funGoal;
    const targetGoal = this.props.store.targetGoal;
    const tasks = this.props.store.tasks;
    const time = this.props.store.time;
    const countdown = ((time.hours * 60) + time.minutes) * 60;

    return (
      <div className="Main">
        <div className='dashboard'>
          <h1>Kitti - Dashboard</h1>
        </div>
        <div className="boxes">
          <div>
            <Progress completed={10} />
          </div>
          <div className="dash-boxes">
            <div>
              <ShowTasks tasks={tasks} />
              <h5>Tasks</h5>
            </div>
            <div>
              <button className="fun-box">
                <img className="grid-image" src={funGoal.display_src} alt={funGoal.caption}/>
              </button>
              <h5>Fun Goal</h5>
            </div>
            <div>
              <button className="target-box">
                <img className="grid-image" src={targetGoal.display_src} alt={targetGoal.caption}/>
              </button>
              <h5>Target Goal</h5>
            </div>
          </div>
        </div>
        <div className="countdown">
          <ReactCountdownClock seconds={countdown}
                               color="#AC4A83"
                               alpha={0.9}
                               size={150}
                                />
        </div>
        <h2>Fun time left</h2>
        <br />
        <Link to="/main">
          <button className='btn btn-lg btn-danger'>STOP</button>
        </Link>
      </div>
    );
  }
}

function mapStateToProps(store, ownProps) {
  return {
    store: store['store']
  };
}

export default connect(mapStateToProps)(RunDashboard);
