import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from '../types';
import axios from '../../util/Api';
import history from '../history';
import setAuthToken from '../../util/setAuthToken';

// Load User
export const getUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get('/auth/user');
    console.log('load user', res);
    if (res.data.success) {
      dispatch({
        type: USER_LOADED,
        payload: res.data.user
      });
    } else {
      dispatch({
        type: AUTH_ERROR
      });
    }
  } catch (err) {
    console.log(err);
  }
};

// Register User
export const userSignUp = ({
  firstName,
  lastName,
  email,
  password
}) => async dispatch => {
  const name = firstName + ' ' + lastName;
  const body = JSON.stringify({ name, email, password });
  try {
    const res = await axios.post('/user', body);
    console.log('register user', res);

    if (res.data.success) {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
      dispatch(getUser());
    } else {
      dispatch({
        type: REGISTER_FAIL
      });
    }
  } catch (err) {
    console.log('err***', err);
  }
};
// Login User
export const userSignIn = body => async dispatch => {
  try {
    const res = await axios.post('/auth', body);
    console.log('res', res);
    if (res.data.success) {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
      dispatch(getUser());
    } else {
      dispatch({ type: LOGIN_FAIL });
    }
  } catch (err) {
    console.log('err', err);
  }
};

// Logout / Clear Profile
export const userSignOut = () => dispatch => {
  dispatch({ type: LOGOUT });
};
