import React from 'react';


const InFoWithBgImage = ({data, styleName}) => {
  return (
    <div className="img-overlay-card shadow ripple-effect">
      <div className="center-crop-img">
        <img src='https://via.placeholder.com/1280x300' alt="card-bg"/>
      </div>

      <div className="jr-cart-ab layer">
        <div className="row text-center w-100">
          <div className="col-sm-6 text-truncate">
            <i className="zmdi zmdi-pin text-white mr-2"/>
            <span>11 Cities </span>
          </div>
          <div className="col-sm-6 text-truncate">
            <i className="zmdi zmdi-coffee text-white mr-2"/>
            <span>2987 Coffees </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InFoWithBgImage;
