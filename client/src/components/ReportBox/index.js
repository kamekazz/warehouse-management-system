import React from 'react';

const ReportBox = ({styleName, icon, price, detail, children}) => {
  if (!styleName)
    styleName = "";
  return (
    <div className={`jr-card jr-hr-chart-card p-0 ${styleName}`}>
      <div className="row no-gutters align-items-center">
        <div className="col-6 pr-2">
          <div className="jr-hr-chart-content">
            <span className="d-block mb-3">
              <i className={`zmdi zmdi-${icon} zmdi-hc-fw zmdi-hc-lg`}/>
            </span>
            <span className="d-block jr-fs-xxl font-weight-medium mb-1">{price}</span>
            <span className="d-block jr-fs-13">{detail}</span>
          </div>
        </div>
        <div className="col-6">
          <div className="jr-hr-chart">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportBox;