import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  const goals = props['middleGoals'];

  function createGoal (goalNo) {
    const goal = props['middleGoals']['goal' + goalNo];

    <Link to={'/middlegoals/' + goalNo} >
      <button className='task-box'>
        <img className='grid-image' src={goal.display_src} alt={goal.caption}/>
      </button>
    </Link>
  }

  return (
    <div className='middleGoals'>
      {createGoal(1)}
      {goals.goal2.active ? createGoal(2) : false }
      {goals.goal3.active ? createGoal(3) : false }
    </div>
  );
};

//Create first goal by default, other goals only if active ... Link element not created