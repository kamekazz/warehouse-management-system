import api from '../../util/Api';
import { MSG_ERROR, MSG_SUCCESS } from '../types';

export const acPalletInfo = (id, callback) => async dispatch => {
  try {
    const { data } = await api.get(`pallet/id/${id}`);
    console.log('data', data);
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
