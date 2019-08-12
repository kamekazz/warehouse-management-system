import React from 'react';

const PostBox = ({post}) => {
  const {image, title, description} = post;
  return (
    <div className="col-xl-6 col-lg-12 col-sm-6 col-12 mb-4">
      <div className="row">
        <div className="col-xl-6 col-md-4 col-6">
          <img className="img-fluid" src={image} alt={title}/>
        </div>
        <div className="col-xl-6 col-md-8 col-6">
          <h5> {title}</h5>
          <p className="mb-0"> {description}</p>
        </div>
      </div>
    </div>
  )
};

export default PostBox;

