import React from "react";
import {Badge} from 'reactstrap';

function EventItem({data}) {
  const {image, title, address, date} = data;

  return (
    <div className="media jr-featured-item">

      <div className="jr-featured-thumb">
        <img className="rounded-lg img-fluid" src={image} alt="..."/>
      </div>
      <div className="media-body jr-featured-content">
        <div className="jr-featured-content-left">
          <Badge className="jr-rounded-xs text-uppercase" color="info">Music concert</Badge>
          <h3 className="mb-2">{title}</h3>
          <div className="row-flex">
            <div className="media text-grey mb-1">
              <i className={`zmdi zmdi-pin jr-fs-lg mr-2 d-inline-flex align-middle`}/>
              <span className="media-body ml-1">{address}</span>
            </div>
          </div>
        </div>
        <div className="jr-featured-content-right jr-profile-content-right">
          <h2 className="text-primary mb-1">
            <i className={`zmdi zmdi-calendar jr-fs-lg mr-2 d-inline-flex align-middle`}/> <span
            className="d-inline-flex align-middle">{date}</span>
          </h2>
          <p className="text-primary text-truncate mt-sm-auto mb-0 pointer">Check in detail <i
            className={`zmdi zmdi-long-arrow-right jr-fs-xxl ml-1 ml-sm-2 d-inline-flex align-middle`}/>
          </p>
        </div>

      </div>
    </div>
  );
}

export default EventItem;
