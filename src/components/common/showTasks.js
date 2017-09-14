import React from 'react';

export default (props) => {
  const goals = props['tasks'];

  function createGoal (goalNo) {
    const goal = goals['goal' + goalNo];
    return (
      <button className='task-box'>
        <img className='grid-image' src={goal.display_src} alt={goal.caption}/>
      </button>
    );
  }

  return (
    <div className='tasks'>
      {createGoal(1)}
      {goals.goal2.active ? createGoal(2) : false }
      {goals.goal3.active ? createGoal(3) : false }
    </div>
  );
};
