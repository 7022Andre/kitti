import { combineReducers } from 'redux';
import storeTime from './setTimerReducer';

const rootReducer = combineReducers({
  storeTime
});

export default rootReducer;
