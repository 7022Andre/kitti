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
        <h4>Please choose the time limit for the entire fun timer.</h4>
        <div className="time">
          <Time handleChange={this.handleChange} store={this.props.store} createArray={createOptionsArray}/>
        </div>
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
