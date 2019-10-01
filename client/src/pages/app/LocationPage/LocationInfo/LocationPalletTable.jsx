import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { PaperEl } from '../../../../Styles/Elements/ToolsEl';
import { centerEl } from '../../../../Styles/Mixins';
import { styleColor } from '../../../../Styles/styleThem';
import history from '../../../../redux/history';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/icons/Add';
import Pagination from 'material-ui-flat-pagination';

function LocationPalletTable({ data }) {
  return (
    <PaperElEl elevation={10}>
      <TopTopHeaderEl>
        <AddAndTotal>
          <AddLocationButton
            onClick={() => history.push('/app/receiving')}
            variant="contained"
            color="primary"
          >
            <Icon>send</Icon>
            Add New Pallet
          </AddLocationButton>
        </AddAndTotal>
      </TopTopHeaderEl>
      <HeaderRowEl>
        <ItemEl>location</ItemEl>
        <ItemEl>Count</ItemEl>
        <ItemEl>Status</ItemEl>
        <ItemEl>department</ItemEl>
      </HeaderRowEl>
      <BottomDivEl>
        {data.palletId.map(row => (
          <BottomRowEl
            key={row._id}
            onClick={() => history.push(`/app/pallet/${row._id}`)}
          >
            <ItemEl>{row.location ? row.location : 'null'}</ItemEl>
            <ItemEl>{`${row.contAvailable}/${row.cont}`}</ItemEl>
            <ItemEl>{row.status}</ItemEl>
            <ItemEl>{row.department}</ItemEl>
          </BottomRowEl>
        ))}
      </BottomDivEl>
    </PaperElEl>
  );
}

const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationPalletTable);

const PaperElEl = styled(PaperEl)`
  grid-area: LocationPalletTable;
`;

const AddAndTotal = styled.div`
  display: flex;
  button {
    margin-right: 12px;
  }
`;

const TotalDivEl = styled.div`
  display: flex;
  align-items: center;
  h6 {
    margin-right: 6px;
  }
  div {
    padding: 3px 9px;
    background-color: #ffffff1f;
    color: ${styleColor.secondary.main};
  }
`;

const PaginationEl = styled(Pagination)`
  .MuiFlatPageButton-root:not(:first-child):not(:last-child) {
    background-color: #ffffff1f;
    margin-left: 5px;
  }
`;

const TopTopHeaderEl = styled.div`
  margin: 12px 0;
  display: flex;
  justify-content: space-between;
`;

const AddLocationButton = styled(Button)`
  svg {
    margin-right: 6px;
  }
`;

const RowEl = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 12px 21px;
  @media (max-width: 600px) {
    padding: 12px 12px;
  }
`;

const HeaderRowEl = styled(RowEl)`
  background: linear-gradient(
    90deg,
    rgba(252, 251, 253, 0) 0%,
    rgb(139, 138, 231, 0.404) 2%,
    rgba(139, 138, 231, 0.404) 98%,
    rgba(255, 255, 255, 0) 100%
  );

  border-bottom: rgba(245, 245, 245, 0.2) solid 2px;
  border-radius: 3px;
  border-top: rgba(245, 245, 245, 0.2) solid 2px;
  padding: 6px 21px;
  font-weight: 700;
  div {
    transition: all 0.1s ease-in-out;
    text-transform: uppercase;
    &:hover {
      color: ${styleColor.secondary.lite};
      cursor: pointer;
    }
  }
`;

const BottomDivEl = styled.div`
  max-height: 60vh;
  overflow: auto;
  div {
    transition: all 0.2s ease-in-out;
    text-transform: uppercase;
    &:hover {
      color: ${styleColor.secondary.lite};
      cursor: pointer;
    }
  }
`;
const BottomRowEl = styled(RowEl)`
  color: rgba(245, 245, 245, 0.5);
  &:nth-of-type(even) {
    background-color: #7574c03b;
    border-radius: 3px;
  }
`;

const ItemEl = styled.div`
  ${centerEl};
  width: 110px;
  overflow: hidden;
  button {
    transition: all 0.3s ease-in-out;
    padding: 6px;
    color: rgba(255, 255, 255, 0.5);
    &:hover {
      color: rgba(255, 255, 255, 1);
    }
  }
  path {
  }
  @media (max-width: 600px) {
    width: 85px;
  }
`;

const DepartmentItemEl = styled(ItemEl)`
  @media (max-width: 380px) {
    display: none;
  }
`;
