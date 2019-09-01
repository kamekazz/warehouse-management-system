import api from '../../util/Api';
import { MSG_ERROR, MSG_SUCCESS, MSG_WARNING, ITEM_QUERY } from '../types';

export const createItem = body => async dispatch => {
  delete body.data;
  delete body.buttonDisable;
  try {
    const { data } = await api.post('item/create', body);
    if (data.success) {
      dispatch({ type: MSG_SUCCESS, payload: data.message });
      dispatch(searchLatsItemCreate());
    } else {
      dispatch({ type: MSG_ERROR, payload: data.message });
    }
  } catch (error) {
    console.log('error***', error);
    dispatch({ type: MSG_WARNING, payload: error });
  }
};

export const searchLatsItemCreate = () => async dispatch => {
  try {
    const { data } = await api.get('item/created');
    if (data.success) {
      dispatch({ type: ITEM_QUERY, payload: data.allNewItem });
    } else {
      dispatch({ type: MSG_ERROR, payload: data.message });
    }
  } catch (error) {
    console.log('error***', error);
    dispatch({ type: MSG_WARNING, payload: error });
  }
};
