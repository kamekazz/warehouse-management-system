import api from '../../util/Api';
import { MSG_ERROR, MSG_SUCCESS, MSG_WARNING } from '../types';

export const createLocation = (body, callback) => async dispatch => {
  try {
    const { data } = await api.post('location/create', body);
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
