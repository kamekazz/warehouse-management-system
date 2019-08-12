import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

const UserDetailCell = ({data}) => {
  const {id, name, detail, image, about, color} = data;
  return (
    <tr
      tabIndex={-1}
      key={id}>
      <td className="border-bottom border-top-0">
        <div className="user-profile d-flex flex-row align-items-center">
          <Avatar
            alt={name}
            src={image}
            className="user-avatar mr-2"
          />
          <div className="user-detail">
            <h5 className="user-name text-capitalize">{name}</h5>
            <p className="user-description">{about}</p>
          </div>
        </div>
      </td>
      <td className="text-right border-bottom border-top-0">
        <span className={`jr-link badge text-white text-uppercase bg-${color}`}>{detail}</span>
      </td>
      {console.log(`text-uppercase bg-${color}`)}
      <td className="text-right border-bottom border-top-0">
        <IconButton className="icon-btn text-light p-1"><i className="zmdi zmdi-more-vert"/></IconButton>
      </td>
    </tr>

  );
};

export default UserDetailCell;
