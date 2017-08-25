import React, { Component } from 'react';
import ProgressBar from 'react-bootstrap/lib/ProgressBar';
import '../../css/progress.css';

export default class Progress extends Component {
  render(now) {
    return (
      <div className="Progress container">
        <ProgressBar now={this.props.now} bsStyle="success" />
      </div>
    );
  }
}
