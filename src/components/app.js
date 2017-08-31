import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import LandingPage from './landingPage';
import * as setKittiActions from '../actions/setKittiActions';

function mapStateToProps(store, ownProps) {
  return {
    store: store['store']
  };
}

function mapDispatchProps(dispatch) {
  return {
    actions: bindActionCreators(setKittiActions, dispatch)
  };
}

const App = connect(mapStateToProps, mapDispatchProps)(LandingPage);

export default App;
