// 5d71d75ff101311f2c415e71
// c-204-165-10
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
import { acValidateLocation } from '../../../redux/reiving/reiving.action';

function ValidateLocation(props) {
  const [input, setInput] = useState({
    location: ''
  });
  const handelClear = () => {
    setInput({ location: '' });
  };

  const goodLocation = props.palletInfo.location;
  const id = props.palletInfo._id;

  // const checkButton = () => {
  //   const { palletId } = input;
  //   if (palletId.length === 24) {
  //     props.acPikePallet(input.palletId);
  //     setInput({ palletId: '' });
  //   }
  // };

  // useEffect(() => {
  //   checkButton();
  // }, [input]);

  const updateContField = (name, value) => {
    let regex = new RegExp('^[a-z0-9-]+$');
    if (regex.test(value)) {
      setInput({ ...input, [name]: value });
    } else {
      props.warningMsgBar('wrong input');
    }
  };
  const handelSubmit = e => {
    e.preventDefault();
    if (input.location === goodLocation) {
      props.acValidateLocation(id, input.location);
      handelClear();
    } else {
      props.warningMsgBar(`wrong location${input.location}`);
    }
  };

  return (
    <AddPalletFormEl elevation={10}>
      <form onSubmit={handelSubmit}>
        <TextField
          autoFocus
          label="Location"
          id="location"
          value={input.location}
          name="location"
          type="text"
          margin="none"
          onChange={e => updateContField(e.target.name, e.target.value)}
        />
        <Button onClick={handelClear}>clear</Button>
        <Button type="submit" onClick={handelSubmit}>
          Validate
        </Button>
      </form>
    </AddPalletFormEl>
  );
}

const mapStateToProps = state => ({
  palletInfo: state.reivingReducer.picketUpPallet
});

const mapDispatchToProps = {
  warningMsgBar,
  infoMsgBar,
  acValidateLocation
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ValidateLocation);

const AddPalletFormEl = styled(PaperEl)`
  margin-top: 12px;
`;
