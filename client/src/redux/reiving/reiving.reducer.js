import { ADD_NEW_PALLET, ADD_NEW_PALLET_BUTTON } from '../types';

const initialState = {
  palletTable: [],
  openLocationFinderModels: false,
  openAddNewProductModels: false,
  addPalletButton: true
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_NEW_PALLET:
      return { ...state, palletTable: payload };
    case ADD_NEW_PALLET_BUTTON:
      return { ...state, addPalletButton: payload };
    default:
      return state;
  }
};
