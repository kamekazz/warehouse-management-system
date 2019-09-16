import React from 'react';
import styled from 'styled-components';
import { PaperEl } from '../../../Styles/Elements/ToolsEl';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';

function ProgressCop({ palletChart }) {
  const total = palletChart[1] + palletChart[2];
  const putAwayPro = Math.round((palletChart[2] / total) * 100);
  const receivingPro = Math.round((palletChart[1] / total) * 100);
  return (
    <PaperElEl elevation={10}>
      <div>
        <Typography variant="subtitle2">Put Away Productivity</Typography>
        <LinearProgress
          value={putAwayPro}
          variant="determinate"
          color="secondary"
        />
      </div>
      <div>
        <Typography variant="subtitle2">Receiving Productivity</Typography>
        <LinearProgress value={receivingPro} variant="determinate" />
      </div>
    </PaperElEl>
  );
}
const mapStateToProps = state => ({
  palletChart: state.reivingReducer.palletChart
});

export default connect(
  mapStateToProps,
  null
)(ProgressCop);

const PaperElEl = styled(PaperEl)`
  grid-area: ProgressCop;
`;
