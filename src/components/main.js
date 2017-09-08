import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import '../css/main.css';
import Progress from './common/progress';
import CreateTasks from './common/createTasks';
import SetTimer from './setTimer';
import Buttons from './common/buttons';
import * as setKittiActions from '../actions/setKittiActions';

class Main extends Component {
  render() {
    const funGoal = this.props.store.funGoal;
    const targetGoal = this.props.store.targetGoal;
    const tasks = this.props.store.tasks;
    const resetApp = this.props.actions.resetApp;
    
    const startKitti = () => {

    }
    
    return (
      <div className="Main">
        <div className='dashboard'>
          <h1>Kitti - Dashboard</h1>
          <h4>Add tasks and goals by clicking on the box. Then set the timer and start.</h4>
        </div>
        <div className="boxes">
          <div className="row">
            <Progress />
          </div>
          <div className="dash-boxes row">
            <div>
              <CreateTasks tasks={tasks} />
              <h5>Tasks</h5>
            </div>
            <div>
              <Link to="/fungoal">
                <button className="fun-box">
                  <img className="grid-image" src={funGoal.display_src} alt={funGoal.caption}/>
                </button>
              </Link>
              <h5>Fun Goal</h5>
            </div>
            <div>
              <Link to="/targetgoal">
                <button className="target-box">
                  <img className="grid-image" src={targetGoal.display_src} alt={targetGoal.caption}/>
                </button>
              </Link>
              <h5>Target Goal</h5>
            </div>
          </div>
        </div>

        <SetTimer />
        <br />
        <Buttons startKitti={startKitti} resetApp={resetApp} />
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
