import React, { useState, useEffect } from 'react';
import { PaperEl } from '../../../Styles/Elements/ToolsEl';
import TextField from '@material-ui/core/TextField';
import { styleColor } from '../../../Styles/styleThem';
import styled from 'styled-components';
import AddIcon from '@material-ui/icons/Add';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import {
  warningMsgBar,
  infoMsgBar
} from '../../../redux/Notification/notification.actions';
import {
  acCreatePallet,
  acCreatePalletButton
} from '../../../redux/reiving/reiving.action';

function AddPalletForm(props) {
  const [input, setInput] = useState({
    skuNumber: '',
    cont: '',
    button: true
  });

  useEffect(() => {
    checkButton();
    goToInput('skuNumber');
  }, [input]);

  const handleSubmit = e => {
    e.preventDefault();
    props.acCreatePallet(input);
    setInput({ skuNumber: '', cont: '' });
    goToInput('skuNumber');
  };

  const updateSkuNumberField = (name, value, length) => {
    if (value.length >= 7) {
      goToInput('cont');
    }
    if (value.length <= length) {
      //Update your state
      setInput({ ...input, [name]: value });
    } else {
      //Value length is biggest than 12
      props.warningMsgBar(`Value length is biggest than ${length}`);
    }
  };

  const updateContField = (name, value) => {
    let regex = new RegExp('^[0-9]+$');
    if (regex.test(value)) {
      setInput({ ...input, [name]: value });
    }
  };

  const goToInput = id => {
    document.getElementById(id).focus();
  };

  const checkButton = () => {
    const { skuNumber, cont } = input;
    if (skuNumber.length === 7) {
      if (cont > 0) {
        props.acCreatePalletButton(false);
      } else {
        props.acCreatePalletButton(true);
      }
    } else {
      props.acCreatePalletButton(true);
    }
  };

  return (
    <AddPalletFormEl elevation={10}>
      <FormContainerEl onSubmit={handleSubmit}>
        <SkuEl
          label="SkuNumber"
          id="skuNumber"
          value={input.skuNumber}
          name="skuNumber"
          type="text"
          margin="none"
          onChange={e =>
            updateSkuNumberField(
              e.target.name,
              e.target.value.replace(/[^a-z0-9]/g, ''),
              7
            )
          }
        />
        <Cont
          id="cont"
          label="Cont"
          name="cont"
          value={input.cont}
          type="number"
          margin="none"
          onChange={e => updateContField(e.target.name, e.target.value)}
        />
        <ButtonEl
          disabled={props.button}
          type="submit"
          variant="contained"
          color="secondary"
        >
          <AddIcon />
        </ButtonEl>
      </FormContainerEl>
    </AddPalletFormEl>
  );
}

const mapStateToProps = state => ({
  button: state.reivingReducer.addPalletButton
});

const mapDispatchToProps = {
  warningMsgBar,
  infoMsgBar,
  acCreatePallet,
  acCreatePalletButton
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPalletForm);

const AddPalletFormEl = styled(PaperEl)`
  grid-area: AddPalletForm;
  max-height: 85px;
  min-width: 340px;
`;

const FormContainerEl = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const Cont = styled(SkuEl)`
  width: 75px;
  input {
    color: whitesmoke;
  }
`;

const ButtonEl = styled(Button)`
  height: 45px;
  svg {
    color: whitesmoke;
  }
`;
