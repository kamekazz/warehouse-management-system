import { combineReducers } from 'redux';
import Auth from './Auth/user.reducer';
import snackbar from './Notification/notification.reducer';

export default combineReducers({
  auth: Auth,
  snackbar
});
