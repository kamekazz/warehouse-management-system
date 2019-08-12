import React from 'react';

const LatestPosts = ({recentData}) => {
  const {image, title, description, date} = recentData;
  return (

    <li className="media media-list post-list">
      <div className="size-90 post-image mr-3">
        <img className="img-fluid rounded" src={image} alt="PostsPic"/>
      </div>
      <div className="media-body">
        <h4 className="mt-0 mb-1">{title}</h4>
        <p className="meta-date mb-1">{date}</p>
        <p className="text-muted">{description}</p>
      </div>
    </li>

  );
};

export default LatestPosts;