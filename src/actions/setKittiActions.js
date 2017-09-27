export function setTime(time) {
  return { type: 'SET_TIME', time };
}

export function setFunGoal(funGoal) {
  return { type: 'SET_FUN_GOAL', funGoal };
}

export function setTasks(tasks) {
  return { type: 'SET_TASKS', tasks };
}

export function setTargetGoal(targetGoal) {
  return { type: 'SET_TARGET_GOAL', targetGoal };
}

export function resetApp() {
  return { type: 'RESET_APP' };
}
