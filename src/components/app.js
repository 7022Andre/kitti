import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import LandingPage from './landingPage';
import * as setTimerActions from '../actions/setTimerActions';

function mapStateToProps(store, ownProps) {
  return {
    storeTime: store['storeTime']['time']
  };
}

function mapDispatchProps(dispatch) {
  return {
    actions: bindActionCreators(setTimerActions, dispatch)
  };
}

const App = connect(mapStateToProps, mapDispatchProps)(LandingPage);

export default App;
