import {
  GET_PRODUCT_INFO,
  LOADING_CUBISCAN,
  CANCEL_ALL_CUBISCAN
} from '../types';

const initialState = {
  productInfo: null,
  modelBox: true,
  loading: false,
  tableData: [
    [
      '075877125378',
      '125037',
      'EA',
      'HEATER DLX MILKHOUSE UTIL GRY',
      '1.56',
      '2.36',
      '25.02',
      '1.02',
      '01/28/2020'
    ],
    [
      '075877125378',
      '125037',
      'EA',
      'HEATER DLX MILKHOUSE UTIL GRY',
      '1.56',
      '2.36',
      '25.02',
      '1.02',
      '01/28/2020'
    ],
    [
      '075877125378',
      '125037',
      'EA',
      'HEATER DLX MILKHOUSE UTIL GRY',
      '1.56',
      '2.36',
      '25.02',
      '1.02',
      '01/28/2020'
    ],
    [
      '075877125378',
      '125037',
      'EA',
      'HEATER DLX MILKHOUSE UTIL GRY',
      '1.56',
      '2.36',
      '25.02',
      '1.02',
      '01/28/2020'
    ],
    [
      '075877125378',
      '125037',
      'EA',
      'HEATER DLX MILKHOUSE UTIL GRY',
      '1.56',
      '2.36',
      '25.02',
      '1.02',
      '01/28/2020'
    ],
    [
      '075877125378',
      '125037',
      'EA',
      'HEATER DLX MILKHOUSE UTIL GRY',
      '1.56',
      '2.36',
      '25.02',
      '1.02',
      '01/28/2020'
    ],
    [
      '075877125378',
      '125037',
      'EA',
      'HEATER DLX MILKHOUSE UTIL GRY',
      '1.56',
      '2.36',
      '25.02',
      '1.02',
      '01/28/2020'
    ],
    [
      '075877125378',
      '125037',
      'EA',
      'HEATER DLX MILKHOUSE UTIL GRY',
      '1.56',
      '2.36',
      '25.02',
      '1.02',
      '01/28/2020'
    ]
  ]
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCT_INFO:
      return { ...state, productInfo: payload, modelBox: true };
    case CANCEL_ALL_CUBISCAN:
      return { ...state, productInfo: null, modelBox: false };
    case LOADING_CUBISCAN:
      return { ...state, loading: payload };
    default:
      return state;
  }
};
