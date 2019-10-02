import React from 'react';
import { PaperEl } from '../../../Styles/Elements/ToolsEl';
import TransferDialog from './TransferDialog';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';

function ActionCop() {
  const [state, setState] = React.useState({
    checkedA: true,
    dialogOpen: false,
    worker: 'Random',
    location: '',
    count: 25
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.value });
  };
  const handleChangeChecked = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const handleDialogOpenState = option => {
    setState({ ...state, dialogOpen: option, worker: '', location: '' });
  };

  return (
    <PaperElEl elevation={10}>
      <Typography variant="h6">Option for Pallet</Typography>
      <ActionDiv>
        <Button
          variant="contained"
          onClick={() => handleDialogOpenState(true)}
          color="secondary"
        >
          transfer
        </Button>
        <FormControlLabel
          control={
            <Switch
              checked={state.checkedB}
              onChange={handleChangeChecked('checkedB')}
              value="checkedB"
              color="secondary"
            />
          }
          label="Add to Cycle Count"
        />
      </ActionDiv>
      <TransferDialog
        dialogOpen={state.dialogOpen}
        handleDialogOpenState={handleDialogOpenState}
        handleChange={handleChange}
        worker={state.worker}
        location={state.location}
        count={state.count}
      />
    </PaperElEl>
  );
}

export default ActionCop;

const PaperElEl = styled(PaperEl)`
  grid-area: ActionCop;
`;

const ActionDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  label {
    margin-bottom: 0rem;
    margin-right: 0;
  }
`;
