import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Task from './common/task';
import * as setKittiActions from '../actions/setKittiActions';

class FunGoal extends Component {
  handleChange = (display_src, caption) => {
    this.props.actions.setFunGoal({
      funGoal: {
        ...this.props.store,
        caption,
        display_src,
        active: true
      }
    });
  }
  render() {
    return (
      <div className="FunGoal">
        <h3>Choose a reward.</h3>
        <Task handleChange={this.handleChange} store={this.props.store} />
      </div>
    );
  }
}

function mapStateToProps(store, ownProps) {
  return {
    store: store['store']['funGoal']
  };
}

function mapDispatchProps(dispatch) {
  return {
    actions: bindActionCreators(setKittiActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchProps)(FunGoal);
