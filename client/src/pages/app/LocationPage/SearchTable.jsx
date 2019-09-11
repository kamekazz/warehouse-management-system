import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { PaperEl } from '../../../Styles/Elements/ToolsEl';
import Paper from '@material-ui/core/Paper';
import { centerEl } from '../../../Styles/Mixins';
import { styleColor } from '../../../Styles/styleThem';
import history from '../../../redux/history';
import {
  warningMsgBar,
  infoMsgBar
} from '../../../redux/Notification/notification.actions';

import {
  deleteLocation,
  queryLocation,
  acPaginationLocation
} from '../../../redux/Location/location.action';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import BuildIcon from '@material-ui/icons/Build';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Tooltip from '@material-ui/core/Tooltip';
import Pagination from 'material-ui-flat-pagination';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';

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

function SearchTable({
  data,
  deleteLocation,
  queryLocation,
  getEditFormCreat,
  acPaginationLocation,
  pages,
  page,
  total,
  loading
}) {
  const runDeleteAndQueryLocation = body => {
    deleteLocation(body, () => queryLocation());
  };

  return (
    <PaperEl elevation={3}>
      <TopTopHeaderEl>
        <AddAndTotal>
          <AddLocationButton
            onClick={() => history.push('/app/location/create')}
            variant="contained"
            color="primary"
          >
            <Icon>send</Icon>
            Add Location
          </AddLocationButton>
          <TotalDivEl>
            <Typography variant="subtitle2">Total</Typography>
            <Paper>{total}</Paper>
          </TotalDivEl>
        </AddAndTotal>
        <PaginationEl
          limit={1}
          offset={page - 1}
          total={pages}
          onClick={(e, offset) => {
            acPaginationLocation(50, offset + 1);
          }}
        />
      </TopTopHeaderEl>
      <HeaderRowEl>
        <ItemEl>location</ItemEl>
        <ItemEl>product</ItemEl>
        <ItemEl>size</ItemEl>
        <ItemEl>status</ItemEl>
        <ItemEl>department</ItemEl>
        <ItemEl>action</ItemEl>
      </HeaderRowEl>
      <BottomDivEl>
        {!loading ? (
          data.map(row => (
            <BottomRowEl key={row._id}>
              <ItemEl>{row.fullName}</ItemEl>
              <ItemEl>{row.skuNumber ? row.skuNumber : 'empty'}</ItemEl>
              <ItemEl>{sizeHelper(row.size, row.maxSize)}</ItemEl>
              <ItemEl>{statusHelper(row.status)}</ItemEl>
              <ItemEl>{row.department ? row.department : 'null'}</ItemEl>
              <ItemEl>
                <Tooltip title="View">
                  <IconButton>
                    <VisibilityIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Edit">
                  <IconButton
                    onClick={() =>
                      getEditFormCreat(row.fullName, row.maxSize, row.status)
                    }
                  >
                    <BuildIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                  <IconButton
                    aria-label="delete"
                    onClick={() => runDeleteAndQueryLocation(row.fullName)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
              </ItemEl>
            </BottomRowEl>
          ))
        ) : (
          <LinearProgress color="secondary" />
        )}
      </BottomDivEl>
    </PaperEl>
  );
}

const mapStateToProps = state => ({
  data: state.locationReducer.queryData,
  pages: state.locationReducer.pages,
  page: state.locationReducer.page,
  loading: state.locationReducer.loading,
  total: state.locationReducer.totalResults
});

const mapDispatchToProps = {
  warningMsgBar,
  infoMsgBar,
  deleteLocation,
  queryLocation,
  acPaginationLocation
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchTable);

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
  max-height: 60vh;
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
