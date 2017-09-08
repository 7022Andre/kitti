import React from 'react';
import '../../css/countdown.css';

export default (props) => {
  return (
    <div className="countdown-boxes">
      <div className="countdown-hours">
        <h4>{props.time.hours} hours</h4>
      </div>
      <div className="countdown-minutes">
        <h4>{props.time.minutes} mins</h4>
      </div>
    </div>
  );
};
