import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import '../css/setTimer.css';
import Progress from './common/progress';
import * as setTimerActions from '../actions/setTimerActions';

class SetTimer extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      time: {
        hours: 0,
        minutes: 0,
        seconds: 0
      }
    };
  }

  handleChange = (value, param) => {
    this.setState({
      time: {
        ...this.state.time,
        [param]: value
      },
    });
  }

  onClickSave = () => this.props.actions.setTime(this.state.time)

  render() {
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
        <h4>Please choose the time limit for the entire fun timer activity.</h4>
        <div className="input">
          <div className="input-hours">
            <h4>Hours</h4>
            <select
              value={this.state.time.hours}
              onChange={(e) => this.handleChange(e.target.value, 'hours')}
              required >
                {createOptionsArray(24).map(hour => <option key={hour} value={hour}>{hour}</option>)}
            </select>
          </div>
          <div className="input-minutes">
            <h4>Minutes</h4>
            <select
              value={this.state.time.minutes}
              onChange={(e) => this.handleChange(e.target.value, 'minutes')}
              required >
                {createOptionsArray(60).map(minute => <option key={minute} value={minute}>{minute}</option>)}
            </select>
          </div>
          <div className="input-seconds">
            <h4>Seconds</h4>
            <select
              value={this.state.time.seconds}
              onChange={(e) => this.handleChange(e.target.value, 'seconds')}
              required >
                {createOptionsArray(60).map(second => <option key={second} value={second}>{second}</option>)}
            </select>
          </div>
          <h1>Store: {this.props.storeTime.hours}:{this.props.storeTime.minutes}:{this.props.storeTime.seconds}</h1>
          <h1>Compo State: {this.state.time.hours}:{this.state.time.minutes}:{this.state.time.seconds}</h1>
        </div>

        <div className="buttons">
          <Link to="/"><button className="back btn btn-warning" onClick={this.onClickSave}>Go back</button></Link>
          <Link to="/startGoal"><button className="forward btn btn-success" onClick={this.onClickSave}>Next step</button></Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(store, ownProps) {
  return {
    storeTime: store['storeTime']['time']
  };
}

function mapDispatchProps(dispatch) {
  return {
    actions: bindActionCreators(setTimerActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchProps)(SetTimer);
