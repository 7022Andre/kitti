import React from 'react';
import NumericInput from 'react-numeric-input';
import '../../css/time.css';

export default (props) => {
  return (
    <div className="input">
      <div className="hour-field">
        <NumericInput
          className="input-hours"
          min={0}
          max={5}
          value={props.store.hours}
          onChange={(valueAsNumber) => props.handleChange(valueAsNumber, 'hours')}
        />
        <h5>Hour(s)</h5>
      </div>

      <div className="minute-field">
        <NumericInput
          className="input-minutes"
          min={0}
          max={60}
          value={props.store.minutes}
          onChange={(valueAsNumber) => props.handleChange(valueAsNumber, 'minutes')}
        />
        <h5>Minute(s)</h5>
      </div>
    </div>
  );
};
