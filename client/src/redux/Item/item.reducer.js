import { ITEM_QUERY } from '../types';

const initialState = {
  itemArray: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ITEM_QUERY:
      return { ...state, itemArray: payload };
    default:
      return state;
  }
};
