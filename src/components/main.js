import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import '../css/main.css';
import Progress from './common/progress';
import SetTimer from './setTimer';
import * as setKittiActions from '../actions/setKittiActions';

class Main extends Component {
  render() {
    const startGoal = this.props.store.startGoal;
    const funGoal = this.props.store.funGoal;
    const targetGoal = this.props.store.targetGoal;
    
    return (
      <div className="Main">
        <div className="container-fluid">
          <h1>Dashboard</h1>
          <h3>Follow the numbers</h3>
        </div>
        <div className="boxes">
          <div className="row">
            <Progress />
          </div>
          <div className="dash-boxes row">
            <div className="col-md-3">
              <Link to="/startgoal">
                <button className="goal-box">
                  <img className="grid-image" src={startGoal.display_src} alt={startGoal.caption}/>
                </button>
              </Link>
            </div>
            <div className="task-boxes col-md-3 row">
              <Link to="/middlegoals">
                <button className="col-md-4 task-box">
                  <img className="grid-image"/>
                </button>
              </Link>
              <Link to="/middlegoals">
                <button className="col-md-4 task-box">
                  <img className="grid-image"/>
                </button>
              </Link>
              <Link to="/middlegoals">
                <button className="col-md-4 task-box">
                  <img className="grid-image"/>
                </button>
              </Link>
            </div>
            <div className="col-md-3">
              <Link to="/fungoal">
                <button className="fun-box">
                  <img className="grid-image" src={funGoal.display_src} alt={funGoal.caption}/>
                </button>
              </Link>
            </div>
            <div className="col-md-3">
              <Link to="/targetgoal">
                <button className="target-box">
                  <img className="grid-image" src={targetGoal.display_src} alt={targetGoal.caption}/>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="time-control">
          <SetTimer />
        </div>
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

