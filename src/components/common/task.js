import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/task.css';
import tasks from '../../data/tasks';

export default (props) => {
  return (
    <div className="tasks">
      <div className="task-buttons">
        <Link to="/main">
          <button className="btn btn-warning">GO BACK</button>
        </Link>
      </div>
      <div className="task-grid">
        {tasks.map((task, i) =>
          <figure className={props.store.active && props.store.caption === task.caption ? 'grid-figure active' : 'grid-figure'} key={i}>
            <button className="grid-button" onClick={() => props.handleChange(process.env.PUBLIC_URL + task.display_src, task.caption)}>
              <img className="grid-image" src={process.env.PUBLIC_URL + task.display_src} alt={task.caption} />
            </button>
            <figcaption>
              <p>{task.caption}</p>
            </figcaption>
          </figure>,
        )}
      </div>
    </div>
  );
};
