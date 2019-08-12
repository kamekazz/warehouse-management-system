import React from 'react';
import Avatar from '@material-ui/core/Avatar';

const UserCell = ({user}) => {
  const {id, title, image, desc} = user;
  return (

    <div key={id} className="user-profile d-flex flex-row align-items-center">
      <Avatar
        alt={title}
        src={image}
        className="user-avatar-lg"
      />
      <div className="user-detail">
        <span className="jr-fs-11 text-light text-uppercase">{title}</span>
        <p className="mb-0">{desc}</p>
      </div>
    </div>

  );
};

export default UserCell;
