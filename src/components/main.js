import React, { Component} from 'react';
import { Link } from 'react-router-dom';

import Progress from './common/progress';

export default class Main extends Component {
  render() {

    return (
      <div className="Main">
        <div className="">
          <h1>Dashboard</h1>
          <h3>Follow the numbers</h3>
        </div>
        <div className="control">
          <Progress />
          <div className="row">
            <div className="col-md-3 start-box grid-figure">
            BOX
            </div>
            <div className="col-md-2 task-boxes grid-figure">
            BOXES
            </div>
            <div className="col-md-3 fun-box grid-figure">
            BOX
            </div>
            <div className="col-md-3 target-box grid-figure">
            BOX
            </div>
          </div>
        </div>

      </div>
    );
  }
}
