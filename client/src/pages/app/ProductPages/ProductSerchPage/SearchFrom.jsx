import React from 'react';
import { PaperEl } from '../../../../Styles/Elements/ToolsEl';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import { styleColor } from '../../../../Styles/styleThem';

function SearchFrom({ updateTextField, skuNumber }) {
  return (
    <PaperElEl elevation={10}>
      <TextFieldEl
        autoFocus
        id="skuNumberId"
        name="skuNumber"
        label="SKU"
        value={skuNumber}
        onChange={e =>
          updateTextField(
            e.target.name,
            e.target.value.replace(/[^a-z0-9]/gi, ''),
            7
          )
        }
        margin="normal"
      />
    </PaperElEl>
  );
}

export default SearchFrom;

const PaperElEl = styled(PaperEl)`
  grid-area: SearchFrom;
  max-width: 561px;
  max-height: 115px;
`;

const TextFieldEl = styled(TextField)`
  input {
    letter-spacing: 3px;
    font-size: 35px;
    color: ${styleColor.error.main};
    text-transform: uppercase;
  }
`;
