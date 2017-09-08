import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import * as setKittiActions from '../actions/setKittiActions';
import tasks from '../data/tasks';

class Tasks extends Component {
  handleChange = (display_src, caption, goalNo) => {
    if (caption === this.props.store[goalNo]['caption']) {
      this.props.actions.setTasks({
        tasks: {
          ...this.props.store,
          [goalNo]: {
            caption: '',
            display_src: '',
            active: false
          }
        }
      });
    } else {
      this.props.actions.setTasks({
        tasks: {
          ...this.props.store,
          [goalNo]: {
            caption,
            display_src,
            active: true
          }
        }
      });
    }
  }

  render() {
    const id = parseInt(this.props.match.params.id, 10);
    const next = (id === 3) ? 1 : id + 1;
    const last = (id === 1) ? 3 : id - 1;
    const goal = this.props.store['goal' + id];

    return (
      <div className="Tasks">
        <div className="tasks">
          <h3>Task {id} of 3</h3>
          <p>Choose up to three tasks. Remove a task by clicking on it again.</p> 
          <div className="task-grid">
            {tasks.map((task, i) => 
              <figure className={goal.active && goal.caption === task.caption ? "grid-figure active" : "grid-figure"} key={i}>
                <button className="grid-button" onClick={() => this.handleChange(process.env.PUBLIC_URL + task.display_src, task.caption, "goal" + id)}>
                  <img className="grid-image" src={process.env.PUBLIC_URL + task.display_src} alt={task.caption}/>
                </button>
                <figcaption>
                  <p>{task.caption}</p>
                </figcaption>
              </figure>
            )}
          </div>
          <div className="btn-group">
            <Link to={"/tasks/" + last}><button className="btn btn-default">Last task</button></Link>
            <Link to="/main/"><button className="btn btn-success">Back to Dashboard</button></Link>
            <Link to={"/tasks/" + next}><button className="btn btn-default">Next task</button></Link>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(store, ownProps) {
  return {
    store: store['store']['tasks']
  };
}

function mapDispatchProps(dispatch) {
  return {
    actions: bindActionCreators(setKittiActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchProps)(Tasks);