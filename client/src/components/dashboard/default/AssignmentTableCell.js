import React from 'react';
import Avatar from '@material-ui/core/Avatar';


const AssignmentTableCell = ({data}) => {
  const {id, name, description, image, task, status} = data;
  const color = status.includes("In Progress") ? "success" : status.includes("Cancelled") ? "danger" : "warning";
  return (
    <tr
      style={{background: 'white'}}
      tabIndex={-1}
      key={id}
    >
      <td className="pl-4">
        <div className="user-detail">
          <h5 className="user-name">{name} </h5>
          <p className="user-description">{description} </p>
        </div>
      </td>

      <td>
        <Avatar
          alt={name}
          src={image}
          className="user-avatar"
        />
      </td>
      <td className="text-center"><i className={`zmdi zmdi-trending-up zmdi-hc-lg text-${color}`}/></td>
      <td className="text-center">{task}</td>
      <td className="status-cell text-right">
        <div className={`text-white badge bg-${color}`}>{status}</div>
      </td>
    </tr>

  );
};

export default AssignmentTableCell;
