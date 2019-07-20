import { SET_CURRENT_USER } from '../actions/type';
import isEmpty from '../../validation/is-empty';
const initialState = {
  isAuthenticated: false,
  user: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(payload),
        user: payload
      };
    default:
      return state;
  }
};
