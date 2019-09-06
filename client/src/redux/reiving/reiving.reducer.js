import {
  ADD_NEW_PALLET,
  ADD_NEW_PALLET_BUTTON,
  GET_RECEIVING_TABLE,
  DIALOG_STATUS,
  CLEANED_PALLET_INFO
} from '../types';

const initialState = {
  newPallet: null,
  locations: [],
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
        locations: payload.locations
      };
    case CLEANED_PALLET_INFO:
      return {
        ...state,
        newPallet: null,
        locations: []
      };
    case DIALOG_STATUS:
      return {
        ...state,
        openLocationFinderModels: payload
      };
    case ADD_NEW_PALLET_BUTTON:
      return { ...state, addPalletButton: payload };
    case GET_RECEIVING_TABLE:
      return { ...state, palletTable: payload };
    default:
      return state;
  }
};
