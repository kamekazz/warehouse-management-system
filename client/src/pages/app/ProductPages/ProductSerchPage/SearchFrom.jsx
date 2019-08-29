import React, { useState } from 'react';
import { PaperEl } from '../../../../Styles/Elements/ToolsEl';
import TextField from '@material-ui/core/TextField';
import { debounce } from 'lodash';

function SearchFrom() {
  const [input, setInput] = useState({
    product: ''
  });

  const onSubmitFrom = debounce(() => {
    // props.queryLocation(cleanObj(input));
  }, 3000);

  const updateTextField = (name, value, length) => {
    if (value.length <= length) {
      //Update your state
      setInput({ ...input, [name]: value });
    } else {
      //Value length is biggest than 12
      //   props.warningMsgBar(`Value length is biggest than ${length}`);
    }
  };

  return (
    <PaperEl>
      <TextField
        name="product"
        label="Product"
        value={input.product}
        onChange={e =>
          updateTextField(
            e.target.name,
            e.target.value.replace(/[^a-z0-9]/gi, ''),
            8
          )
        }
        margin="normal"
      />
    </PaperEl>
  );
}

export default SearchFrom;
