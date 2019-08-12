import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import SiteTrafficChart from "components/dashboard/Common/SiteTrafficChart";

const SiteTraffic = () => {
  return (
    <div className="jr-card">
      <div className="jr-card-header d-flex align-items-center">
        <h3 className="mb-0">
          Site Traffic
        </h3>

        <div className="ml-auto">
          <span className="badge bg-green text-white">Live Update</span>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-3">
          <IconButton className="size-40 border-2 border-green mr-3 p-1">
            <i className="zmdi zmdi-plus text-green"/>
          </IconButton>
          <span>New Visitor</span>
        </div>
        <div className="col-3">
          <IconButton className="size-40 border-2 border-red mr-3 p-1">
            <i className="zmdi zmdi-repeat-one text-red"/>
          </IconButton>
          <span>Repeated User</span>

        </div>
        <div className="col-3">
          <IconButton className="size-40 border-2 border-primary mr-3 p-1">
            <i className="zmdi zmdi-star text-primary"/>
          </IconButton>
          <span>Subscriber</span>

        </div>
        <div className="col-3">
          <IconButton className="size-40 border-2 border-red mr-3 p-1">
            <i className="zmdi zmdi-share text-red"/>
          </IconButton>
          <span>Share</span>
        </div>
      </div>

      <SiteTrafficChart height={100}/>

    </div>
  );
};

export default SiteTraffic;
