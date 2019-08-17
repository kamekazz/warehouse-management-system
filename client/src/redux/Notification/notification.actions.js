import {
  MSG_CLOSE,
  MSG_ERROR,
  MSG_INFO,
  MSG_SUCCESS,
  MSG_WARNING
} from '../types';

export const closeMsgBar = () => dispatch => {
  dispatch({
    type: MSG_CLOSE
  });
};

export const errorMsgBar = text => dispatch => {
  dispatch({ type: MSG_ERROR, payload: text });
};

export const infoMsgBar = text => dispatch => {
  dispatch({ type: MSG_INFO, payload: text });
};
export const successMsgBar = text => dispatch => {
  dispatch({ type: MSG_SUCCESS, payload: text });
};

export const warningMsgBar = text => dispatch => {
  dispatch({ type: MSG_WARNING, payload: text });
};
