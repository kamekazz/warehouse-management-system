import api from '../../util/Api';
import {
  MSG_ERROR,
  MSG_SUCCESS,
  MSG_WARNING,
  ADD_NEW_PALLET,
  ADD_NEW_PALLET_BUTTON,
  GET_RECEIVING_TABLE,
  MSG_INFO,
  DIALOG_STATUS,
  CLEANED_PALLET_INFO,
  PickPallet,
  UPDATE_LOCATION_TABLE
} from '../types';

export const acCreatePallet = body => async dispatch => {
  try {
    const { data } = await api.post('receiving/create', body);
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

export const acPickPallet = body => async dispatch => {
  dispatch({ type: PickPallet, payload: body });
  let query = {};
  query.skuNumber = body.skuNumber;
  try {
    const { data } = await api.get('location', { params: query });
    if (data.success) {
      dispatch({ type: UPDATE_LOCATION_TABLE, payload: data.locations });
    } else {
      dispatch({ type: MSG_ERROR, payload: data.error });
    }
  } catch (error) {
    console.log('error***', error);
    dispatch({ type: MSG_WARNING, payload: error });
  }
};

export const acGetPalletsByState = status => async dispatch => {
  let body = {};
  body.status = status;
  try {
    const { data } = await api.post('receiving/status', body);
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

export const acSendDynamicToLocation = id => async dispatch => {
  let body = {};
  body.id = id;
  dispatch({ type: DIALOG_STATUS, payload: false });
  dispatch({ type: MSG_INFO, payload: 'sending pallet to location' });
  try {
    const { data } = await api.post('receiving/dynamicsend', body);
    if (data.success) {
      dispatch({ type: MSG_SUCCESS, payload: data.message });
      dispatch({ type: CLEANED_PALLET_INFO, payload: null });
      dispatch(acGetPalletsByState('received'));
    } else {
      dispatch({ type: MSG_ERROR, payload: data.message });
    }
  } catch (error) {
    console.log('error***', error);
  }
};

export const acSendConsolidationLocation = (id, location) => async dispatch => {
  let body = {};
  body.id = id;
  body.location = location;
  dispatch({ type: DIALOG_STATUS, payload: false });
  dispatch({ type: MSG_INFO, payload: 'sending pallet to location' });
  try {
    const { data } = await api.post('receiving/send', body);
    if (data.success) {
      dispatch({ type: MSG_SUCCESS, payload: data.message });
      dispatch({ type: CLEANED_PALLET_INFO, payload: null });
      dispatch(acGetPalletsByState('received'));
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

export const acDialogState = body => dispatch => {
  dispatch({ type: DIALOG_STATUS, payload: body });
};
