import React from 'react';
import {Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';
import {salesStatisticData} from "../../../app/routes/dashboard/routes/Listing/data";
import SalesGauge from "components/dashboard/eCommerce/SalesGauge";

const SalesStatistic = () => {
  return (
    <div className="jr-card">
      <div className="jr-card-header d-flex align-items-center">
        <h3 className="mb-0">Sales Statistic</h3>
      </div>
      <div className="row mb-3">
        <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                    <span className="d-flex align-items-center mb-2">
                        <i className="zmdi zmdi-calendar-check text-muted chart-f20"/>
                        <span className="ml-3 text-dark">48548</span>
                    </span>
          <p className="text-muted">Orders Monthly</p>
        </div>
        <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                    <span className="d-flex align-items-center mb-2">
                        <i className="zmdi zmdi-calendar-note text-muted chart-f20"/>
                        <span className="ml-3 text-dark">6,875</span>
                    </span>
          <p className="text-muted">Orders Weekly</p>
        </div>
        <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                    <span className="d-flex align-items-center mb-2">
                        <i className="zmdi zmdi-money-box text-muted chart-f20"/>
                        <span className="ml-3 text-dark">$210,213</span>
                    </span>
          <p className="text-muted">Average Revenue</p>

        </div>
        <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                    <span className="d-flex align-items-center mb-2">
                        <i className="zmdi zmdi-money-box text-muted chart-f20"/>
                        <span className="ml-3 text-dark">$692,874</span>
                    </span>
          <p className="text-muted">Total Revenue</p>
        </div>
        <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                    <span className="d-flex align-items-center mb-2">
                        <i className="zmdi zmdi-calendar text-muted chart-f20"/>
                        <span className="ml-3 text-dark">9,223</span>
                    </span>
          <p className="text-muted">Total Orders</p>
        </div>
        <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                    <span className="d-flex align-items-center mb-2">
                        <i className="zmdi zmdi-calendar-alt text-muted chart-f20"/>
                        <span className="ml-3 text-dark">8,543</span>
                    </span>
          <p className="text-muted">Past Orders</p>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-7 col-12 mb-5 mb-lg-1">
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={salesStatisticData}
                       margin={{top: 10, right: 30, left: 0, bottom: 0}}>
              <XAxis dataKey="name"/>
              <YAxis type="number" domain={[0, 26000]}/>
              <CartesianGrid strokeDasharray="0" stroke="#DCDEDE"/>

              <Tooltip/>
              <defs>
                <linearGradient id="salesStatistic" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4258BC" stopOpacity={1}/>
                  <stop offset="95%" stopColor="#FFF" stopOpacity={0.8}/>
                </linearGradient>
              </defs>

              <Area type='monotone' dataKey='uv' strokeWidth={2} stroke='#6F82E5' fill="url(#salesStatistic)"/>
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="col-lg-5 col-12">
          <ResponsiveContainer width="100%">
            <SalesGauge/>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default SalesStatistic;
