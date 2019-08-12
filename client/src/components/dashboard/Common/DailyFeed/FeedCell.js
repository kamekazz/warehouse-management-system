import React from 'react';
import Avatar from '@material-ui/core/Avatar';

const FeedCell = ({feed}) => {
  const {id, desc, time, updateTime, image, isSocial} = feed;
  return (

    <div key={id} className="media user-profile user-profile-border">
      <Avatar
        alt="..."
        src={image}
        className="user-avatar"
      />
      <div className="media-body align-self-center">
        <h5 className="mb-0 jr-fs-13">{desc}</h5>
        <span className="meta-date-light jr-fs-sm">{time} </span>
        {isSocial &&
        <div className="my-2 btn-group-mins">
          <span className="btn jr-btn-xs btn-primary jr-link"><i
            className="zmdi zmdi-thumb-up mr-1"/>&nbsp;Like</span>
          <span className="btn jr-btn-xs btn-info jr-link"><i
            className="zmdi zmdi-share mr-1"/>&nbsp;Share</span>
        </div>
        }
      </div>
      <span className="ml-1 text-blue-grey text-lighten-2 jr-fs-sm">{updateTime}</span>
    </div>

  );
};

export default FeedCell;
