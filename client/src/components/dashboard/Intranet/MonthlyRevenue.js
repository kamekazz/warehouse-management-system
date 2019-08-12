import React from 'react';
import {Area, AreaChart, ResponsiveContainer, Tooltip} from 'recharts';

const MonthlyRevenue = ({chartData}) => (
  <ResponsiveContainer width="100%" height={192}>
    <AreaChart data={chartData} margin={{top: 10, right: 0, left: 0, bottom: 0}}>

      <Tooltip/>
      <defs>
        <linearGradient id="expanse" x1="0" y1="0" x2="1" y2="0">
          <stop offset="5%" stopColor="#FF9800" stopOpacity={1}/>
          <stop offset="95%" stopColor="#FF9800" stopOpacity={1}/>
        </linearGradient>
        <linearGradient id="income" x1="0" y1="0" x2="1" y2="0">
          <stop offset="5%" stopColor="#3BB4A3" stopOpacity={1}/>
          <stop offset="95%" stopColor="#3BB4A3" stopOpacity={1}/>
        </linearGradient>
      </defs>
      <Area type="monotone" dataKey="Expanse" strokeWidth={3} stroke="#3BB4A3" fillOpacity={0.2} fill="url(#income)"/>
      <Area type="monotone" dataKey="Income" strokeWidth={3} stroke="#FF9800" fillOpacity={0.2} fill="url(#expanse)"/>
    </AreaChart>
  </ResponsiveContainer>
);

export default MonthlyRevenue;