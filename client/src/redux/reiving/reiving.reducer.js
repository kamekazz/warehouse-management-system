import { ADD_NEW_PALLET } from '../types';

const initialState = {
  palletTable: [],
  openLocationFinderModels: false,
  openAddNewProductModels: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_NEW_PALLET:
      return { ...state, palletTable: payload };
    default:
      return state;
  }
};
