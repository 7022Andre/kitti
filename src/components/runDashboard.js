import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactCountdownClock from 'react-countdown-clock';

import '../css/main.css';
import mp3 from '../static/alert.mp3';
import ShowTasks from './common/showTasks';
import Progress from './common/progress';

class RunDashboard extends Component {
  timeInSec = ((this.props.store.time.hours * 60) + this.props.store.time.minutes) * 60;
  
  constructor(props) {
    super(props);
    this.state = { percent: 0,
                   countdown: this.timeInSec
                 };
    this.increment = 100 / this.timeInSec;
    this.timer = this.timer.bind(this);
    this.alert = new Audio(mp3);
  }

  timer() {
    this.setState((prevState) => {
      return {
        percent: prevState.percent + this.increment,
        countdown: prevState.countdown - 1
      };
    });

    if (this.state.countdown === 180 || this.state.countdown === 120 || this.state.countdown === 60) {
      this.alert.play();
    }
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

    const timerDone = (history) => {
      this.alert.play();
      alert("Time's up. Start again?");
      this.props.history.push('/main');
    };

    return (
      <div className="Main">
        <div className="run-dashboard">
          <p></p>
          <h1>Kitti - Activity Timer</h1>
          <p></p>
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
                <img className="main-image" src={funGoal.display_src} alt={funGoal.caption}/>
              </button>
              <h5>Reward</h5>
            </div>
            <div>
              <button className="target-box">
                <img className="main-image" src={targetGoal.display_src} alt={targetGoal.caption}/>
              </button>
              <h5>Activity</h5>
            </div>
          </div>
        </div>
        <div className="countdown">
          <ReactCountdownClock seconds={this.timeInSec}
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
