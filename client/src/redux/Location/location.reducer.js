import {
  LOCATION_QUERY,
  PAGINATION_FOR_LOCATION,
  LAST_QUERY_BODY,
  LOADING_SEARCH_TABLE,
  ADD_MAIN_INFO
} from '../types';

const initialState = {
  queryData: [],
  pagination: 50,
  page: 1,
  totalResults: 0,
  lastQuery: null,
  pages: 1,
  loading: false,
  locationInfo: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOCATION_QUERY:
      return {
        ...state,
        queryData: payload.locations,
        totalResults: payload.total,
        pages: payload.pages
      };
    case PAGINATION_FOR_LOCATION:
      return { ...state, pagination: payload.pagination, page: payload.page };
    case LAST_QUERY_BODY:
      return { ...state, lastQuery: payload };
    case LOADING_SEARCH_TABLE:
      return { ...state, loading: payload };
    case ADD_MAIN_INFO:
      return { ...state, locationInfo: payload };
    default:
      return state;
  }
};

// a-202-210-40
