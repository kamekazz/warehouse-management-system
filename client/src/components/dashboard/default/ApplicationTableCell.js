import React from 'react';
import Avatar from '@material-ui/core/Avatar';


const ApplicationTableCell = ({data}) => {
  const {id, name, description, image, time, price} = data;
  return (
    <tr
      tabIndex={-1}
      key={id}
    >
      <td>
        <div className="user-profile d-flex flex-row align-items-center">
          <Avatar
            alt={name}
            src={image}
            className="ml-3 user-avatar"
          />
          <div className="user-detail">
            <h5 className="user-name">{name} </h5>
            <p className="user-description">{description} </p>
          </div>
        </div>
      </td>

      <td>{time}</td>
      <td>{price}</td>
    </tr>

  );
};

export default ApplicationTableCell;
