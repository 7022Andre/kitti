import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MiddleGoalTask from './common/middleGoalTask';
import * as setKittiActions from '../actions/setKittiActions';

class MiddleGoals extends Component {
  handleChange = (display_src, caption, goalNo) => {
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
  render() {
    const id = parseInt(this.props.match.params.id);
    const next = (id === 3) ? 1 : id + 1;
    const last = (id === 1) ? 3 : id - 1;

    return (
      <div className="MiddleGoals">
        <MiddleGoalTask handleChange={this.handleChange} store={this.props.store} id={"goal" + id} next={next} last={last}/>
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
