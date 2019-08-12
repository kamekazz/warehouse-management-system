import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

const CustomerCell = ({data}) => {
  const {id, name, userId, image, order} = data;
  const style = order > 0 ? "bg-blue" : "bg-amber";
  return (
    <tr
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
            <p className="user-description">{userId} </p>
          </div>
        </div>
      </td>
      <td className="text-right">
        <div className={`btn btn-sm text-uppercase btn-rounded ${style}`}>{order} Order</div>
      </td>
      <td className="text-right">
        <IconButton><i className="zmdi zmdi-more-vert"/></IconButton>
      </td>
    </tr>

  );
};

export default CustomerCell;
