import React from 'react';
import '../../css/time.css';

export default (props) => {
  return (
    <div className="input">
      <div className="input-hours">
        <h4>Hours</h4>
        <select
          value={props.store.hours}
          onChange={(e) => props.handleChange(e.target.value, 'hours')}
          required >
            {props.createArray(24).map(hour => <option key={hour} value={hour}>{hour}</option>)}
        </select>
      </div>
      <div className="input-minutes">
        <h4>Minutes</h4>
        <select
          value={props.store.minutes}
          onChange={(e) => props.handleChange(e.target.value, 'minutes')}
          required >
            {props.createArray(60).map(minute => <option key={minute} value={minute}>{minute}</option>)}
        </select>
      </div>
      <div className="input-seconds">
        <h4>Seconds</h4>
        <select
          value={props.store.seconds}
          onChange={(e) => props.handleChange(e.target.value, 'seconds')}
          required >
            {props.createArray(60).map(second => <option key={second} value={second}>{second}</option>)}
        </select>
      </div>
    </div>
  );
};
