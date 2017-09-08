import React from 'react';
import ProgressBar from 'react-bootstrap/lib/ProgressBar';

export default (props) => {
  return (
    <div className="Progress">
      <ProgressBar now={props.now} bsStyle="success" />
    </div>
  );
};
