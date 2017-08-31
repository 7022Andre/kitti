const initialState = {
  time: {
    hours: 0,
    minutes: 0,
    seconds: 0
  },
  startGoal: {
    caption: "",
    display_src: "",
    active: false
  },
  funGoal: {
    caption: "",
    display_src: "",
    active: false
  },
  targetGoal: {
    caption: "",
    display_src: "",
    active: false
  },
  middleGoals: {
    goal_1: {
      caption: "",
      display_src: "",
      active: false
    },
    goal_2: {
      caption: "",
      display_src: "",
      active: false
    },
    goal_3: {
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
    case 'SET_TARGET_GOAL':
      return Object.assign({...state}, action.targetGoal);
    case 'SET_MIDDLE_GOAL':
      return Object.assign({...state}, action.middleGoals);
    default:
      return state;
  }
}
