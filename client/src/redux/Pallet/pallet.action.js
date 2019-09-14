import api from '../../util/Api';
import {
  MSG_ERROR,
  MSG_SUCCESS,
  MSG_WARNING,
  PAGINATION_FOR_PALLET,
  LOADING_PALLET_TABLE,
  ADD_PALLET_ARRAY
} from '../types';

export const acPalletInfo = (id, callback) => async dispatch => {
  try {
    const { data } = await api.get(`pallet/id/${id}`);
    if (data.success) {
      dispatch({ type: MSG_SUCCESS, payload: data.message });
      callback(data.pallet);
    } else {
      dispatch({ type: MSG_ERROR, payload: data.message });
    }
  } catch (error) {
    console.log('error***', error);
  }
};

export const acGetAllPallet = (skuNumber, pagination, page) => async (
  dispatch,
  getState
) => {
  dispatch({ type: ADD_PALLET_ARRAY, payload: [] });
  dispatch({ type: LOADING_PALLET_TABLE, payload: true });
  let payload = {
    pagination,
    page
  };
  dispatch({ type: PAGINATION_FOR_PALLET, payload });
  let body = {};
  body.pagination = getState().locationReducer.pagination;
  body.page = getState().palletReducer.page;
  body.skuNumber = skuNumber.skuNumber;
  try {
    const { data } = await api.get('pallet', {
      params: body
    });
    console.log('data', data);
    if (data.success) {
      dispatch({ type: ADD_PALLET_ARRAY, payload: data });
      dispatch({ type: LOADING_PALLET_TABLE, payload: false });
    } else {
      dispatch({ type: LOADING_PALLET_TABLE, payload: false });
    }
  } catch (error) {
    console.log('error***', error);
    dispatch({ type: LOADING_PALLET_TABLE, payload: false });
  }
};
