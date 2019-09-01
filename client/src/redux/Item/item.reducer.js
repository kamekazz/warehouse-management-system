import { ITEM_QUERY } from '../types';

const initialState = {
  itemData: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ITEM_QUERY:
      return { ...state, itemData: payload };
    default:
      return state;
  }
};
