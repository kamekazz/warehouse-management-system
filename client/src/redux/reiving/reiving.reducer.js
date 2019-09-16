import {
  ADD_NEW_PALLET,
  ADD_NEW_PALLET_BUTTON,
  GET_RECEIVING_TABLE,
  DIALOG_STATUS,
  CLEANED_PALLET_INFO,
  PickPallet,
  UPDATE_LOCATION_TABLE,
  UPDATE_ACTIVE_STEP,
  PICKET_UP_PALLET_INFO,
  RESET_PATHWAY,
  ADD_CHART_LOCATION_DATA,
  ADD_CHART_PALLET_DATA
} from '../types';

const initialState = {
  newPallet: null,
  locations: [],
  palletTable: [],
  openLocationFinderModels: false,
  addPalletButton: true,
  ////put away
  activeStep: 0,
  picketUpPallet: null,
  //chart
  locationChart: [2, 2, 2, 2],
  palletChart: [35, 35, 34]
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
    case PickPallet:
      return {
        ...state,
        openLocationFinderModels: true,
        newPallet: payload
      };
    case UPDATE_LOCATION_TABLE:
      return {
        ...state,
        locations: payload
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
    case UPDATE_ACTIVE_STEP:
      return { ...state, activeStep: payload };
    case PICKET_UP_PALLET_INFO:
      return { ...state, picketUpPallet: payload };
    case RESET_PATHWAY:
      return { ...state, picketUpPallet: null, activeStep: 0 };
    case ADD_CHART_LOCATION_DATA:
      return { ...state, locationChart: payload };
    case ADD_CHART_PALLET_DATA:
      return { ...state, palletChart: payload };
    default:
      return state;
  }
};
