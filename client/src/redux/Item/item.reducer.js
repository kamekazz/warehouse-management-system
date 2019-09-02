import { GET_LAST_100_ITEM, ITEM_QUERY } from '../types';

const initialState = {
  itemArray: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_LAST_100_ITEM:
    case ITEM_QUERY:
      return { ...state, itemArray: payload };
    default:
      return state;
  }
};
