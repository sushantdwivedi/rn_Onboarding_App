import {combineReducers} from 'redux';
import auth from './auth';
import dashboard from './dashboard';
import getTarget from './getTarget';
import restaurant from './restaurant';

export default combineReducers({
  auth,
  dashboard,
  getTarget,
  restaurant,
});
