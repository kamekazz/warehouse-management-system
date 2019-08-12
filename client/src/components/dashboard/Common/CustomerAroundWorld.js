import React from 'react';
import {Area, AreaChart, ResponsiveContainer} from 'recharts';
import {chartData, countryList1, countryList2} from "../../../app/routes/dashboard/routes/data";
import CountryListItem from "./CountryListItem";

const CustomerAroundWorld = () => {
  return (
    <div className="jr-card">
      <div className="jr-card-header">
        <h3 className="mb-0">
          Customer Around The World
        </h3>
        <p className="text-muted">
          In publishing and graphic design, lorem ipsum is a filler text or greeking commonly used to
          demonstrate the text
        </p>
      </div>

      <h4 className="text-muted">Countries</h4>
      <div className="row">
        <div className="col-lg-8 col-12">
          <div className="row">
            <div className="col-sm-6 col-12">
              {countryList1.map((country, index) => <CountryListItem key={index} country={country}/>)}
            </div>
            <div className="col-sm-6 col-12 mb-5 mb-md-1">
              {countryList2.map((country, index) => <CountryListItem key={index} country={country}/>)}
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-12">
          <ResponsiveContainer width="100%" height={150}>
            <AreaChart data={chartData}>
              <Area type="monotone" dataKey="pv" stroke="rgba(255,255,255,0.5)"
                    fillOpacity={.8}
                    fill="#3367d6"/>
              <Area type="monotone" dataKey="uv" stroke="rgba(255,255,255,0.5)"
                    fillOpacity={.8}
                    fill="#f3b439"/>
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
};

export default CustomerAroundWorld;

