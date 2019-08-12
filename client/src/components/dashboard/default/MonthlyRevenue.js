import React from 'react';
import {Area, AreaChart, Legend, ResponsiveContainer, Tooltip} from 'recharts';

const MonthlyRevenue = ({chartData}) => (
  <ResponsiveContainer width="100%" height={192}>
    <AreaChart data={chartData} margin={{top: 0, right: 0, left: 0, bottom: 0}}>
      <Legend
        layout='vertical'
        verticalAlign="top"
        margin={{left: 10}}
        wrapperStyle={{
          top: 0,
          left: 24,
          lineHeight: '24px'
        }}
      />
      <Tooltip/>
      <defs>
        <linearGradient id="expanse" x1="0" y1="0" x2="1" y2="0">
          <stop offset="5%" stopColor="#3E54B7" stopOpacity={1}/>
          <stop offset="95%" stopColor="#569DF9" stopOpacity={1}/>
        </linearGradient>
        <linearGradient id="income" x1="0" y1="0" x2="1" y2="0">
          <stop offset="5%" stopColor="#FEE5EB" stopOpacity={1}/>
          <stop offset="95%" stopColor="#FEE5EB" stopOpacity={1}/>
        </linearGradient>
      </defs>

      <Area type="monotone" dataKey="Expanse" strokeWidth={0} stroke="#39CBDD" fillOpacity={1} fill="url(#income)"/>
      <Area type="monotone" dataKey="Income" strokeWidth={0} stroke="#3F50B4" fillOpacity={1} fill="url(#expanse)"/>
    </AreaChart>
  </ResponsiveContainer>
);

export default MonthlyRevenue;