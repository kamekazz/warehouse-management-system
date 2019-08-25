import { LOCATION_QUERY } from '../types';

const initialState = {
  queryData: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOCATION_QUERY:
      return { ...state, queryData: payload };
    default:
      return state;
  }
};
