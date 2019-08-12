import React from 'react';
import {countryList1} from "../../../app/routes/dashboard/routes/data";
import CountryListItem from "./CountryListItem";


const SiteVisitor = ({children}) => {
  return (
    <div>
      <h4 className="mb-2 text-muted">Countries</h4>
      <div className="row">
        <div className="col-lg-4 col-sm-6 col-12 mb-5 mb-sm-1">
          {countryList1.map((country, index) => <CountryListItem key={index} country={country}/>)}
        </div>
        <div className="col-lg-8 col-sm-6 col-12">
          <div className="embed-responsive embed-responsive-31by9">
            <div className="embed-responsive-item">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default SiteVisitor;