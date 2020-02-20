import api from '../../util/ApiWorldandMain';
import { GET_PRODUCT_INFO, MSG_ERROR } from '../types';

export const acGetWebData = upc => async (dispatch, getState) => {
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
};
