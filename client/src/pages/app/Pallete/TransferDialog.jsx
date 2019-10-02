import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import styled from 'styled-components';
import { styleColor } from '../../../Styles/styleThem';
import MenuItem from '@material-ui/core/MenuItem';
import { connect } from 'react-redux';
import { successMsgBar } from '../../../redux/Notification/notification.actions';

const coworker = [
  {
    value: 'Manuel Taveras',
    label: 'Manuel Taveras'
  },
  {
    value: 'manny Taveras',
    label: 'Manny Taveras'
  },
  {
    value: 'olyver osorio',
    label: 'Olyver Osorio'
  },
  {
    value: 'random',
    label: 'Random'
  }
];

function FormDialog({
  dialogOpen,
  handleDialogOpenState,
  handleChange,
  worker,
  location,
  count,
  successMsgBar
}) {
  const runPicker = () => {
    successMsgBar(
      `Assign Transfer to ${worker} to location ${location} ${count}Items`
    );
    handleDialogOpenState(false);
  };
  return (
    <DialogEl
      open={dialogOpen}
      onClose={() => handleDialogOpenState(false)}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">
        Transfer Pallet To New Location
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Make sure location is empty or else you'll get an error if you try to
          reduce the size
        </DialogContentText>
        <FormContainer>
          <TextField
            autoFocus
            value={location}
            id="Location"
            label="Location"
            type="text"
            onChange={handleChange('location')}
          />
          <TextField
            value={count}
            id="Location"
            label="Items"
            type="number"
            onChange={handleChange('count')}
          />
          <TextFieldEl
            id="standard-select-currency"
            select
            label="Select"
            value={worker}
            onChange={handleChange('worker')}
            helperText="Please select your Picker"
          >
            {coworker.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextFieldEl>
        </FormContainer>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => runPicker()}
          variant="contained"
          color="secondary"
        >
          Run
        </Button>
        <Button
          onClick={() => handleDialogOpenState(false)}
          variant="contained"
        >
          Cancel
        </Button>
      </DialogActions>
    </DialogEl>
  );
}

const mapStateToProps = state => ({});

const mapDispatchToProps = { successMsgBar };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormDialog);

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
  div.MuiFormControl-marginNormal {
    margin-top: 0;
    margin-bottom: 0;
  }
`;
