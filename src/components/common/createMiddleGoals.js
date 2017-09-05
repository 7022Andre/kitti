import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  const goal = props['store']["goal" + props.id];

  return (
    <div className="tasks">
    </div>
  );
};
