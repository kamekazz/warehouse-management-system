import React from 'react';

const PopularProduct = ({product, styleName}) => {
  const {image, title, description, offerPrice, mrp} = product;
  if (!styleName) {
    styleName = "col-sm-6 col-12 mb-3";
  }
  return (
    <div className={`${styleName}`}>
      <div className="row no-gutters">
        <div className="col-sm-5 col-12">
          <img className="img-fluid rounded" src={image} alt={title}/>
        </div>
        <div className="col-sm-7 col-12 pl-sm-3 pt-3 pt-sm-0">
          <h5 className="mb-1"> {title}</h5>
          <p className="text-light mb-1"> {description}</p>
          <div className="d-flex align-items-end">
            <h5 className="text-muted mr-2">
              <del><i className="zmdi zmdi-money"/>{mrp}</del>
            </h5>
            <h4><i className="zmdi zmdi-money"/>{offerPrice} </h4>
          </div>
        </div>
      </div>
    </div>
  )
};

export default PopularProduct;

