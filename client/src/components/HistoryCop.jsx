import React from 'react';
import styled from 'styled-components';
import { PaperEl } from '../Styles/Elements/ToolsEl';
import { maxMinWidth } from '../Styles/Mixins';
import Paper from '@material-ui/core/Paper';
import { styleColor } from '../Styles/styleThem';
import Typography from '@material-ui/core/Typography';

const dataListNote = [
  { note: 'created by manny', date: '9/1/19' },
  { note: 'put away by joe', date: '9/2/19' },
  { note: 'scan  by maria', date: '9/1/19' },
  { note: 'pick by manny', date: '9/15/19' },
  { note: 'scan by manny', date: '9/1/19' },
  { note: 'packing by manny', date: '9/1/19' },
  { note: 'removed by manny', date: '9/21/19' }
];

function HistoryCop() {
  return (
    <PaperElEL elevation={10}>
      <HeaderCard elevation={12}>
        <H3El>
          <span>Activity's</span>
        </H3El>
      </HeaderCard>
      <InfoDivEl>
        <Typography variant="subtitle2">Note:</Typography>
        <Typography variant="subtitle2">Date:</Typography>
      </InfoDivEl>
      <BottomBodyEl>
        {dataListNote.map(row => (
          <DivRowEl key={row.note}>
            <ItemInfo>
              <Paper>{row.note}</Paper>
            </ItemInfo>
            <ItemInfo>
              <Paper>{row.date}</Paper>
            </ItemInfo>
          </DivRowEl>
        ))}
      </BottomBodyEl>
    </PaperElEL>
  );
}

export default HistoryCop;

const PaperElEL = styled(PaperEl)`
  grid-area: HistoryCop;
  justify-self: end;
  ${maxMinWidth('300px', '320px')}
  .MuiPaper-root {
    background-color: ${styleColor.primary.lite};
    transform: translate(0, -19px);
  }
  @media (max-width: 600px) {
    justify-self: center;
  }
`;

const HeaderCard = styled(PaperEl)``;

const BottomBodyEl = styled.div`
  .MuiPaper-root {
    background-color: #ffffff1f;
    transform: translate(0, 0);
  }
`;

const InfoDivEl = styled.div`
  display: flex;
  justify-content: space-between;
`;

const H3El = styled.h5`
  text-align: center;
  .goodLocation {
    color: ${styleColor.color.black1};
    font-weight: 800;
  }
`;

const DivRowEl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3px;
`;

const ItemInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0;
  ${({ clickGood }) => clickGood && 'cursor: pointer;'}
  h6 {
    margin-right: 6px;
  }
  div {
    padding: 3px 9px;
    background-color: #ffffff1f;
    color: ${styleColor.secondary.main};
  }
`;
