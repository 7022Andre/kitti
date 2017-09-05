export function setTime(time) {
  return { type: 'SET_TIME', time };
}

export function setStartGoal(startGoal) {
  return { type: 'SET_START_GOAL', startGoal }
}

export function setFunGoal(funGoal) {
  return { type: 'SET_FUN_GOAL', funGoal }
}

export function setTargetGoal(targetGoal) {
  return { type: 'SET_TARGET_GOAL', targetGoal }
}

export function setMiddleGoal(middleGoals) {
  return { type: 'SET_MIDDLE_GOAL', middleGoals }
}
