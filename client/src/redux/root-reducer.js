import { combineReducers } from 'redux';
import Auth from './Auth/user.reducer';
import snackbar from './Notification/notification.reducer';
import locationReducer from './Location/location.reducer';

export default combineReducers({
  auth: Auth,
  snackbar,
  locationReducer
});
