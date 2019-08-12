import React from 'react';
import Avatar from '@material-ui/core/Avatar';

const FriendsTableCell = ({data}) => {
  const {id, name, designation, image, status} = data;
  const style = status.includes("Followed") ? "btn-primary" : "btn-outline-secondary";
  return (
    <tr
      style={{background: 'white'}}
      tabIndex={-1}
      key={id}>
      <td>
        <div className="user-profile d-flex flex-row align-items-center">
          <Avatar
            alt={name}
            src={image}
            className="user-avatar"
          />
          <div className="user-detail">
            <h5 className="user-name">{name} </h5>
            <p className="user-description">{designation} </p>
          </div>
        </div>
      </td>
      <td className="text-right">
        <div className={`btn btn-sm text-uppercase btn-rounded ${style}`}>{status}</div>
      </td>
    </tr>

  );
};

export default FriendsTableCell;
