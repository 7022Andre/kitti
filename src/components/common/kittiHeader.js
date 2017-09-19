import React from 'react';
import '../../css/kittiHeader.css';
import Logo from '../../static/logo.gif';

export default (props) => {
  return (
    <div className="comp-header">
      <img src={Logo} className="logo" alt="logo" />
      <div>
      <h2>{props.title}{props.taskId}</h2>
      <h4>{props.subtitle}</h4>
      </div>
      <img src={Logo} className="logo" alt="logo" />
    </div>
  );
};
