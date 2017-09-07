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
    function createOptionsArray(num) {
      var array = [];
      for(var i = 0; i < num; i++) {
        array.push(i);
      }
      return array;
    }
    return (
      <div className="SetTimer">
        <div className="time">
          <Time handleChange={this.handleChange} store={this.props.store} createArray={createOptionsArray} />
        </div>
        <h5>4. Time limit for entire fun timer.</h5>
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
