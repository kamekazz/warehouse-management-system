import {
  LOCATION_QUERY,
  PAGINATION_FOR_LOCATION,
  LAST_QUERY_BODY
} from '../types';

const initialState = {
  queryData: [],
  pagination: 10,
  page: 1,
  totalResults: 0,
  lastQuery: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOCATION_QUERY:
      return {
        ...state,
        queryData: payload.locations,
        totalResults: payload.total
      };
    case PAGINATION_FOR_LOCATION:
      return { ...state, pagination: payload.pagination, page: payload.page };
    case LAST_QUERY_BODY:
      return { ...state, lastQuery: payload };
    default:
      return state;
  }
};

// a-202-210-40
