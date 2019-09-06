import { ADD_NEW_PALLET, ADD_NEW_PALLET_BUTTON } from '../types';

const initialState = {
  newPallet: null,
  location: [],
  palletTable: [
    {
      skuNumber: 'sknvors',
      _id: 'lkjfljlkfjkasjdfljfkfjaskjfajlkfjas',
      department: 'pro',
      cont: 1,
      date: '25/36/25'
    },
    {
      skuNumber: 'sknvors',
      _id: 'lkjfljlkfjkasjdfljfkfjaskjfajlkfjas',
      department: 'pro',
      cont: 1,
      date: '25/36/25'
    },
    {
      skuNumber: 'sknvors',
      _id: 'lkjfljlkfjkasjdfljfkfjaskjfajlkfjas',
      department: 'pro',
      cont: 1,
      date: '25/36/25'
    },
    {
      skuNumber: 'sknvors',
      _id: 'lkjfljlkfjkasjdfljfkfjaskjfajlkfjas',
      department: 'pro',
      cont: 1,
      date: '25/36/25'
    },
    {
      skuNumber: 'sknvors',
      _id: 'lkjfljlkfjkasjdfljfkfjaskjfajlkfjas',
      department: 'pro',
      cont: 1,
      date: '25/36/25'
    }
  ],
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
    default:
      return state;
  }
};
