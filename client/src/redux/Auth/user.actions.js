import {
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  INIT_URL,
  SIGNOUT_USER_SUCCESS,
  USER_DATA,
  USER_TOKEN_SET
} from './user.types';
import axios from '../../util/Api';
import history from '../history';
export const setInitUrl = url => {
  return {
    type: INIT_URL,
    payload: url
  };
};

export const userSignUp = ({ firstName, lastName, email, password }) => {
  const name = firstName + ' ' + lastName;
  return dispatch => {
    dispatch({ type: FETCH_START });
    axios
      .post('/user', {
        email: email,
        password: password,
        name: name
      })
      .then(({ data }) => {
        if (data.success) {
          localStorage.setItem('token', JSON.stringify(data.token));
          localStorage.setItem('user', JSON.stringify(data.user));
          axios.defaults.headers.common['authorization'] =
            'Bearer ' + data.token;
          dispatch({ type: FETCH_SUCCESS });
          dispatch({ type: USER_TOKEN_SET, payload: data.token });
          dispatch({ type: USER_DATA, payload: data.user });
          history.push('/registration');
        } else {
          console.log('payload: data.error', data.error);
          dispatch({ type: FETCH_ERROR, payload: data.error });
        }
      })
      .catch(function(error) {
        dispatch({ type: FETCH_ERROR, payload: error.message });
        console.log('Error****:', error.message);
      });
  };
};

export const userSignIn = ({ email, password }) => {
  return dispatch => {
    dispatch({ type: FETCH_START });
    axios
      .post('/auth', {
        email: email,
        password: password
      })
      .then(({ data }) => {
        if (data.success) {
          localStorage.setItem('token', JSON.stringify(data.token));
          localStorage.setItem('user', JSON.stringify(data.user));
          axios.defaults.headers.common['authorization'] =
            'Bearer ' + data.token;
          dispatch({ type: FETCH_SUCCESS });
          dispatch({ type: USER_TOKEN_SET, payload: data.token });
          dispatch({ type: USER_DATA, payload: data.user });
          history.push('/app');
        } else {
          dispatch({ type: FETCH_ERROR, payload: data.error });
        }
      })
      .catch(function(error) {
        dispatch({ type: FETCH_ERROR, payload: error.message });
        console.log('Error****:', error.message);
      });
  };
};

export const getUser = () => {
  return dispatch => {
    dispatch({ type: FETCH_START });
    axios
      .get('/auth/user')
      .then(({ data }) => {
        console.log('getUser: ', data);
        if (data.success) {
          dispatch({ type: FETCH_SUCCESS });
          dispatch({ type: USER_DATA, payload: data.user });
        } else {
          dispatch({ type: FETCH_ERROR, payload: data.error });
          localStorage.removeItem('token');
          localStorage.removeItem('user');
        }
      })
      .catch(function(error) {
        dispatch({ type: FETCH_ERROR, payload: error.message });
        console.log('Error****:', error.message);
      });
  };
};

export const userSignOut = () => {
  return dispatch => {
    dispatch({ type: FETCH_START });
    axios
      .get('/auth/logout')
      .then(({ data }) => {
        if (data.success) {
          dispatch({ type: FETCH_SUCCESS });
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          dispatch({ type: FETCH_SUCCESS });
          dispatch({ type: SIGNOUT_USER_SUCCESS });
        } else {
          dispatch({ type: FETCH_ERROR, payload: data.error });
        }
      })
      .catch(function(error) {
        dispatch({ type: FETCH_ERROR, payload: error.message });
        console.log('Error****:', error.message);
      });
  };
};
