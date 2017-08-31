const initialState = {
  time: {
    hours: 0,
    minutes: 0,
    seconds: 0
  },
  goal: {
    caption: "",
    display_src: "",
    active: false
  }
};

export default function kittiReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_TIME':
      return Object.assign({...state}, action.time);
    case 'SET_GOAL':
      return Object.assign({...state}, action.goal);
    default:
      return state;
  }
}
