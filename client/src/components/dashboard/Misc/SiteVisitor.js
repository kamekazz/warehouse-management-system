import React from 'react';
import {countryList1} from "../../../app/routes/dashboard/routes/data";

import {VectorMap} from "react-jvectormap";
import CountryListItem from "components/dashboard/Common/CountryListItem";

const SiteVisitor = () => {
  return (
    <div className="row">
      <div className="col-md-6 col-12">
        <div className="mb-3">Lorem ipsum is dummy content Cenas in erat accumsan, hendrerit
          lorem vel, pulvinar odio. Quisque
          eu conva. hendrerit lorem vel, pulvinar odio. Quisque eu conva.
        </div>
        <h4 className="mb-2 text-muted">Countries</h4>
        <div className="row">
          <div className="col-lg-6 col-sm-6 col-12 mb-5 mb-md-1">
            {countryList1.map((country, index) => <CountryListItem key={index} country={country}/>)}
          </div>
          <div className="col-lg-6 col-sm-6 col-12 mb-5 mb-md-1">
            {countryList1.map((country, index) => <CountryListItem key={index} country={country}/>)}
          </div>
        </div>
      </div>


      <div className="col-md-6 col-12">
        <div style={{width: '100%', height: 190}}>
          <VectorMap map={'world_mill'}
                     backgroundColor="#FFF"
                     containerStyle={{
                       width: '100%',
                       height: '100%'
                     }}
                     regionStyle={{
                       initial: {
                         fill: "#DEE4E8"
                       }
                     }}
                     markerStyle={{
                       initial: {
                         fill: "#3258EF",
                         stroke: 'rgba(50, 88, 239, 0.2)',
                       }
                     }}
                     zoomButtons={false}
                     zoomOnScroll={false}
                     containerClassName="map"
                     markers={[{latLng: [28.02, 73.31], name: 'INDIA(45)'}]}
          />
        </div>
      </div>
    </div>
  )
};

export default SiteVisitor;