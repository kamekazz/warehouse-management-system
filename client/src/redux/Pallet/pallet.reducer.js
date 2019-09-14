import {
  PAGINATION_FOR_PALLET,
  LOADING_PALLET_TABLE,
  ADD_PALLET_ARRAY
} from '../types';

const initialState = {
  queryData: [],
  pagination: 25,
  page: 1,
  totalResults: 0,
  pages: 1,
  loading: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case PAGINATION_FOR_PALLET:
      return {
        ...state,
        pagination: payload.pagination,
        page: payload.page
      };
    case ADD_PALLET_ARRAY:
      return {
        ...state,
        queryData: payload
      };
    case LOADING_PALLET_TABLE:
      return { ...state, loading: payload };
    default:
      return state;
  }
};
