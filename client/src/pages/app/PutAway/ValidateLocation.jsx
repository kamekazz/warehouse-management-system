// 5d71da55f101311f2c415e78
// c-204-165-10
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

  const checkButton = () => {
    const { location } = input;
    if (location.length === goodLocation.length) {
      if (input.location === goodLocation) {
        props.acValidateLocation(id, input.location);
        handelClear();
      } else {
        props.warningMsgBar(`wrong location${input.location}`);
        handelClear();
      }
    }
  };

  useEffect(() => {
    checkButton();
  }, [input]);

  const updateContField = (name, value) => {
    let regex = new RegExp('^[a-z0-9-]+$');
    if (regex.test(value)) {
      setInput({ ...input, [name]: value });
    } else {
      props.warningMsgBar('wrong input');
      handelClear();
    }
  };
  const handelSubmit = e => {
    e.preventDefault();
    if (input.location === goodLocation) {
      props.acValidateLocation(id, input.location);
      handelClear();
    } else {
      props.warningMsgBar(`wrong location${input.location}`);
      handelClear();
    }
  };

  return (
    <PaperElEL elevation={10}>
      <HeaderCard elevation={10}>
        <H3El>
          <span>Validate Location:</span>
          <span className="goodLocation">{`"${goodLocation}"`}</span>
        </H3El>
      </HeaderCard>
      <FormEL onSubmit={handelSubmit}>
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
        <ButtonDiv>
          <Button variant="contained" onClick={handelClear}>
            clear
          </Button>
          <Button
            variant="contained"
            color="secondary"
            type="submit"
            onClick={handelSubmit}
          >
            Validate
          </Button>
        </ButtonDiv>
      </FormEL>
    </PaperElEL>
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

const ButtonDiv = styled.div`
  display: flex;
  button:not(:last-child) {
    margin-right: 12px;
  }
`;

const H3El = styled.h3`
  text-align: center;
  .goodLocation {
    color: ${styleColor.color.black1};
    font-weight: 800;
  }
`;
