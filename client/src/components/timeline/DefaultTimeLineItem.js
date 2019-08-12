import React from 'react';

const DefaultTimeLineItem = ({styleName, timeLine}) => {
  const {time, image, title, description} = timeLine;
  return (
    <div className={`timeline-item ${styleName}`}>
      <div className="timeline-badge timeline-img">
        <img src={require("assets/images/pentagon.png")} alt="Pentagon" title="Pentagon"/>
      </div>

      <div className="timeline-panel ">
        <div className="timeline-panel-header">
          <div className="timeline-header-img timeline-left">
            <img className="size-60 rounded-circle" src={image} alt="Pentagon" title="Pentagon"/>
          </div>
          <div className="timeline-heading">
            <h5>{time}</h5>
            <h3 className="timeline-title">{title}</h3>
          </div>
        </div>
        <div className="timeline-body">
          <p>{description} </p>
        </div>
      </div>
    </div>
  )
};
export default DefaultTimeLineItem;