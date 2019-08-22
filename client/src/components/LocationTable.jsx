import React from 'react';
import MUIDataTable from 'mui-datatables';

function LocationTable({ data, getEditFormCreat }) {
  console.log('data', data);
  const columns = [
    {
      label: 'Location',
      name: 'fullName',
      options: {
        filter: true,
        sort: true
      }
    },
    {
      label: 'Size',
      name: 'maxSize',
      options: {
        filter: true,
        sort: true
      }
    },
    {
      label: 'Status',
      name: 'status',
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
    getEditFormCreat(e[0], e[1]);
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
    <MUIDataTable
      title={'The Last 100 Location  Create'}
      data={data}
      columns={columns}
      options={options}
    />
  );
}

export default LocationTable;
