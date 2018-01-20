import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';

// Generate our combined reducer from the other reducers
export default combineReducers({
  auth: AuthReducer
});
