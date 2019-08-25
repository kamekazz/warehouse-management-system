import api from '../../util/Api';
import { MSG_ERROR, MSG_SUCCESS, MSG_WARNING, LOCATION_QUERY } from '../types';

export const queryLocation = body => async dispatch => {
  try {
    const { data } = await api.get('location', { params: body });
    if (data.success) {
      dispatch({ type: LOCATION_QUERY, payload: data.locations });
    } else {
      dispatch({ type: MSG_ERROR, payload: data.error });
    }
  } catch (error) {
    console.log('error***', error);
    dispatch({ type: MSG_WARNING, payload: error });
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
  callback
) => async dispatch => {
  let body = {};
  body['location'] = location;
  body['maxSize'] = size;
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
