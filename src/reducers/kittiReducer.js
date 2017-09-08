const initialState = {
  time: {
    hours: 0,
    minutes: 0
  },
  funGoal: {
    caption: "",
    display_src: "",
    active: false
  },
  tasks: {
    goal1: {
      caption: "",
      display_src: "",
      active: false
    },
    goal2: {
      caption: "",
      display_src: "",
      active: false
    },
    goal3: {
      caption: "",
      display_src: "",
      active: false
    }
  }
};

export default function kittiReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_TIME':
      return Object.assign({...state}, action.time);
    case 'SET_START_GOAL':
      return Object.assign({...state}, action.startGoal);
    case 'SET_FUN_GOAL':
      return Object.assign({...state}, action.funGoal);
    case 'SET_TASKS':
      return Object.assign({
        ...state,
        tasks: {
          ...state.tasks,
        }
      }, action.tasks);
    case 'RESET_APP':
      return initialState;
    default:
      return state;
  }
}
