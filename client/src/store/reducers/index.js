import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorsReducers from './errorsReducers';

export default combineReducers({
  auth: authReducer,
  errors: errorsReducers
});
