import {
  ADD_NEW_PALLET,
  ADD_NEW_PALLET_BUTTON,
  GET_RECEIVING_TABLE
} from '../types';

const initialState = {
  newPallet: null,
  location: [],
  palletTable: [],
  openLocationFinderModels: false,
  openAddNewProductModels: false,
  addPalletButton: true
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_NEW_PALLET:
      return {
        ...state,
        openLocationFinderModels: true,
        newPallet: payload.newPallet,
        location: payload.locations
      };
    case ADD_NEW_PALLET_BUTTON:
      return { ...state, addPalletButton: payload };
    case GET_RECEIVING_TABLE:
      return { ...state, palletTable: payload };
    default:
      return state;
  }
};
