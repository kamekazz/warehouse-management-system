import React from 'react';

import { PaperEl } from '../../../../Styles/Elements/ToolsEl';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { styleColor } from '../../../../Styles/styleThem';
import history from '../../../../redux/history';
import Paper from '@material-ui/core/Paper';
import { format } from 'date-fns';

function InfoCop({ data }) {
  console.log('data', data);
  const { date, fullName, skuNumber, status, size, maxSize, palletId } = data;
  const okDate = Date.parse(date);
  return (
    <PaperElEl>
      <DivRowEl>
        <ItemInfo>
          <Typography variant="subtitle2">Name:</Typography>
          <Paper>{fullName}</Paper>
        </ItemInfo>
        <ItemInfo
          goodClick
          onClick={
            skuNumber ? () => history.push(`/app/product/${skuNumber}`) : null
          }
        >
          <Typography variant="subtitle2">SKU:</Typography>
          <Paper>{skuNumber ? skuNumber : 'null'}</Paper>
        </ItemInfo>
      </DivRowEl>
      <DivRowEl>
        <ItemInfo>
          <Typography variant="subtitle2">Size:</Typography>
          <Paper>{`${size}/${maxSize}`}</Paper>
        </ItemInfo>
        <ItemInfo>
          <Typography variant="subtitle2">Status:</Typography>
          <Paper>{status}</Paper>
        </ItemInfo>
      </DivRowEl>
      <DivRowElLastEl>
        <ItemInfo>
          <Typography variant="subtitle2">created:</Typography>
          <Paper>{format(okDate, 'MM-dd-yyyy')}</Paper>
        </ItemInfo>
        <ItemInfo>
          <Typography variant="subtitle2">Pallets:</Typography>
          <Paper>{palletId.length}</Paper>
        </ItemInfo>
      </DivRowElLastEl>
    </PaperElEl>
  );
}

export default InfoCop;

const PaperElEl = styled(PaperEl)`
  max-width: 375px;
  grid-area: InfoCop;
`;

const DivRowEl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3px;
`;

const DivRowElLastEl = styled(DivRowEl)`
  margin-bottom: 0;
`;

const ItemInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0;
  ${({ goodClick }) => goodClick && 'cursor: pointer;'}
  h6 {
    margin-right: 6px;
  }
  div {
    padding: 3px 9px;
    background-color: #ffffff1f;
    color: ${styleColor.secondary.main};
  }
`;

const IDItemEl = styled(ItemInfo)`
  width: 100%;
  justify-content: space-between;
`;

const NameInfo = styled(Paper)`
  &:hover {
    color: ${styleColor.secondary.lite};
    cursor: pointer;
  }
  max-width: 120px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
