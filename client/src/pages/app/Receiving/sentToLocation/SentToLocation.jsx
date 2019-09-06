import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import styled from 'styled-components';
import { styleColor } from '../../../../Styles/styleThem';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

function SentToLocation() {
  return (
    <>
      <DialogEl
        open={true}
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
                SKU: <span className="sku">8364m60</span>
              </Typography>
              <Typography variant="h6" gutterBottom>
                CONT: <span className="cont">4</span>
              </Typography>
            </PalletInfoTop>
            <PalletInfoBottom>
              <Typography variant="h6" gutterBottom>
                ID: <span className="id">8364dsfasdfasfasafasdfm60</span>
              </Typography>
            </PalletInfoBottom>
          </PalletInfo>
        </DialogContent>
        <Divider />
        <DialogActions>
          <Typography variant="subtitle2" gutterBottom>
            Or send to a dynamic empty location
          </Typography>
          <Button variant="contained" color="secondary">
            send
          </Button>
          <Button variant="contained">Cancel</Button>
        </DialogActions>
      </DialogEl>
    </>
  );
}

export default SentToLocation;

const DialogEl = styled(Dialog)`
  .MuiDialogTitle-root {
    background: ${styleColor.primary.main};
  }
  .MuiDialogActions-root {
    justify-content: space-around;
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
const PalletInfoBottom = styled.div``;
