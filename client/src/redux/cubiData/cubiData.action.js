import api from '../../util/ApiWorldandMain';
import {
  GET_PRODUCT_INFO,
  MSG_ERROR,
  LOADING_CUBISCAN,
  CANCEL_ALL_CUBISCAN
} from '../types';

export const acGetWebData = upc => async (dispatch, getState) => {
  dispatch({ type: LOADING_CUBISCAN, payload: true });
  let body = {};
  body.item = upc;
  try {
    const { data } = await api.post('', body);

    if (data.success) {
      dispatch({ type: GET_PRODUCT_INFO, payload: data.data });
    } else {
      dispatch({ type: MSG_ERROR, payload: data.message });
    }
  } catch (error) {
    console.log('error***', error);
  }
  dispatch({ type: LOADING_CUBISCAN, payload: false });
};

export const acCancelSuctions = upc => async (dispatch, getState) => {
  dispatch({ type: CANCEL_ALL_CUBISCAN, payload: null });
};
