import {
  LOCATION_QUERY,
  PAGINATION_FOR_LOCATION,
  LAST_QUERY_BODY
} from '../types';

const initialState = {
  queryData: [],
  pagination: 50,
  page: 4,
  lastQuery: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOCATION_QUERY:
      return { ...state, queryData: payload };
    case PAGINATION_FOR_LOCATION:
      return { ...state, pagination: payload.pagination, page: payload.page };
    case LAST_QUERY_BODY:
      return { ...state, lastQuery: payload };
    default:
      return state;
  }
};
