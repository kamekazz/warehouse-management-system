import React, { useState, useEffect } from 'react';
import { PaperEl } from '../../../Styles/Elements/ToolsEl';
import TextField from '@material-ui/core/TextField';
import { styleColor } from '../../../Styles/styleThem';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import {
  warningMsgBar,
  infoMsgBar
} from '../../../redux/Notification/notification.actions';
import { acPikePallet } from '../../../redux/reiving/reiving.action';
import { hpGoToInput } from '../../../util/helper';

function ScanPallet(props) {
  const [input, setInput] = useState({
    palletId: ''
  });
  const checkButton = () => {
    const { palletId } = input;
    if (palletId.length === 24) {
      props.acPikePallet(input.palletId);
      setInput({ palletId: '' });
    }
  };

  useEffect(() => {
    checkButton();
    hpGoToInput('palletId');
  }, [input]);

  const updateContField = (name, value) => {
    let regex = new RegExp('^[a-z0-9]+$');
    if (regex.test(value)) {
      setInput({ ...input, [name]: value });
    } else {
      props.warningMsgBar('wrong input');
    }
  };
  const handelClear = () => {
    setInput({ palletId: '' });
    hpGoToInput('palletId');
  };

  return (
    <PaperElEL elevation={10}>
      <HeaderCard elevation={12}>
        <H3El>
          <span>Scan barcode</span>
        </H3El>
      </HeaderCard>
      <FormEL>
        <TextField
          autoFocus
          label="Pallet ID"
          id="palletId"
          value={input.palletId}
          name="palletId"
          type="text"
          margin="none"
          onChange={e => updateContField(e.target.name, e.target.value)}
        />
        <Button variant="contained" onClick={handelClear}>
          clear
        </Button>
      </FormEL>
    </PaperElEL>
  );
}

const mapStateToProps = state => ({
  button: state.reivingReducer.addPalletButton
});

const mapDispatchToProps = {
  warningMsgBar,
  infoMsgBar,
  acPikePallet
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScanPallet);

const PaperElEL = styled(PaperEl)`
  margin-top: 26px;
  .MuiPaper-root {
    background-color: ${styleColor.primary.lite};
    transform: translate(0, -26px);
  }
`;

const HeaderCard = styled(PaperEl)``;

const FormEL = styled.form`
  display: flex;
  justify-content: space-between;
`;

const H3El = styled.h3`
  text-align: center;
  .goodLocation {
    color: ${styleColor.color.black1};
    font-weight: 800;
  }
`;
