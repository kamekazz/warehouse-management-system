import React from 'react';
import MUIDataTable from 'mui-datatables';
import styled from 'styled-components';

function CreateProductTable({ data, startEditMode }) {
  const columns = [
    {
      label: 'Name',
      name: 'name',
      options: {
        filter: true,
        sort: true
      }
    },
    {
      label: 'SKU',
      name: 'skuNumber',
      options: {
        filter: true,
        sort: true
      }
    },
    {
      label: 'Department',
      name: 'department',
      options: {
        filter: true,
        sort: true
      }
    },
    {
      label: 'Ounce',
      name: 'ounce',
      options: {
        filter: true,
        sort: true
      }
    },
    {
      label: 'Size',
      name: 'size',
      options: {
        filter: true,
        sort: true
      }
    },
    {
      label: 'Created',
      name: 'date',
      options: {
        filter: true,
        sort: true
      }
    }
  ];

  const hitMe = e => {
    startEditMode(e);
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
      title={'The Last 100 Product  Create'}
      data={data}
      columns={columns}
      options={options}
    />
  );
}

export default CreateProductTable;

const MUIDataTableEl = styled(MUIDataTable)`
  grid-area: CreateProductTable;
`;
