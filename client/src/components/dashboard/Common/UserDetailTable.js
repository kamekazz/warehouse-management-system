import React from 'react';
import UserDetailCell from './UserDetailCell';

const UserDetailTable = ({data, tableStyle}) => {

  return (
    <div className="table-responsive-material table-userdetail-mmin">
      <table className={`default-table table-sm table full-table mb-0 ${tableStyle}`}>
        <tbody>
        {data.map(data => {
          return (
            <UserDetailCell key={data.id} data={data}/>
          );
        })}
        </tbody>
      </table>
    </div>
  );
};

export default UserDetailTable;