import React from 'react';
import { PaperEl } from '../../../../../Styles/Elements/ToolsEl';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { styleColor } from '../../../../../Styles/styleThem';
import Paper from '@material-ui/core/Paper';

function InfoCop({ data }) {
  const { name, size, skuNumber, department, description, ounce, date } = data;

  return (
    <PaperElEl>
      <DivRowEl>
        <ItemInfo>
          <Typography variant="subtitle2">SKU:</Typography>
          <NameInfo>{skuNumber}</NameInfo>
        </ItemInfo>
        <ItemInfo>
          <Typography variant="subtitle2">Name:</Typography>
          <NameInfo>{name}</NameInfo>
        </ItemInfo>
      </DivRowEl>
      <DivRowEl>
        <ItemInfo>
          <Typography variant="subtitle2">Department:</Typography>
          <Paper>{department}</Paper>
        </ItemInfo>
        <ItemInfo>
          <Typography variant="subtitle2">Created By:</Typography>
          <Paper>9/8/19</Paper>
        </ItemInfo>
      </DivRowEl>
      <DivRowEl>
        <ItemInfoEl>
          <Typography variant="subtitle2" gutterBottom>
            Description:
          </Typography>
          <Paper>{description}</Paper>
        </ItemInfoEl>
      </DivRowEl>
      <DivRowEl>
        <ItemInfo>
          <Typography variant="subtitle2">Size:</Typography>
          <Paper>{size}</Paper>
        </ItemInfo>
        <ItemInfo>
          <Typography variant="subtitle2">weigh:</Typography>
          <Paper>{ounce}</Paper>
        </ItemInfo>
      </DivRowEl>
    </PaperElEl>
  );
}

export default InfoCop;

const PaperElEl = styled(PaperEl)`
  max-width: 450px;
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
  h6 {
    margin-right: 6px;
  }
  div {
    padding: 3px 9px;
    background-color: #ffffff1f;
    color: ${styleColor.secondary.main};
  }
`;

const ItemInfoEl = styled(ItemInfo)`
  align-items: flex-start;
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
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
