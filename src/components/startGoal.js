import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../css/startGoal.css';
import { Link } from 'react-router-dom';
import Progress from './common/progress';
import Task from './common/task';
import tasks from '../data/tasks';

import * as setKittiActions from '../actions/setKittiActions';

class StartGoal extends Component {
  handleChange = (display_src, caption) => {
    this.props.actions.setGoal({
      goal: {
        ...this.props.store,
        caption,
        display_src,
        active: true
      }
    });
  }

  render() {
    const now = Math.round(100/6 * 2);

    return (
      <div className="StartGoal">
        <Progress now={now} />

        <h3>Please choose your goal</h3>
        <div className="tasks">
          <div className="task-grid">
            {tasks.map((task, i) => <Task task={task} key={i} handleChange={this.handleChange} store={this.props.store}/>)}
          </div>
        </div>

        <div className="buttons">
          <Link to="/setTimer"><button className="back btn btn-warning">Go back</button></Link>
          <Link to="/"><button className="forward btn btn-success">Submit</button></Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(store, ownProps) {
  return {
    store: store['store']['goal']
  };
}

function mapDispatchProps(dispatch) {
  return {
    actions: bindActionCreators(setKittiActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchProps)(StartGoal);
