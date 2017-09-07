import React from 'react';
import '../../css/time.css';

export default (props) => {
  return (
    <div className="input">
    <h5>Time limit for entire fun timer.</h5>
      <div className="input-hours input-group">
        <input
          type="number"
          className="form-control"
          value={props.store.hours}
          onChange={(e) => props.handleChange(e.target.value, 'hours')}
          min="0"
          max="23" />
        <h5>Hours</h5>
      </div>
      <div className="input-minutes input-group">
        <input
          type="number"
          className="form-control"
          value={props.store.minutes}
          onChange={(e) => props.handleChange(e.target.value, 'minutes')}
          min="1"
          max="60" />
        <h5>Minute(s)</h5>
      </div>
    </div>
  );
};
