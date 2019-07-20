import { GET_ERRORS, SET_CURRENT_USER } from './type';
import axios from 'axios';
import setAuthToken from '../../util/setAuthToken';
import jwt_decode from 'jwt-decode';

export const acRegisterUser = (userData, history) => dispatch => {
  axios
    .post('/api/users/register', userData)
    .then(res => history.push('/login'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const acLoginUser = userData => dispatch => {
  axios
    .post('/api/users/login', userData)
    .then(res => {
      const { token } = res.data;
      localStorage.setItem('jwtToken', token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(acSetCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const acSetCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

export const acLogoutUser = () => dispatch => {
  localStorage.removeItem('jwtToken');
  setAuthToken(false);

  dispatch(acSetCurrentUser({}));
};
