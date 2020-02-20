import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { acCancelSuctions } from '../../../redux/cubiData/cubiData.action';

function FormDialog(props) {
  const { modelBox, productInfo, acCancelSuctions } = props;
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    acCancelSuctions();
  };
  console.log('object', props.productInfo);
  if (!productInfo) {
    return null;
  }

  return (
    <>
      <Dialog
        open={modelBox}
        // onClose={props.productInfo}

        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          {productInfo.description}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <ColumnEl>
              <img src={productInfo.img} alt="Logo" />
              <p>please enter the correct measurements in decimals practice.</p>
            </ColumnEl>
          </DialogContentText>
          <RowEl>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Length"
              type="number"
              autoComplete="off"
            />
            <TextField
              margin="dense"
              id="name"
              label="WIDTH"
              type="number"
              autoComplete="off"
            />
          </RowEl>
          <RowEl>
            <TextField
              margin="dense"
              id="name"
              label="HEIGHT"
              type="number"
              autoComplete="off"
            />
            <TextField
              margin="dense"
              id="name"
              label="WEIGHT"
              type="number"
              autoComplete="off"
            />
          </RowEl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={() => {}} variant="contained" color="secondary">
            Next
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

const mapStateToProps = state => ({
  modelBox: state.cubiDataReducer.modelBox,
  productInfo: state.cubiDataReducer.productInfo
});

const mapDispatchToProps = { acCancelSuctions };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormDialog);

const RowEl = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
`;

const ColumnEl = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  img {
    width: 25%;
    margin-right: 12px;
    @media (max-width: 600px) {
      width: 100%;
      margin-right: 0;
    }
  }
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
