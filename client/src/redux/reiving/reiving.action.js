import api from '../../util/Api';
import {
  MSG_ERROR,
  MSG_SUCCESS,
  MSG_WARNING,
  ADD_NEW_PALLET,
  ADD_NEW_PALLET_BUTTON,
  GET_RECEIVING_TABLE,
  MSG_INFO,
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

export const acCreatePallet = body => async dispatch => {
  try {
    const { data } = await api.post('receiving/create', body);
    if (data.success) {
      dispatch({ type: ADD_NEW_PALLET, payload: data });
      dispatch({ type: MSG_SUCCESS, payload: data.message });
      dispatch(acGetPalletsByState('received'));
      dispatch(acChartData());
    } else {
      if (data.create) {
        window.open('/app/product/create', '_blank');
      }
      dispatch({ type: MSG_ERROR, payload: data.message });
    }
  } catch (error) {
    console.log('error***', error);
  }
};

export const acPickPallet = body => async dispatch => {
  dispatch({ type: PickPallet, payload: body });
  let query = {};
  query.skuNumber = body.skuNumber;
  try {
    const { data } = await api.get('location', { params: query });
    if (data.success) {
      dispatch({ type: UPDATE_LOCATION_TABLE, payload: data.locations });
    } else {
      dispatch({ type: MSG_ERROR, payload: data.error });
    }
  } catch (error) {
    console.log('error***', error);
    dispatch({ type: MSG_WARNING, payload: error });
  }
};

export const acGetPalletsByState = status => async dispatch => {
  let body = {};
  body.status = status;
  try {
    const { data } = await api.post('receiving/status', body);
    if (data.success) {
      dispatch({ type: GET_RECEIVING_TABLE, payload: data.pallets });
    } else {
      dispatch({ type: MSG_ERROR, payload: data.message });
    }
  } catch (error) {
    console.log('error***', error);
  }
};

export const acSendDynamicToLocation = id => async dispatch => {
  let body = {};
  body.id = id;
  dispatch({ type: DIALOG_STATUS, payload: false });
  dispatch({ type: MSG_INFO, payload: 'sending pallet to location' });
  try {
    const { data } = await api.post('receiving/dynamicsend', body);
    if (data.success) {
      dispatch({ type: MSG_SUCCESS, payload: data.message });
      dispatch({ type: CLEANED_PALLET_INFO, payload: null });
      dispatch(acGetPalletsByState('received'));
      dispatch(acChartData());
    } else {
      dispatch({ type: MSG_ERROR, payload: data.message });
    }
  } catch (error) {
    console.log('error***', error);
  }
};

export const acSendConsolidationLocation = (id, location) => async dispatch => {
  let body = {};
  body.id = id;
  body.location = location;
  dispatch({ type: DIALOG_STATUS, payload: false });
  dispatch({ type: MSG_INFO, payload: 'sending pallet to location' });
  try {
    const { data } = await api.post('receiving/send', body);
    if (data.success) {
      dispatch({ type: MSG_SUCCESS, payload: data.message });
      dispatch({ type: CLEANED_PALLET_INFO, payload: null });
      dispatch(acGetPalletsByState('received'));
      dispatch(acChartData());
    } else {
      dispatch({ type: MSG_ERROR, payload: data.message });
    }
  } catch (error) {
    console.log('error***', error);
  }
};

export const acCreatePalletButton = body => dispatch => {
  dispatch({ type: ADD_NEW_PALLET_BUTTON, payload: body });
};

export const acDialogState = body => dispatch => {
  dispatch({ type: DIALOG_STATUS, payload: body });
};

////////put away
export const acPikePallet = id => async dispatch => {
  let body = {};
  body.id = id;
  try {
    const { data } = await api.post('receiving/pike-pallet', body);
    if (data.success) {
      dispatch({ type: MSG_SUCCESS, payload: data.message });
      dispatch({ type: PICKET_UP_PALLET_INFO, payload: data.pallet });
      dispatch({ type: UPDATE_ACTIVE_STEP, payload: 1 });
    } else {
      dispatch({ type: MSG_ERROR, payload: data.message });
    }
  } catch (error) {
    console.log('error***', error);
  }
};

export const acValidateLocation = (id, location) => async dispatch => {
  let body = {};
  body.id = id;
  body.location = location;
  try {
    const { data } = await api.post('receiving/valedation', body);
    if (data.success) {
      dispatch({ type: MSG_SUCCESS, payload: data.message });
      dispatch({ type: UPDATE_ACTIVE_STEP, payload: 2 });
      setTimeout(() => {
        dispatch({ type: RESET_PATHWAY });
      }, 5000);
    } else {
      dispatch({ type: MSG_ERROR, payload: data.message });
    }
  } catch (error) {
    console.log('error***', error);
  }
};

export const acResetPutAway = () => dispatch => {
  dispatch({ type: RESET_PATHWAY });
};

//chart
export const acChartData = () => async dispatch => {
  let body = {};
  try {
    const { data } = await api.post('receiving/get-chart-data', body);
    console.log('data', data);
    if (data.success) {
      dispatch({ type: ADD_CHART_LOCATION_DATA, payload: data.locationTotal });
      dispatch({ type: ADD_CHART_PALLET_DATA, payload: data.palletTotal });
    } else {
      dispatch({ type: MSG_ERROR, payload: data.message });
    }
  } catch (error) {
    console.log('error***', error);
  }
};
