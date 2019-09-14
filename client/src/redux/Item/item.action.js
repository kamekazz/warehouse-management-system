import api from '../../util/Api';
import {
  MSG_ERROR,
  MSG_SUCCESS,
  MSG_WARNING,
  ITEM_QUERY,
  GET_LAST_100_ITEM,
  LOADING_ITEM_TABLE,
  PAGINATION_FOR_ITEM
} from '../types';

export const acQueryItem = (skuNumber, pagination, page) => async (
  dispatch,
  getState
) => {
  dispatch({ type: ITEM_QUERY, payload: [] });
  dispatch({ type: LOADING_ITEM_TABLE, payload: true });
  let payload = {
    pagination,
    page
  };
  dispatch({ type: PAGINATION_FOR_ITEM, payload });
  let body = {};
  body.pagination = getState().itemReducer.pagination;
  body.page = getState().itemReducer.page;
  body.skuNumber = skuNumber.skuNumber;
  console.log('skuNumber', skuNumber);
  try {
    const { data } = await api.get('item', { params: body });
    console.log('acQueryItem', data);
    if (data.success) {
      dispatch({ type: ITEM_QUERY, payload: data.items });
    } else {
      dispatch({ type: MSG_ERROR, payload: data.message });
    }
  } catch (error) {
    console.log('error***', error);
    dispatch({ type: MSG_WARNING, payload: error });
  }
};

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

export const updateItem = body => async dispatch => {
  try {
    const { data } = await api.post('item/update', body);
    if (data.success) {
      dispatch({ type: MSG_SUCCESS, payload: data.message });
      dispatch(searchLatsItemCreate());
      console.log('data.item', data.item);
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
      dispatch({ type: GET_LAST_100_ITEM, payload: data.allNewItem });
    } else {
      dispatch({ type: MSG_ERROR, payload: data.message });
    }
  } catch (error) {
    console.log('error***', error);
    dispatch({ type: MSG_WARNING, payload: error });
  }
};

export const deleteItem = skuNumber => async dispatch => {
  let body = {};
  body.skuNumber = skuNumber;
  try {
    const { data } = await api.post('item/delete', body);
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
