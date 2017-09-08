import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import '../css/main.css';
import Progress from './common/progress';
import CreateTasks from './common/createTasks';
import Countdown from './common/countdown';
import * as setKittiActions from '../actions/setKittiActions';

class Main extends Component {
  render() {
    const funGoal = this.props.store.funGoal;
    const tasks = this.props.store.tasks;
    const time = this.props.store.time;
    
    return (
      <div className="Main">
        <div className='dashboard'>
          <h1>Kitti - Dashboard</h1>
        </div>
        <div className="boxes">
          <Progress />
          <div className="dash-boxes">
            <div>
              <CreateTasks tasks={tasks} />
              <h5>Tasks</h5>
            </div>
            <div>
              <button className="fun-box">
                <img className="grid-image" src={funGoal.display_src} alt={funGoal.caption}/>
              </button>
              <h5>Fun Goal</h5>
            </div>
          </div>
        </div>

        <Countdown time={time} />
        <h5>Fun time left</h5>
        <br />
        <Link to="/main">
          <button className='btn btn-lg btn-success'>STOP</button>
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

function mapDispatchProps(dispatch) {
  return {
    actions: bindActionCreators(setKittiActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchProps)(Main);
