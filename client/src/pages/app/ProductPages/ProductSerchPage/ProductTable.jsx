import React from 'react';
import { PaperEl } from '../../../../Styles/Elements/ToolsEl';
import { styleColor } from '../../../../Styles/styleThem';
import { centerEl } from '../../../../Styles/Mixins';
import AddIcon from '@material-ui/icons/Add';
import history from '../../../../redux/history';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

function ProductTable({ data }) {
  return (
    <PaperEl>
      {' '}
      <TopTopHeaderEl>
        <AddLocationButton
          onClick={() => history.push('/app/product/create')}
          variant="contained"
          color="primary"
        >
          <AddIcon></AddIcon>
          Add Product
        </AddLocationButton>
      </TopTopHeaderEl>
      <HeaderRowEl>
        <ItemEl>SKU</ItemEl>
        <ItemEl>name</ItemEl>
        <ItemEl>department</ItemEl>
        <ItemEl>size</ItemEl>
        <ItemEl>ounce</ItemEl>
      </HeaderRowEl>
      <BottomDivEl>
        {data.map(row => (
          <BottomRowEl
            key={row._id}
            onClick={() => history.push(`/app/product/${row.skuNumber}`)}
          >
            <ItemSkuEl>{row.skuNumber}</ItemSkuEl>
            <Tooltip title={row.name}>
              <ItemNameEl>{row.name}</ItemNameEl>
            </Tooltip>
            <ItemEl>{row.department}</ItemEl>
            <ItemEl>{row.size}</ItemEl>
            <ItemEl>{row.ounce}</ItemEl>
          </BottomRowEl>
        ))}
      </BottomDivEl>
    </PaperEl>
  );
}

const mapStateToProps = state => ({
  data: state.itemReducer.itemArray
});

const mapDispatchToProps = {};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductTable);

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
  &:hover div {
    cursor: pointer;
    color: ${styleColor.secondary.main};
  }
`;

const ItemEl = styled.div`
  ${centerEl};
  width: 110px;
  overflow: hidden;
`;

const ItemSkuEl = styled.div`
  color: ${styleColor.primary.lite};
  letter-spacing: 3px;
  text-transform: uppercase;
  width: 110px;
`;

const ItemNameEl = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 110px;
`;
