import React from 'react';
import WeeklyCell from './WeeklyCell';


const WeeklyList = ({data}) => {
  return (
    <div className="table-responsive-material">
      <table className="project-list-table table remove-table-border mb-0">
        <thead>
        <tr>
          <th scope="col">Project</th>
          <th scope="col">Sales</th>
          <th colSpan="2" scope="col">Income</th>
        </tr>
        </thead>
        <tbody>
        {data.map(data => {
          return (
            <WeeklyCell key={data.id} data={data}/>
          );
        })}
        </tbody>
      </table>
    </div>
  );

};

export default WeeklyList;