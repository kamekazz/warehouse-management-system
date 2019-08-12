import React from 'react';
import Avatar from '@material-ui/core/Avatar';


const RecentActivities = ({recentData}) => {
  const {image, title, description, date, color} = recentData;
  return (
    <div className="media social-list-line">
      <Avatar className={`${color} z-index-20 size-40 align-item-self mr-3`}>
        <i className={`zmdi zmdi-${image} text-white`}/>
      </Avatar>
      <div className="media-body">
        <h5 className="mb-1">{title}</h5>
        <p className="mb-0">{description}</p>
        <span className="meta-date meta-date-light">{date}</span>
      </div>
    </div>
  );
};

export default RecentActivities;