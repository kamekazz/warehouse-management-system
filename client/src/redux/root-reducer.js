import { combineReducers } from 'redux';
import Auth from './Auth/user.reducer';

export default combineReducers({
  auth: Auth
});
