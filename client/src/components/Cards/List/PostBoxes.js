import React from 'react';

const PostBox = ({post}) => {
  const {image, title, date, description} = post;
  return (

    <li>
      <div className="post-images">
        <img className="img-fluid" src={image} alt={title}/>
      </div>
      <div className="post-content ">
        <h4 className="title"><a className="jr-link">{title}</a></h4>
        <small className="text-muted">{date}</small>
        <p className="text-truncate">{description}</p>
      </div>
    </li>

  )
};

export default PostBox;

