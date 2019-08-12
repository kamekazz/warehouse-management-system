import React from 'react';

const HorizontalItemCard = ({styleName, title, price, detail, children, styleTitle, chartPosition}) => {
  if (!styleName)
    styleName = "";
  if (!styleTitle)
    styleTitle = "";
  if (!chartPosition)
    chartPosition = "";
  return (
    <div className={`jr-card jr-hr-chart-card p-0 ${styleName}`}>
      <div className="row no-gutters">
        <div className="col-6 pr-2">
          <div className="jr-hr-chart-content">
            <h3 className={`chart-title ${styleTitle}`}>{title}</h3>
            <span className="d-block chart-f30 font-weight-light mb-1">{price}</span>
            <span className="d-block jr-fs-13">{detail}</span>
          </div>
        </div>
        <div className={`col-6 ${chartPosition}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default HorizontalItemCard;