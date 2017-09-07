import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Time from './common/time';
import * as setKittiActions from '../actions/setKittiActions';

class SetTimer extends Component {
  handleChange = (value, param) => {
    this.props.actions.setTime({
      time: {
        ...this.props.store,
        [param]: value
      }
    });
  }

  render() {
    return (
      <div className="SetTimer">
        <Time handleChange={this.handleChange} store={this.props.store} />
      </div>
    );
  }
}

function mapStateToProps(store, ownProps) {
  return {
    store: store['store']['time']
  };
}

function mapDispatchProps(dispatch) {
  return {
    actions: bindActionCreators(setKittiActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchProps)(SetTimer);
