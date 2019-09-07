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
import { acPikePallet } from '../../../redux/reiving/reiving.action';

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
  };

  return (
    <AddPalletFormEl elevation={10}>
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
      <Button onClick={handelClear}>clear</Button>
    </AddPalletFormEl>
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

const AddPalletFormEl = styled(PaperEl)`
  margin-top: 12px;
`;
