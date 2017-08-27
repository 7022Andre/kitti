const initialState = {
  time: {
    hours: 0,
    minutes: 0,
    seconds: 0
  }
};

export default function setTimerReducer(state = initialState, action) {
  switch(action.type) {
    case 'SET_TIME':
      return { ...state, time: action.time };

    default:
      return state;
  }
}
