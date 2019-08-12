import React from 'react';

const PopularArticles = ({article}) => {
  const {image, title, description} = article;
  return (
    <div className="col-sm-6 col-12 mb-1">
      <div className="row">
        <div className="col-md-5 col-6 mb-2 pr-0">
          <div className="grid-thumb-equal grid-art-thumb-equal rounded-sm">
            <div className="grid-thumb-cover">
              <img className="img-fluid" src={image} alt={title}/>
            </div>
          </div>
        </div>
        <div className="col-md-7 col-6">
          <span className="badge bg-grey text-white">Health</span>
          <h5 className="mb-1"> {title}</h5>
          <p className="meta-date mb-0"> {description}</p>
        </div>
      </div>
    </div>
  )
};

export default PopularArticles;

