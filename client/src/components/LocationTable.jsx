import React from 'react';
import MUIDataTable from 'mui-datatables';

function LocationTable({ data }) {
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
    console.log(e[0], e[1], e[3]);
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
