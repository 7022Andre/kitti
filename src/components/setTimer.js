import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/setTimer.css';
import Progress from './common/progress';

export default class SetTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectHour: 0,
      selectMinute: 0,
      selectSecond: 0,
    };
  }

  handleChange = (value, param) => {
    this.setState({ [param]: value });
  }

  render() {
    const now = Math.round(100/6 * 1);
    const hours = Array.from(Array(24).keys());
    const minsec = Array.from(Array(60).keys());

    return (
      <div className="SetTimer">
        <Progress now={now} />

        <h1>Set your time limit:</h1>
        <div className="input">
          <div className="input-hours">
            <h4>Hours</h4>
            <select value={this.state.selectHour} onChange={(e) => this.handleChange(e.target.value, 'selectHour')}>
              {hours.map(hour => <option value={hour}>{hour}</option>)}
            </select>
          </div>
          <div className="input-minutes">
            <h4>Minutes</h4>
            <select value={this.state.selectMinute} onChange={(e) => this.handleChange(e.target.value, 'selectMinute')}>
              {minsec.map(minute => <option value={minute}>{minute}</option>)}
            </select>
          </div>
          <div className="input-seconds">
            <h4>Seconds</h4>
            <select value={this.state.selectSecond} onChange={(e) => this.handleChange(e.target.value, 'selectSecond')}>
               {minsec.map(second => <option value={second}>{second}</option>)}
            </select>
          </div>
        </div>

        <div className="buttons">
          <Link to="/"><button className="back btn btn-warning">Go back</button></Link>
          <Link to="/StartGoal"><button className="forward btn btn-success">Next step</button></Link>
        </div>
      </div>
    );
  }
}
