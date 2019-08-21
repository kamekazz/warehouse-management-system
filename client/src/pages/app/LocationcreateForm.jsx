import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

function LocationCreateForm() {
  return (
    <PaperEl elevation={12}>
      <FullLocationDiv>
        <ZoneInputEl
          // id="outlined-name"
          label="ZONE"
          // value={values.name}
          // onChange={handleChange('name')}
          margin="normal"
          variant="outlined"
          type="text"
        />
        <RowInputEl
          // id="outlined-name"
          label="ROW"
          // value={values.name}
          // onChange={handleChange('name')}
          margin="normal"
          variant="outlined"
          type="number"
        />
        <LocationInputEl
          // id="outlined-name"
          label="LOCATION"
          // value={values.name}
          // onChange={handleChange('name')}
          margin="normal"
          variant="outlined"
          type="number"
        />
        <LevelInputEl
          // id="outlined-name"
          label="LEVEL"
          // value={values.name}
          // onChange={handleChange('name')}
          margin="normal"
          variant="outlined"
          type="number"
        />
        <SizeInputEl
          // id="outlined-name"
          label="SIZE"
          // value={values.name}
          // onChange={handleChange('name')}
          margin="normal"
          variant="outlined"
          type="number"
        />
        <Typography variant="subtitle2" gutterBottom color="primary">
          the size is set on cubic inches
        </Typography>
        <ButtonDivEl>
          <Button type="submit" variant="contained" color="secondary">
            Submit
          </Button>
          <Button type="submit" variant="contained" color="default">
            cancel
          </Button>
        </ButtonDivEl>
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
  /* align-items: center; */
`;

const ZoneInputEl = styled(TextField)`
  max-width: 60px;
`;
const RowInputEl = styled(TextField)`
  max-width: 90px;
`;

const LocationInputEl = styled(TextField)`
  max-width: 100px;
`;
const LevelInputEl = styled(TextField)`
  max-width: 90px;
`;

const SizeInputEl = styled(TextField)`
  max-width: 90px;
  /* transform: translate(0, 0px); */
`;

const BottonDivEl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
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
