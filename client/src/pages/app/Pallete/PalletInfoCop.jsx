import React from 'react';
import { PaperEl } from '../../../Styles/Elements/ToolsEl';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { styleColor } from '../../../Styles/styleThem';
import history from '../../../redux/history';
import Paper from '@material-ui/core/Paper';

function PalletInfoCop({ data }) {
  const {
    skuNumber,
    _id,
    contAvailable,
    cont,
    location,
    size,
    ounce,
    department,
    status,
    item
  } = data;
  return (
    <PaperElEl>
      <DivRowEl>
        <ItemInfo>
          <Typography variant="subtitle2">SKU:</Typography>
          <NameInfo onClick={() => history.push(`/app/product/${skuNumber}`)}>
            {skuNumber}
          </NameInfo>
        </ItemInfo>
        <ItemInfo>
          <Typography variant="subtitle2">Name:</Typography>
          <NameInfo onClick={() => history.push(`/app/product/${skuNumber}`)}>
            {item.name}
          </NameInfo>
        </ItemInfo>
      </DivRowEl>
      <DivRowEl>
        <IDItemEl>
          <Typography variant="subtitle2">ID:</Typography>
          <Paper>{_id}</Paper>
        </IDItemEl>
      </DivRowEl>
      <DivRowEl>
        <ItemInfo>
          <Typography variant="subtitle2">Status:</Typography>
          <Paper>{status}</Paper>
        </ItemInfo>
        <ItemInfo>
          <Typography variant="subtitle2">Department:</Typography>
          <Paper>{department}</Paper>
        </ItemInfo>
      </DivRowEl>
      <DivRowEl>
        <ItemInfo>
          <Typography variant="subtitle2">Items:</Typography>
          <Paper>{`${contAvailable}/${cont}`}</Paper>
        </ItemInfo>
        <ItemInfo
          clickGood
          onClick={
            location ? () => history.push(`/app/location/${location}`) : null
          }
        >
          <Typography variant="subtitle2">Location:</Typography>
          <Paper>{location ? location : 'null'}</Paper>
        </ItemInfo>
      </DivRowEl>
      <DivRowElLastEl>
        <ItemInfo>
          <Typography variant="subtitle2">Size:</Typography>
          <Paper>{size}</Paper>
        </ItemInfo>
        <ItemInfo>
          <Typography variant="subtitle2">Weight:</Typography>
          <Paper>{ounce}</Paper>
        </ItemInfo>
      </DivRowElLastEl>
    </PaperElEl>
  );
}

export default PalletInfoCop;

const PaperElEl = styled(PaperEl)`
  max-width: 350px;
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
