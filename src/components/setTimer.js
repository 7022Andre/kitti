import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import '../css/setTimer.css';
import Progress from './common/progress';
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
    const { store } = this.props;
    const now = Math.round(100/6 * 1);

    function createOptionsArray(num) {
      var array = [];
      for(var i = 0; i < num; i++) {
        array.push(i);
      }
      return array;
    }

    return (
      <div className="SetTimer">
        <Progress now={now} />

        <h1>Time Limit</h1>
        <h4>Please choose the time limit for the entire fun timer.</h4>
        <div className="input">
          <div className="input-hours">
            <h4>Hours</h4>
            <select
              value={store.hours}
              onChange={(e) => this.handleChange(e.target.value, 'hours')}
              required >
                {createOptionsArray(24).map(hour => <option key={hour} value={hour}>{hour}</option>)}
            </select>
          </div>
          <div className="input-minutes">
            <h4>Minutes</h4>
            <select
              value={store.minutes}
              onChange={(e) => this.handleChange(e.target.value, 'minutes')}
              required >
                {createOptionsArray(60).map(minute => <option key={minute} value={minute}>{minute}</option>)}
            </select>
          </div>
          <div className="input-seconds">
            <h4>Seconds</h4>
            <select
              value={store.seconds}
              onChange={(e) => this.handleChange(e.target.value, 'seconds')}
              required >
                {createOptionsArray(60).map(second => <option key={second} value={second}>{second}</option>)}
            </select>
          </div>
        </div>

        <div className="buttons">
          <Link to="/"><button className="back btn btn-warning">Go back</button></Link>
          <Link to="/startGoal"><button className="forward btn btn-success">Next step</button></Link>
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
