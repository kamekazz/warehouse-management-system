import api from '../../util/Api';
import {
  MSG_ERROR,
  MSG_SUCCESS,
  MSG_WARNING,
  ADD_NEW_PALLET,
  ADD_NEW_PALLET_BUTTON,
  GET_RECEIVING_TABLE
} from '../types';

export const acCreatePallet = body => async dispatch => {
  try {
    const { data } = await api.post('receiving/create', body);
    console.log('acCreatePallet', data);
    if (data.success) {
      dispatch({ type: ADD_NEW_PALLET, payload: data });
      dispatch({ type: MSG_SUCCESS, payload: data.message });
      dispatch(acGetPalletsByState('received'));
    } else {
      dispatch({ type: MSG_ERROR, payload: data.message });
    }
  } catch (error) {
    console.log('error***', error);
  }
};

export const acGetPalletsByState = status => async dispatch => {
  let body = {};
  body.status = status;
  try {
    const { data } = await api.post('receiving/status', body);
    console.log('acGetPalletsByState', data.pallets);
    if (data.success) {
      dispatch({ type: GET_RECEIVING_TABLE, payload: data.pallets });
      dispatch({ type: MSG_SUCCESS, payload: data.message });
    } else {
      dispatch({ type: MSG_ERROR, payload: data.message });
    }
  } catch (error) {
    console.log('error***', error);
  }
};

export const acCreatePalletButton = body => dispatch => {
  dispatch({ type: ADD_NEW_PALLET_BUTTON, payload: body });
};
