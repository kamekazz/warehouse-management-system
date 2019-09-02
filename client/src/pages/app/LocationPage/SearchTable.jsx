import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { PaperEl } from '../../../Styles/Elements/ToolsEl';
import { centerEl } from '../../../Styles/Mixins';
import { styleColor } from '../../../Styles/styleThem';
import Icon from '@material-ui/icons/Add';
import history from '../../../redux/history';
import {
  warningMsgBar,
  infoMsgBar
} from '../../../redux/Notification/notification.actions';
import Button from '@material-ui/core/Button';

const statusHelper = status => {
  switch (status) {
    case 'empty':
      return <BagsEl bg="rgba(0, 255, 0, 0.3)">Empty</BagsEl>;
    case 'occupied':
      return <BagsEl bg="#5654df5b">Occupied</BagsEl>;
    case 'maintenance':
      return <BagsEl bg={`#ff6a9c57`}>Maintenance</BagsEl>;
    case 'upcoming':
      return <BagsEl bg="#ffe60088">Upcoming</BagsEl>;
    default:
      return <BagsEl>null</BagsEl>;
  }
};

const sizeHelper = (size, maxSize) => {
  let color = 'red';
  let result = Math.round((size / maxSize) * 100);
  if (result <= 20) {
    color = 'rgba(0, 255, 0, 0.3)';
  } else if (result <= 60) {
    color = '#5654df5b';
  } else if (result <= 75) {
    color = '#ffe60088';
  } else {
    color = '#ff6a9c57';
  }
  return <SizeColorEl bg={color}>{`${size}/${maxSize}`}</SizeColorEl>;
};

function SearchTable(props) {
  return (
    <PaperEl elevation={3}>
      <TopTopHeaderEl>
        <AddLocationButton
          onClick={() => history.push('/app/location/create')}
          variant="contained"
          color="primary"
        >
          <Icon>send</Icon>
          Add Location
        </AddLocationButton>
      </TopTopHeaderEl>
      <HeaderRowEl>
        <ItemEl>location</ItemEl>
        <ItemEl>product</ItemEl>
        <ItemEl>size</ItemEl>
        <ItemEl>status</ItemEl>
        <ItemEl>department</ItemEl>
      </HeaderRowEl>
      <BottomDivEl>
        {props.data.map(row => (
          <BottomRowEl key={row._id}>
            <ItemEl>{row.fullName}</ItemEl>
            <ItemEl>{row.skuNumber ? row.skuNumber : 'empty'}</ItemEl>
            <ItemEl>{sizeHelper(row.size, row.maxSize)}</ItemEl>
            <ItemEl>{statusHelper(row.status)}</ItemEl>
            <ItemEl>{row.department ? row.department : 'null'}</ItemEl>
            <ItemEl>actions button</ItemEl>
          </BottomRowEl>
        ))}
      </BottomDivEl>
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

const TopTopHeaderEl = styled.div`
  margin: 12px 0;
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
    transition: all 0.2s ease-in-out;
    text-transform: uppercase;
    &:hover {
      color: ${styleColor.secondary.lite};
      cursor: pointer;
    }
  }
`;

const BottomDivEl = styled.div`
  height: 60vh;
  overflow: auto;
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
`;

const BagsEl = styled.div`
  ${centerEl};
  border-radius: 50px;
  background: ${({ bg }) => bg};
  padding: 0 10px;
`;

const SizeColorEl = styled.div`
  ${centerEl};
  border-radius: 10px;
  background: ${({ bg }) => bg};
  padding: 0 5px;
`;
