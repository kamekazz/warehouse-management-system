import { GET_PRODUCT_INFO } from '../types';

const initialState = {
  productInfo: null,
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
      return { ...state, productInfo: payload };
    default:
      return state;
  }
};
