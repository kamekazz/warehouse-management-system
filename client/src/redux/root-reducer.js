import { combineReducers } from 'redux';
import Auth from './Auth/user.reducer';
import snackbar from './Notification/notification.reducer';
import locationReducer from './Location/location.reducer';
import itemReducer from './Item/item.reducer';
import reivingReducer from './reiving/reiving.reducer';
import palletReducer from './Pallet/pallet.reducer';

export default combineReducers({
  auth: Auth,
  snackbar,
  locationReducer,
  itemReducer,
  reivingReducer,
  palletReducer
});
