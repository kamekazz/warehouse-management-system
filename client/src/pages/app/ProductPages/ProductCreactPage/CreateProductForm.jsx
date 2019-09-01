import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { styleColor } from '../../../../Styles/styleThem';
import MenuItem from '@material-ui/core/MenuItem';
import { departmentOption } from '../../../../util/option';

function CreateProductForm({
  name,
  skuNumber,
  description,
  size,
  ounce,
  department,
  onSubmitFrom,
  updateTextField,
  handleChange,
  buttonDisable,
  handelCancel,
  editMode,
  onSaveForm,
  setOnDelete
}) {
  return (
    <PaperEl elevation={12}>
      <FormEl onSubmit={e => onSubmitFrom(e)}>
        <TopDiv>
          <NameEl
            autoFocus={true}
            label="Name"
            name="name"
            margin="normal"
            type="text"
            value={name}
            onChange={e => updateTextField(e.target.name, e.target.value, 75)}
          />
          <SkuEl
            label="SKU"
            name="skuNumber"
            margin="normal"
            type="text"
            value={skuNumber}
            onChange={e =>
              updateTextField(
                e.target.name,
                e.target.value.replace(/[^a-z0-9]/gi, ''),
                7
              )
            }
          />
        </TopDiv>
        <DescriptionTextEl
          label="Description"
          name="description"
          margin="normal"
          type="text"
          multiline
          rows="4"
          value={description}
          onChange={e => updateTextField(e.target.name, e.target.value, 300)}
        />
        <BottomDiv>
          <TextField
            label="Size"
            name="size"
            margin="normal"
            type="number"
            value={size}
            onChange={e => updateTextField(e.target.name, e.target.value, 20)}
          />
          <TextField
            label="Ounce"
            name="ounce"
            margin="normal"
            type="number"
            value={ounce}
            onChange={e => updateTextField(e.target.name, e.target.value, 20)}
          />
          <DepartmentEl
            select
            label="Department"
            value={department}
            onChange={handleChange('department')}
            margin="normal"
          >
            {departmentOption.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </DepartmentEl>
        </BottomDiv>
        <ButtonDiv>
          <ButtonEl
            onClick={handelCancel}
            variant="contained"
            color="inherit"
            cancel={true}
          >
            cancel
          </ButtonEl>
          {!editMode ? (
            <ButtonEl
              disabled={buttonDisable}
              type="submit"
              variant="contained"
              color="secondary"
            >
              Submit
            </ButtonEl>
          ) : (
            <EditColumn>
              <DeleteButtonEl
                color="primary"
                onClick={setOnDelete}
                variant="contained"
              >
                delete
              </DeleteButtonEl>
              <ButtonEl
                onClick={onSaveForm}
                variant="contained"
                color="secondary"
              >
                Save
              </ButtonEl>
            </EditColumn>
          )}
        </ButtonDiv>
      </FormEl>
    </PaperEl>
  );
}

export default CreateProductForm;

const PaperEl = styled(Paper)`
  padding: 8px 18px;
  margin-bottom: 12px;
  max-width: 734px;
`;

const FormEl = styled.form`
  display: flex;
  flex-direction: column;
`;

const TopDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
const BottomDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;
const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NameEl = styled(TextField)`
  width: 290px;
`;
const SkuEl = styled(TextField)`
  width: 140px;
  input {
    letter-spacing: 3px;
    font-size: 25px;
    color: ${styleColor.error.main};
    text-transform: uppercase;
  }
`;

const DescriptionTextEl = styled(TextField)`
  min-width: 240px;
`;

const DepartmentEl = styled(TextField)`
  width: 120px;
`;

const EditColumn = styled.div`
  display: flex;
  justify-content: space-between;
  width: 180px;
  .MuiButton-containedPrimary {
    background-color: ${styleColor.error.main};
  }
`;
const DeleteButtonEl = styled(Button)``;

const ButtonEl = styled(Button)`
  span {
    color: ${({ cancel }) => (cancel ? styleColor.error.main : 'white')};
  }
`;
