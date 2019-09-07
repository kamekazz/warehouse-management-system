import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ScanPallet from './ScanPallet';
import { connect } from 'react-redux';
import ValidateLocation from './ValidateLocation';
import { acResetPutAway } from '../../../redux/reiving/reiving.action';
import styled from 'styled-components';
import { PaperEl } from '../../../Styles/Elements/ToolsEl';
import { styleColor } from '../../../Styles/styleThem';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  backButton: {
    marginRight: theme.spacing(1)
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));

function AllDoneCop() {
  return (
    <PaperElEL elevation={10}>
      <HeaderCard elevation={12}>
        <H3El>All steps completed</H3El>
      </HeaderCard>
      <FormEL>
        <Typography variant="h6" gutterBottom>
          great pike a new pallet
        </Typography>
      </FormEL>
    </PaperElEL>
  );
}

function getSteps() {
  return ['Pike a Pallet', 'Take to Location', 'leave the Pallet'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <ScanPallet />;
    case 1:
      return <ValidateLocation />;
    case 2:
      return <AllDoneCop />;
    default:
      return 'validate location';
  }
}

function Main({ activeStep, acResetPutAway }) {
  const classes = useStyles();
  const steps = getSteps();

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        <div>{getStepContent(activeStep)}</div>
        {activeStep >= 1 ? (
          <Button
            onClick={() => acResetPutAway()}
            variant="contained"
            color="primary"
          >
            reset
          </Button>
        ) : null}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  activeStep: state.reivingReducer.activeStep
});

const mapDispatchToProps = {
  acResetPutAway
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

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
  justify-content: center;
`;

const H3El = styled.h3`
  text-align: center;
  .goodLocation {
    color: ${styleColor.color.black1};
    font-weight: 800;
  }
`;
