import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

function LocationCreateForm({
  search,
  buttonDisable,
  handelCancel,
  handalchanga
}) {
  return (
    <PaperEl elevation={12}>
      <FullLocationDiv>
        <ZoneInputEl
          label="ZONE"
          name="zone"
          margin="normal"
          variant="outlined"
          type="text"
          inputProps={{ maxLength: 1 }}
          onInput={e => {
            e.target.value = e.target.value.replace(/[^a-z]/g, '');
            handalchanga(e.target.name, e.target.value);
          }}
        />
        <RowInputEl
          label="ROW"
          name="row"
          margin="normal"
          variant="outlined"
          type="text"
          inputProps={{ maxLength: 3 }}
          onInput={e => {
            e.target.value = e.target.value.replace(/[^0-9]/g, '');
            handalchanga(e.target.name, e.target.value);
          }}
        />
        <LocationInputEl
          label="LOCATION"
          name="location"
          margin="normal"
          variant="outlined"
          type="text"
          inputProps={{ maxLength: 4 }}
          onInput={e => {
            e.target.value = e.target.value.replace(/[^0-9]/g, '');
            handalchanga(e.target.name, e.target.value);
          }}
        />
        <LevelInputEl
          label="LEVEL"
          name="level"
          margin="normal"
          variant="outlined"
          type="text"
          inputProps={{ maxLength: 2 }}
          onInput={e => {
            e.target.value = e.target.value.replace(/[^0-9]/g, '');
            handalchanga(e.target.name, e.target.value);
          }}
        />
        {!search ? (
          <>
            <SizeInputEl
              name="size"
              label="SIZE"
              margin="normal"
              variant="outlined"
              type="text"
              inputProps={{ maxLength: 6 }}
              onInput={e => {
                e.target.value = e.target.value.replace(/[^0-9]/g, '');
                handalchanga(e.target.name, e.target.value);
              }}
            />
            <Typography variant="subtitle2" gutterBottom color="primary">
              the size is set on cubic inches
            </Typography>
            <ButtonDivEl>
              <Button type="submit" variant="contained" color="secondary">
                Submit
              </Button>
              <Button
                onClick={() => handelCancel()}
                variant="contained"
                color="default"
              >
                cancel
              </Button>
            </ButtonDivEl>
          </>
        ) : (
          <ButtonDivEl>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </ButtonDivEl>
        )}
      </FullLocationDiv>
    </PaperEl>
  );
}

export default LocationCreateForm;

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
  max-width: 80px;
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
