import React from 'react';


const ProductImage = () => {
  return (
    <div className="jr-card pb-2">
      <div className="jr-card-thumb">
        <img className="card-img-top img-fluid" alt="products" src='https://via.placeholder.com/400x400'/>
      </div>

      <div className="jr-card-social">
        <ul className="social-link">
          <li className="active">
            <span className="jr-link"><i className="zmdi zmdi-favorite"/></span>
          </li>
          <li>
            <span className="jr-link"><i className="zmdi zmdi-bookmark"/></span>
          </li>
          <li>
            <span className="jr-link"><i className="zmdi zmdi-share"/></span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductImage;