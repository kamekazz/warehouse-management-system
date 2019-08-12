import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

const YourDailyFeedCell = ({feed}) => {
  const {id, title, time, image, isSocial} = feed;
  return (
    <div key={id} className="media user-profile user-profile-border">
      <Avatar
        alt={image}
        src={image}
        className="user-avatar"
      />
      <div className="media-body align-self-center">
        <h5 className="mb-1">{title} </h5>
        <span className="meta-date">{time} </span>
        {isSocial &&
        <div className="my-2 btn-group-mins">
          <span className="jr-link btn jr-btn-xs btn-primary"><i
            className="zmdi zmdi-thumb-up mr-1"/> Share</span>
          <span className="jr-link btn jr-btn-xs btn-info"><i
            className="zmdi zmdi-share mr-1"/> Like</span>
        </div>
        }
      </div>
      <IconButton className="icon-btn p-1"><i className="zmdi zmdi-chevron-right"/></IconButton>
    </div>
  );
};

export default YourDailyFeedCell;
