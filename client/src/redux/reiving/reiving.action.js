import api from '../../util/Api';
import {
  MSG_ERROR,
  MSG_SUCCESS,
  MSG_WARNING,
  ADD_NEW_PALLET,
  ADD_NEW_PALLET_BUTTON
} from '../types';

export const acCreatePallet = body => async dispatch => {
  try {
    const { data } = await api.post('pallet/create', body);
    console.log('data', data);
    if (data.success) {
      dispatch({ type: ADD_NEW_PALLET, payload: data });
      dispatch({ type: MSG_SUCCESS, payload: data.message });
    } else {
      dispatch({ type: MSG_ERROR, payload: data.message });
    }
  } catch (error) {
    console.log('error***', error);
    dispatch({ type: MSG_WARNING, payload: error });
  }
};

export const acCreatePalletButton = body => dispatch => {
  console.log('body', body);
  dispatch({ type: ADD_NEW_PALLET_BUTTON, payload: body });
};
