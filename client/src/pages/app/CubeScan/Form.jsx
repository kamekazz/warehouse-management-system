import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import { styleColor } from '../../../Styles/styleThem';

class FormUpcContainer extends Component {
  render() {
    return (
      <PaperEl elevation={12}>
        <FormEl>
          <UpcTextEl
            autoFocus={true}
            label="UPC"
            name="name"
            margin="normal"
            type="text"
            // value={name}
            // onChange={e => updateTextField(e.target.name, e.target.value, 75)}
          />
          <ButtonEl
            // onClick={handelCancel}
            variant="contained"
            color="secondary"
          >
            <i className={'fas fa-search'} style={{ fontSize: '30px' }}></i>
          </ButtonEl>
        </FormEl>
      </PaperEl>
    );
  }
}
export default FormUpcContainer;

const PaperEl = styled(Paper)`
  grid-area: FormUpcContainer;
  padding: 8px 18px;
  max-width: 734px;
  display: flex;
  align-items: center;
`;

const FormEl = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: space-evenly;
  margin: 0 0 0 0;
`;

const UpcTextEl = styled(TextField)`
  flex-grow: 1;
  input {
    margin-right: 20px;
    letter-spacing: 3px;
    font-size: 25px;
    color: ${styleColor.error.main};
    text-transform: uppercase;
  }
`;

const ButtonEl = styled(Button)`
  transform: translate(0, 10px);
  span {
    color: ${({ cancel }) => (cancel ? styleColor.error.main : 'white')};
    &:hover{
        color: ${styleColor.primary.main}
  }
`;
