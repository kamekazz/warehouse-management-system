import React from "react";

function EventItem({data}) {
  const {image, title, date, address} = data;
  return (
    <div className="mb-4">
      <div className="mr-3" style={{height: 150, width: 200}}>
        <img className="img-fluid" src={image} alt="..."/>
      </div>
      <h4 className="mt-0">{title}</h4>
      <div className="flex-row m-0">
        <i className="zmdi zmdi-calendar mr-2"/>
        <p>{date}</p>
      </div>
      <div className="flex-row m-0">
        <i className="zmdi zmdi-map-geo-location mr-2"/>
        <p>{address}</p>
      </div>
    </div>
  );
}

export default EventItem;
