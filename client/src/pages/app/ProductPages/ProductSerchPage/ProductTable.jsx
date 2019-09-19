import React from 'react';
import { PaperEl } from '../../../../Styles/Elements/ToolsEl';
import { styleColor } from '../../../../Styles/styleThem';
import { acQueryItem } from '../../../../redux/Item/item.action';
import { centerEl } from '../../../../Styles/Mixins';
import AddIcon from '@material-ui/icons/Add';
import history from '../../../../redux/history';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Pagination from 'material-ui-flat-pagination';

function ProductTable({
  data,
  pages,
  page,
  total,
  loading,
  acQueryItem,
  skuNumber
}) {
  let skuNumberOjc = {};
  skuNumberOjc.skuNumber = skuNumber;
  return (
    <PaperElEl elevation={10}>
      <TopTopHeaderEl>
        <AddAndTotal>
          <AddLocationButton
            onClick={() => history.push('/app/product/create')}
            variant="contained"
            color="primary"
          >
            <AddIcon></AddIcon>
            Add Product
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
            acQueryItem(skuNumberOjc, 25, offset + 1);
          }}
        />
      </TopTopHeaderEl>
      <HeaderRowEl>
        <ItemEl>SKU</ItemEl>
        <ItemEl>name</ItemEl>
        <ItemEl>department</ItemEl>
        <ItemElDsNone425El>size</ItemElDsNone425El>
        <ItemElDsNoneEl>ounce</ItemElDsNoneEl>
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
            <ItemElDsNone425El>{row.size}</ItemElDsNone425El>
            <ItemElDsNoneEl>{row.ounce}</ItemElDsNoneEl>
          </BottomRowEl>
        ))}
      </BottomDivEl>
    </PaperElEl>
  );
}

const mapStateToProps = state => ({
  data: state.itemReducer.itemArray,
  pages: state.itemReducer.pages,
  page: state.itemReducer.page,
  loading: state.itemReducer.loading,
  total: state.itemReducer.totalResults
});

const mapDispatchToProps = {
  acQueryItem
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductTable);

const PaperElEl = styled(PaperEl)`
  grid-area: ProductTable;
`;

const TopTopHeaderEl = styled.div`
  margin: 12px 0;
  display: flex;
  justify-content: space-between;
`;

const AddAndTotal = styled.div`
  display: flex;
  button {
    margin-right: 12px;
  }
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
  max-height: 55vh;
  @media (max-width: 1000px) {
    max-height: 35vh;
  }
  @media (max-width: 600px) {
    max-height: 30vh;
  }
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

const ItemElDsNoneEl = styled(ItemEl)`
  @media (max-width: 600px) {
    display: none;
  }
`;
const ItemElDsNone425El = styled(ItemEl)`
  @media (max-width: 450px) {
    display: none;
  }
`;
