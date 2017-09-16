import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactCountdownClock from 'react-countdown-clock';

import '../css/main.css';
import ShowTasks from './common/showTasks';
import Progress from './common/progress';

class RunDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { percent: 0,
                   countdown: ((this.props.store.time.hours * 60) + this.props.store.time.minutes) * 60
                 };
    this.increment = 100 / this.state.countdown;
    this.timer = this.timer.bind(this);
  }

  timer() {
    this.setState({ percent: this.state.percent + this.increment });
    if (this.state.percent > 99) { 
      clearInterval(this.interval);
    }
  }

  componentDidMount() {
     this.interval = setInterval(this.timer, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const funGoal = this.props.store.funGoal;
    const targetGoal = this.props.store.targetGoal;
    const tasks = this.props.store.tasks;

    const timerDone = () => {
      alert("Time's up. Click ok to start another timer.");
      this.props.history.push('/main');
    };

    return (
      <div className="Main">
        <div className='dashboard'>
          <h1>Kitti</h1>
          <h4>Timer Overview</h4>
        </div>
        <div className="boxes">
          <div className="progressbar">
            <Progress completed={this.state.percent} />
          </div>
          <div className="dash-boxes">
            <div>
              <ShowTasks tasks={tasks} />
              <h5>Task(s)</h5>
            </div>
            <div>
              <button className="fun-box">
                <img className="grid-image" src={funGoal.display_src} alt={funGoal.caption}/>
              </button>
              <h5>Reward</h5>
            </div>
            <div>
              <button className="target-box">
                <img className="grid-image" src={targetGoal.display_src} alt={targetGoal.caption}/>
              </button>
              <h5>Activity</h5>
            </div>
          </div>
        </div>
        <div className="countdown">
          <ReactCountdownClock seconds={this.state.countdown}
                               color="#AC4A83"
                               alpha={0.9}
                               size={150}
                               onComplete={timerDone}
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
