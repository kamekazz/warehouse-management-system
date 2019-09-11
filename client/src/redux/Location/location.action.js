import api from '../../util/Api';
import {
  MSG_ERROR,
  MSG_SUCCESS,
  MSG_WARNING,
  LOCATION_QUERY,
  PAGINATION_FOR_LOCATION,
  LAST_QUERY_BODY,
  LOADING_SEARCH_TABLE
} from '../types';

export const acPaginationLocation = (pagination, page) => async (
  dispatch,
  getState
) => {
  let payload = {
    pagination,
    page
  };
  dispatch({ type: LOADING_SEARCH_TABLE, payload: true });
  let body = getState().locationReducer.lastQuery;
  body.pagination = getState().locationReducer.pagination;
  body.page = getState().locationReducer.page;
  dispatch({ type: PAGINATION_FOR_LOCATION, payload });
  try {
    const { data } = await api.get('location', {
      params: body
    });
    if (data.success) {
      dispatch({ type: LOCATION_QUERY, payload: data });
      dispatch({ type: LOADING_SEARCH_TABLE, payload: false });
    } else {
      dispatch({ type: MSG_ERROR, payload: data.message });
      dispatch({ type: LOADING_SEARCH_TABLE, payload: false });
    }
  } catch (error) {
    console.log('error***', error);
    dispatch({ type: LOADING_SEARCH_TABLE, payload: false });
  }
};

export const queryLocation = body => async (dispatch, getState) => {
  dispatch({ type: LOADING_SEARCH_TABLE, payload: true });
  dispatch({ type: LAST_QUERY_BODY, payload: body });
  let payload = {
    pagination: 50,
    page: 1
  };
  dispatch({ type: PAGINATION_FOR_LOCATION, payload });
  body.pagination = getState().locationReducer.pagination;
  body.page = getState().locationReducer.page;
  try {
    const { data } = await api.get('location', { params: body });
    if (data.success) {
      dispatch({ type: LOCATION_QUERY, payload: data });
      dispatch({ type: LOADING_SEARCH_TABLE, payload: false });
    } else {
      dispatch({ type: MSG_ERROR, payload: data.message });
      dispatch({ type: LOADING_SEARCH_TABLE, payload: false });
    }
  } catch (error) {
    console.log('error***', error);
    dispatch({ type: LOADING_SEARCH_TABLE, payload: false });
  }
};

export const createLocation = (body, callback) => async dispatch => {
  try {
    const { data } = await api.post('location/create', body);
    if (data.success) {
      dispatch({ type: MSG_SUCCESS, payload: data.message });
      callback(data.allNewLocation);
    } else {
      dispatch({ type: MSG_ERROR, payload: data.message });
    }
  } catch (error) {
    console.log('error***', error);
    dispatch({ type: MSG_WARNING, payload: error });
  }
};

export const getCreateLocation = callback => async dispatch => {
  try {
    const { data } = await api.get('location/create');
    if (data.success) {
      callback(data.allNewLocation);
    } else {
      dispatch({ type: MSG_ERROR, payload: data.message });
    }
  } catch (error) {
    console.log('error***', error);
    dispatch({ type: MSG_WARNING, payload: error });
  }
};

export const updateSizeLocation = (
  location,
  size,
  status,
  callback
) => async dispatch => {
  let body = {};
  body['location'] = location;
  body['maxSize'] = size;
  body['status'] = status;
  try {
    const { data } = await api.post('location/update', body);
    if (data.success) {
      dispatch({ type: MSG_SUCCESS, payload: data.message });
      callback();
    } else {
      dispatch({ type: MSG_ERROR, payload: data.message });
      callback();
    }
  } catch (error) {
    console.log('error***', error);
    dispatch({ type: MSG_WARNING, payload: error });
  }
};

export const deleteLocation = (
  locationFullName,
  callback
) => async dispatch => {
  try {
    const { data } = await api.delete(`location/delete/${locationFullName}`);
    if (data.success) {
      dispatch({ type: MSG_SUCCESS, payload: data.message });
      callback();
    } else {
      dispatch({ type: MSG_ERROR, payload: data.message });
    }
  } catch (error) {
    console.log('error***', error);
    dispatch({ type: MSG_WARNING, payload: error });
  }
};
