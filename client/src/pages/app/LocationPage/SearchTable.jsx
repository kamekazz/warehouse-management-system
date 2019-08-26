import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { PaperEl } from '../../../Styles/Elements/ToolsEl';
import { centerEl } from '../../../Styles/Mixins';
import { styleColor } from '../../../Styles/styleThem';
import {
  warningMsgBar,
  infoMsgBar
} from '../../../redux/Notification/notification.actions';

const statusHelper = status => {
  switch (status) {
    case 'empty':
      return <BagsEl>Empty</BagsEl>;
    case 'occupied':
      return <BagsEl>Occupied</BagsEl>;
    case 'maintenance':
      return <BagsEl>Maintenance</BagsEl>;
    case 'upcoming':
      return <BagsEl>Upcoming</BagsEl>;
    default:
      return <BagsEl>null</BagsEl>;
  }
};

function SearchTable(props) {
  return (
    <PaperEl elevation={3}>
      <HeaderRowEl>
        <ItemEl>location</ItemEl>
        <ItemEl>product</ItemEl>
        <ItemEl>size</ItemEl>
        <ItemEl>status</ItemEl>
        <ItemEl>department</ItemEl>
      </HeaderRowEl>
      {props.data.map(row => (
        <BottomRowEl key={row._id}>
          <ItemEl>{row.fullName}</ItemEl>
          <ItemEl>{row.skuNumber ? row.skuNumber : 'empty'}</ItemEl>
          <ItemEl>{`${row.size}/${row.maxSize}`}</ItemEl>
          <ItemEl>{row.status}</ItemEl>
          <ItemEl>{row.department ? row.department : 'null'}</ItemEl>
        </BottomRowEl>
      ))}
    </PaperEl>
  );
}

const mapStateToProps = state => ({
  data: state.locationReducer.queryData
});

const mapDispatchToProps = {
  warningMsgBar,
  infoMsgBar
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchTable);

const RowEl = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 12px 21px;
`;

const HeaderRowEl = styled(RowEl)`
  background: rgba(139, 138, 231, 0.404);
  border-bottom: rgba(245, 245, 245, 0.5) solid 2px;
  border-radius: 3px;
  border-top: rgba(245, 245, 245, 0.5) solid 2px;
  padding: 6px 21px;
  font-weight: 700;
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
  border-bottom: rgba(245, 245, 245, 0.5) solid 2px;
  color: rgba(245, 245, 245, 0.5);
`;

const ItemEl = styled.div`
  ${centerEl};
  width: 110px;
  overflow: hidden;
`;

const BagsEl = styled.div`
  ${centerEl};
  border-radius: 50px;
  min-width: 75px;
`;

const BagsElEmptyEl = styled(BagsEl)`
  background: ${styleColor.secondary.main};
`;
