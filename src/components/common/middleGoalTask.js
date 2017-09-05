import React from 'react';
import { Link } from 'react-router-dom';

import tasks from '../../data/tasks';

export default (props) => {
  const goal = props['store']["goal" + props.id];

  return (
    <div className="tasks">
      <h3>Please choose middle goal {props.id} of 3.</h3>
      <p>This step is optional. You can choose up to three middle goals.</p> 
      <div className="task-grid">
        {tasks.map((task, i) => 
          <figure className={goal.active && goal.caption === task.caption ? "grid-figure active" : "grid-figure"} key={i}>
            <button className="grid-button" onClick={() => props.handleChange(process.env.PUBLIC_URL + task.display_src, task.caption, "goal" + props.id)}>
              <img className="grid-image" src={process.env.PUBLIC_URL + task.display_src} alt={task.caption}/>
            </button>
            <figcaption>
              <p>{task.caption}</p>
            </figcaption>
          </figure>
        )}
      </div>
      <div className="btn-group">
        <Link to={"/middlegoals/" + props.last}><button className="btn btn-default">Last goal</button></Link>
        <Link to="/main/"><button className="btn btn-success">Back to Dashboard</button></Link>
        <Link to={"/middlegoals/" + props.next}><button className="btn btn-default">Next goal</button></Link>
      </div>
    </div>
  );
};
