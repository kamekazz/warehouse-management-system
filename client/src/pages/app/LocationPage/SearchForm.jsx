import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

import { connect } from 'react-redux';
import {
  warningMsgBar,
  infoMsgBar
} from '../../../redux/Notification/notification.actions';

function SearchForm(props) {
  const [focus, setFocus] = useState(true);
  const [input, setInput] = useState({
    zone: '',
    row: '',
    location: '',
    level: '',
    department: '',
    status: ''
  });

  const handelCancel = () => {
    setInput({
      zone: '',
      row: '',
      location: '',
      level: '',
      size: ''
    });
    setFocus(true);
  };

  const onSubmitFrom = e => {
    e.preventDefault();
    console.log('value', input);
    props.infoMsgBar(`location bine crate`);
    handelCancel();
  };

  const updateTextField = (name, value, length) => {
    if (value.length <= length) {
      //Update your state
      setInput({ ...input, [name]: value });
    } else {
      //Value length is biggest than 12
      props.warningMsgBar(`Value length is biggest than ${length}`);
    }
  };

  return (
    <PaperEl elevation={12}>
      <form onSubmit={e => onSubmitFrom(e)}>
        <FullLocationDiv>
          <ZoneInputEl
            autoFocus={focus}
            label="ZONE"
            name="zone"
            margin="normal"
            variant="outlined"
            type="text"
            value={input.zone}
            onChange={e =>
              updateTextField(
                e.target.name,
                e.target.value.replace(/[^a-z]/g, ''),
                1
              )
            }
          />
          <RowInputEl
            label="ROW"
            name="row"
            margin="normal"
            variant="outlined"
            type="number"
            value={input.row}
            onChange={e => updateTextField(e.target.name, e.target.value, 3)}
          />
          <LocationInputEl
            label="LOCATION"
            name="location"
            margin="normal"
            variant="outlined"
            type="number"
            value={input.location}
            onChange={e => updateTextField(e.target.name, e.target.value, 4)}
          />
          <LevelInputEl
            label="LEVEL"
            name="level"
            margin="normal"
            variant="outlined"
            type="number"
            value={input.level}
            onChange={e => updateTextField(e.target.name, e.target.value, 2)}
          />
          <TextField
            id="outlined-select-currency"
            select
            label="Select"
            value={input.status}
            onChange={updateTextField('currency')}
            helperText="Please select your currency"
            margin="normal"
            variant="outlined"
          >
            {currencies.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <ButtonDivEl>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </ButtonDivEl>
        </FullLocationDiv>
      </form>
    </PaperEl>
  );
}
const mapStateToProps = state => ({});

const mapDispatchToProps = {
  warningMsgBar,
  infoMsgBar
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);

const PaperEl = styled(Paper)`
  padding: 8px 18px;
  margin-bottom: 12px;
`;

const FullLocationDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
`;

const ZoneInputEl = styled(TextField)`
  max-width: 70px;
`;
const RowInputEl = styled(TextField)`
  max-width: 70px;
`;

const LocationInputEl = styled(TextField)`
  max-width: 104px;
`;
const LevelInputEl = styled(TextField)`
  max-width: 75px;
`;

const SizeInputEl = styled(TextField)`
  max-width: 100px;
`;

const ButtonDivEl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 56px;
  button {
    :not(:last-child) {
      margin-right: 20px;
    }
  }
`;
