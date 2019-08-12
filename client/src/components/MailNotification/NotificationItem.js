import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

const NotificationItem = ({notification}) => {
  const {image, badge, name, time, message} = notification;
  return (
    <li className="media">
      <div className="user-avatar">
        <Avatar
          alt={name}
          src={image}
        />
        <span className="badge badge-danger rounded-circle">{badge}</span>
      </div>
      <div className="media-body">
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="text-capitalize user-name mb-0"><span className="jr-link">{name}</span></h5>
          <span className="meta-date"><small>{time}</small></span>
        </div>
        <p className="sub-heading">{message}</p>
        <Button className="jr-btn jr-btn-xs text-muted"><i className="zmdi zmdi-mail-reply"/><span>Reply</span></Button>
        <Button className="jr-btn jr-btn-xs text-muted"><i className="zmdi zmdi-eye"/><span>Read</span></Button>
      </div>
    </li>
  );
};

export default NotificationItem;
