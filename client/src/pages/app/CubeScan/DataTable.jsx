import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import MUIDataTable from 'mui-datatables';

const columns = [
  {
    label: 'UPC',
    name: 'upc',
    options: {
      filter: true,
      sort: true
    }
  },
  {
    label: 'ITEM',
    name: 'item',
    options: {
      filter: true,
      sort: true
    }
  },
  {
    label: 'SIZE',
    name: 'size',
    options: {
      filter: true,
      sort: true
    }
  },
  {
    label: 'DESCRIPTION',
    name: 'description',
    options: {
      filter: true,
      sort: true
    }
  },
  {
    label: 'LENGTH',
    name: 'length',
    options: {
      filter: true,
      sort: true
    }
  },
  {
    label: 'WIDTH',
    name: 'width',
    options: {
      filter: true,
      sort: true
    }
  },
  {
    label: 'HEIGHT',
    name: 'height',
    options: {
      filter: true,
      sort: true
    }
  },
  {
    label: 'WEIGHT',
    name: 'weight',
    options: {
      filter: true,
      sort: true
    }
  },
  {
    label: 'CREATED',
    name: 'created',
    options: {
      filter: true,
      sort: true
    }
  }
];

class DataTable extends Component {
  render() {
    const hitMe = e => {
      //   startEditMode(e);
    };

    const options = {
      filterType: 'dropdown',
      responsive: 'scroll',
      onRowClick: hitMe,
      selectableRows: 'none',
      rowsPerPage: 20,
      rowsPerPageOptions: [20, 45, 100]
    };
    return (
      <MUIDataTableEl
        title={'The Last 100 Product Updated'}
        data={this.props.data}
        columns={columns}
        options={options}
      />
    );
  }
}
const mapStateToProps = state => ({
  data: state.cubiDataReducer.tableData
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DataTable);

const PaperEl = styled(Paper)`
  grid-area: DataTable;
  padding: 8px 18px;
`;

const MUIDataTableEl = styled(MUIDataTable)`
  grid-area: DataTable;
  padding: 8px 18px;
  width: 100%;
`;
