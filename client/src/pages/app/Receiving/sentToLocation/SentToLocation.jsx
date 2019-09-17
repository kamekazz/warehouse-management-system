import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import styled from 'styled-components';
import { styleColor } from '../../../../Styles/styleThem';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import TableCop from './Table';
import { connect } from 'react-redux';
import {
  acDialogState,
  acSendDynamicToLocation
} from '../../../../redux/reiving/reiving.action';

function SentToLocation({
  open,
  acDialogState,
  palletInfo,
  acSendDynamicToLocation
}) {
  return (
    <>
      {palletInfo && (
        <DialogEl
          open={open}
          // onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Send To Location</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Pick a proper location and take in consideration canalization
            </DialogContentText>
            <PalletInfo>
              <PalletInfoTop>
                <Typography variant="h6" gutterBottom>
                  SKU: <span className="sku">{palletInfo.skuNumber}</span>
                </Typography>
                <Typography variant="h6" gutterBottom>
                  CONT: <span className="cont">{palletInfo.cont}</span>
                </Typography>
              </PalletInfoTop>
              <PalletInfoBottom>
                <Typography variant="h6" gutterBottom>
                  ID: <span className="id">{palletInfo._id}</span>
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Size: <span className="id">{palletInfo.size}</span>
                </Typography>
              </PalletInfoBottom>
            </PalletInfo>
          </DialogContent>
          <Divider />

          <TableCop />

          <Divider />
          <DialogActions>
            <Typography variant="subtitle2" gutterBottom>
              Or send to a dynamic empty location
            </Typography>
            <Button
              onClick={() => acSendDynamicToLocation(palletInfo._id)}
              variant="contained"
              color="secondary"
            >
              send
            </Button>
            <Button onClick={() => acDialogState(false)} variant="contained">
              Cancel
            </Button>
          </DialogActions>
        </DialogEl>
      )}
    </>
  );
}

const mapStateToProps = state => ({
  open: state.reivingReducer.openLocationFinderModels,
  palletInfo: state.reivingReducer.newPallet,
  locations: state.reivingReducer.locations
});

const mapDispatchToProps = { acDialogState, acSendDynamicToLocation };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SentToLocation);

const DialogEl = styled(Dialog)`
  .MuiDialogTitle-root {
    background: ${styleColor.primary.main};
  }
  .MuiDialogActions-root {
    justify-content: space-around;
  }
  .MuiDialogContent-root {
    overflow: visible;
  }
`;

const PalletInfo = styled.div`
  .sku {
    color: ${styleColor.error.main};
    letter-spacing: 3px;
    text-transform: uppercase;
  }
  .cont {
    color: ${styleColor.primary.lite};
  }
  .id {
    color: ${styleColor.primary.lite};
  }
`;

const PalletInfoTop = styled.div`
  display: flex;
  justify-content: space-between;
`;
const PalletInfoBottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
