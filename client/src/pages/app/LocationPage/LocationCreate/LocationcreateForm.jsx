import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

function LocationCreateForm({
  search,
  handelCancel,
  updateTextField,
  level,
  zone,
  row,
  location,
  buttonDisable,
  size,
  onSubmitFrom
}) {
  return (
    <PaperEl elevation={12}>
      <form onSubmit={e => onSubmitFrom(e)}>
        <FullLocationDiv>
          <ZoneInputEl
            autoFocus={true}
            label="ZONE"
            name="zone"
            margin="normal"
            variant="outlined"
            type="text"
            value={zone}
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
            value={row}
            onChange={e => updateTextField(e.target.name, e.target.value, 3)}
          />
          <LocationInputEl
            label="LOCATION"
            name="location"
            margin="normal"
            variant="outlined"
            type="number"
            value={location}
            onChange={e => updateTextField(e.target.name, e.target.value, 4)}
          />
          <LevelInputEl
            label="LEVEL"
            name="level"
            margin="normal"
            variant="outlined"
            type="number"
            value={level}
            onChange={e => updateTextField(e.target.name, e.target.value, 2)}
          />
          {!search ? (
            <>
              <SizeInputEl
                name="size"
                label="SIZE"
                margin="normal"
                variant="outlined"
                type="number"
                value={size}
                onChange={e =>
                  updateTextField(e.target.name, e.target.value, 6)
                }
              />
              <Typography variant="subtitle2" gutterBottom color="primary">
                the size is set to cubic inches
              </Typography>
              <ButtonDivEl>
                <Button
                  type="submit"
                  disabled={buttonDisable}
                  variant="contained"
                  color="secondary"
                >
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
      </form>
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
