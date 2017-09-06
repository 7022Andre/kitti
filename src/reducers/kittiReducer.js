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
  console.log(action)
  console.log(action.type)
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
      return Object.assign({
        ...state,
        middleGoals: {
          ...state.middleGoals,
        }
      }, action.middleGoals);
    case 'RESET_APP':
      return initialState;
    default:
      return state;
  }
}
