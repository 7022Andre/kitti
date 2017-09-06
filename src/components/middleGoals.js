import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import * as setKittiActions from '../actions/setKittiActions';
import tasks from '../data/tasks';

class MiddleGoals extends Component {
  handleChange = (display_src, caption, goalNo) => {
    if (caption === this.props.store[goalNo]['caption']) {
      this.props.actions.setMiddleGoal({
        middleGoals: {
          ...this.props.store,
          [goalNo]: {
            caption: '',
            display_src: '',
            active: false
          }
        }
      });
    } else {
      this.props.actions.setMiddleGoal({
        middleGoals: {
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
    const id = parseInt(this.props.match.params.id);
    const next = (id === 3) ? 1 : id + 1;
    const last = (id === 1) ? 3 : id - 1;
    const goal = this.props.store['goal' + id];

    return (
      <div className="MiddleGoals">
        <div className="tasks">
          <h3>Middle goal {id} of 3</h3>
          <p>This step is optional. Choose up to three middle goals. Remove a goal by clicking on it again.</p> 
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
            <Link to={"/middlegoals/" + last}><button className="btn btn-default">Last goal</button></Link>
            <Link to="/main/"><button className="btn btn-success">Back to Dashboard</button></Link>
            <Link to={"/middlegoals/" + next}><button className="btn btn-default">Next goal</button></Link>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(store, ownProps) {
  return {
    store: store['store']['middleGoals']
  };
}

function mapDispatchProps(dispatch) {
  return {
    actions: bindActionCreators(setKittiActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchProps)(MiddleGoals);
