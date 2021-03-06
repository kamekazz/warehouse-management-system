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
import { locationStatus } from '../../../../util/option';
import MenuItem from '@material-ui/core/MenuItem';

export default function FormDialog({
  dialogLocation,
  dialogSize,
  handleClose,
  open,
  handelEditOnChange,
  handedSize,
  handedDelete,
  dialogStatus
}) {
  return (
    <div>
      <DialogEl
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit Location</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Make sure location is empty or else you'll get an error if you try
            to reduce the size
          </DialogContentText>
          <FormContainer>
            <TextField
              value={dialogLocation}
              id="Location"
              label="Location"
              type="text"
            />
            <TextField
              autoFocus
              value={dialogSize}
              name="dialogSize"
              label="size"
              type="number"
              onChange={handelEditOnChange}
            />
            <TextFieldEl
              id="outlined-select-currency"
              select
              name="dialogStatus"
              label="Status"
              value={dialogStatus}
              onChange={handelEditOnChange}
            >
              {locationStatus.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextFieldEl>
          </FormContainer>
        </DialogContent>
        <DialogActions>
          <Button onClick={handedSize} variant="contained" color="secondary">
            save
          </Button>
          <Button onClick={handleClose} variant="contained">
            Cancel
          </Button>
          <Button
            className="deleteButton"
            variant="contained"
            onClick={handedDelete}
          >
            delete
          </Button>
        </DialogActions>
      </DialogEl>
    </div>
  );
}

const DialogEl = styled(Dialog)`
  .MuiDialogTitle-root {
    background: ${styleColor.primary.main};
  }
  .deleteButton {
    background: ${styleColor.error.main};
  }
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const TextFieldEl = styled(TextField)`
  flex-basis: 130px;
`;
