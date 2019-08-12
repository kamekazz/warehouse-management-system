import React from 'react';
import {CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis,} from 'recharts';
import {data} from '../../Components/data'

const LineChartRevenue = () => (
  <ResponsiveContainer width="100%" height={350}>
    <LineChart data={data} margin={{top: 0, right: 26, left: -20, bottom: 0}}>

      <CartesianGrid strokeDasharray="3 3"/>
      <XAxis stroke="#ffffff" dataKey="name"/>
      <YAxis stroke="#ffffff"/>
      <Line type="monotone" dataKey="pv" stroke="#e6b21a" activeDot={{r: 8}}/>
      <Line type="monotone" dataKey="uv" stroke="#ffffff"/>
    </LineChart>
  </ResponsiveContainer>
);

export default LineChartRevenue;