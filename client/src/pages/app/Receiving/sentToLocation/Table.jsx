// 2276488
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PaperEl } from '../../../../Styles/Elements/ToolsEl';
import { styleColor } from '../../../../Styles/styleThem';
import styled from 'styled-components';
import { centerEl } from '../../../../Styles/Mixins';
import Tooltip from '@material-ui/core/Tooltip';
import {
  acGetPalletsByState,
  acPickPallet,
  acG
} from '../../../../redux/reiving/reiving.action';
import { formatDistance } from 'date-fns';

function TableCop({ data, pallet }) {
  useEffect(() => {}, []);
  return (
    <PaperEl>
      <TopTopHeaderEl>
        <h6>find Locations</h6>
      </TopTopHeaderEl>
      <HeaderRowEl>
        <ItemEl>location</ItemEl>
        <ItemEl>Size</ItemEl>
      </HeaderRowEl>
      <BottomDivEl>
        {data.map(row => {
          return (
            <BottomRowEl key={row._id}>
              <ItemEl>{row.fullName}</ItemEl>
              <ItemEl>{row.size + '/' + row.maxSize}</ItemEl>
            </BottomRowEl>
          );
        })}
      </BottomDivEl>
    </PaperEl>
  );
}

const mapStateToProps = state => ({
  data: state.reivingReducer.locations,
  pallet: state.reivingReducer.newPallet
});

const mapDispatchToProps = {};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableCop);

const TopTopHeaderEl = styled.div`
  margin: 12px 0;
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

const ItemEl = styled.div`
  ${centerEl};
  width: 110px;
  overflow: hidden;
`;
const BottomDivEl = styled.div`
  overflow: auto;
`;

const BottomRowEl = styled(RowEl)`
  color: rgba(245, 245, 245, 0.5);
  max-height: 30vh;
  &:nth-of-type(even) {
    background-color: #7574c03b;
    border-radius: 3px;
  }
  &:hover div {
    cursor: pointer;
    color: ${styleColor.secondary.main};
  }
`;

const ItemSkuEl = styled.div`
  color: ${styleColor.primary.lite};
  letter-spacing: 3px;
  text-transform: uppercase;
  width: 110px;
`;

const ItemIdEl = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 110px;
`;
