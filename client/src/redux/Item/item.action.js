import api from '../../util/Api';
import { MSG_ERROR, MSG_SUCCESS, MSG_WARNING } from '../types';
export const createItem = body => async dispatch => {
  delete body.data;
  delete body.buttonDisable;
  try {
    const { data } = await api.post('item/create', body);
    console.log('data', data);
    if (data.success) {
      dispatch({ type: MSG_SUCCESS, payload: data.message });
    } else {
      dispatch({ type: MSG_ERROR, payload: data.message });
    }
  } catch (error) {
    console.log('error***', error);
    dispatch({ type: MSG_WARNING, payload: error });
  }
};
