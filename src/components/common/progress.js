import React from 'react';
import ProgressBar from 'react-bootstrap/lib/ProgressBar';
import '../../css/progress.css';

export default (props) => {
  return (
    <div className="Progress container">
      <ProgressBar now={props.now} bsStyle="success" />
    </div>
  );
};
