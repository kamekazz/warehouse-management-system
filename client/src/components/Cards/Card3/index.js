import React from 'react';
import CardLayout from 'components/CardLayout';


const GalleryCard = () => {
  return (
    <CardLayout styleName="col-lg-6">
      <img className="card-img-top" src='https://via.placeholder.com/500x330'
           alt="Card image cap"/>

      <div className="card-body">
        <div className="row">
          <div className="col-sm-8">
            <h2 className="card-title">Tour to nature</h2>
            <p className="text-muted">Fusce eget dolor id justo lucttus commodo vel pharetra nisi.</p>
          </div>
          <div className="col-sm-4">
            <div className="text-muted text-sm-center">
              <i className="zmdi zmdi-favorite-outline zmdi-hc-fw zmdi-hc-lg mt-3 mb-1"/>
              <span className="mx-auto d-block">25 likes</span>
            </div>
          </div>
        </div>

        <span className="jr-link card-link"><i className="zmdi zmdi-image zmdi-hc-fw"/>Gallary</span>
        <span className="jr-link card-link"><i className="zmdi zmdi-railway zmdi-hc-fw"/>Route</span>
        <span className="jr-link card-link"><i className="zmdi zmdi-money zmdi-hc-fw"/>Avarage Cost</span>
      </div>
    </CardLayout>
  );
};

export default GalleryCard;