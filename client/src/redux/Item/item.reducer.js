import {
  GET_LAST_100_ITEM,
  ITEM_QUERY,
  PAGINATION_FOR_ITEM,
  LOADING_ITEM_TABLE
} from '../types';

const initialState = {
  itemArray: [],
  pagination: 25,
  page: 1,
  totalResults: 0,
  pages: 1,
  loading: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_LAST_100_ITEM:
    case ITEM_QUERY:
      return { ...state, itemArray: payload };
    case PAGINATION_FOR_ITEM:
      return {
        ...state,
        pagination: payload.pagination,
        page: payload.page
      };
    case LOADING_ITEM_TABLE:
      return { ...state, loading: payload };
    default:
      return state;
  }
};
