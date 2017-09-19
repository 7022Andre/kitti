import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import '../css/main.css';
import Header from './common/kittiHeader'
import CreateTasks from './common/createTasks';
import SetTimer from './setTimer';
import * as setKittiActions from '../actions/setKittiActions';

class Main extends Component {
  render() {
    const funGoal = this.props.store.funGoal;
    const targetGoal = this.props.store.targetGoal;
    const tasks = this.props.store.tasks;
    const time = this.props.store.time;

    const checkApp = (history) => {
      if (!funGoal.active || !targetGoal.active || !tasks.goal1.active) {
        alert("Please choose at least one task, reward and activity.");
      } else if (time.minutes > 0 || time.hours > 0) {
        this.props.history.push('/run');
      } else {
        alert("Please enter a valid time.");
      }
    };

    const resetApp = () => {
      this.props.actions.resetApp();
      alert("Kitt has been reset.")
    };

    return (
      <div className="Main">
        <Header title={"Kitti - Settings"} />
        <div className="boxes">
          <h4>Add up to three tasks, a reward and an activity by clicking on a box. Then set the timer and hit start.</h4>
          <div className="dash-boxes">
            <div>
              <CreateTasks tasks={tasks} />
              <h5>Task(s)</h5>
            </div>
            <div>
              <Link to="/fungoal">
                <button className="fun-box">
                  <img className="main-image" src={funGoal.display_src} alt={funGoal.caption}/>
                </button>
              </Link>
              <h5>Reward</h5>
            </div>
            <div>
              <Link to="/targetgoal">
                <button className="target-box">
                  <img className="main-image" src={targetGoal.display_src} alt={targetGoal.caption}/>
                </button>
              </Link>
              <h5>Activity</h5>
            </div>
          </div>
        </div>

        <SetTimer />
        <h5>Time limit</h5>
        <br />
        <button className='btn btn-lg btn-success' onClick={() => checkApp()}>START</button>
        <br />
        <br />
        <button className='btn btn-danger' onClick={() => resetApp()}>Reset</button>
      </div>
    );
  }
}

function mapStateToProps(store, ownProps) {
  return {
    store: store['store']
  };
}

function mapDispatchProps(dispatch) {
  return {
    actions: bindActionCreators(setKittiActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchProps)(Main);
