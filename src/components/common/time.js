import React from 'react';
import PropTypes from 'prop-types';
import '../../css/time.css';

const time = (props) => {
  return (
    <div className="input">
      <div className="input-hours">
        <select
          value={props.store.hours}
          onChange={(e) => props.handleChange(e.target.value, 'hours')}
          required >
            {props.createArray(24).map(hour => <option key={hour} value={hour}>{hour}</option>)}
        </select>
        <h5>Hours</h5>
      </div>
      <div className="input-minutes">
        <select
          value={props.store.minutes}
          onChange={(e) => props.handleChange(e.target.value, 'minutes')}
          required >
            {props.createArray(60).map(minute => <option key={minute} value={minute}>{minute}</option>)}
        </select>
        <h5>Minutes</h5>
      </div>
      <div className="input-seconds">
        <select
          value={props.store.seconds}
          onChange={(e) => props.handleChange(e.target.value, 'seconds')}
          required >
            {props.createArray(60).map(second => <option key={second} value={second}>{second}</option>)}
        </select>
        <h5>Seconds</h5>
      </div>
    </div>
  );
};

time.propTypes = {
  hours: PropTypes.number.isRequired,
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired
};

export default time;