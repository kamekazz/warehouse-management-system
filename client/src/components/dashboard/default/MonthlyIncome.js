import React from 'react';
import {Area, AreaChart, ResponsiveContainer} from 'recharts';

import {expanseData} from '../../Components/data'

const MonthlyIncome = () => (
  <ResponsiveContainer width="100%" height={110}>
    <AreaChart data={expanseData}>

      <Area type="monotone" dataKey="income" stroke="#3777FF" fillOpacity={1} fill="#3777FF"/>
      <Area type="monotone" dataKey="expanse" stroke="#245BD0" fillOpacity={1} fill="#245BD0"/>
    </AreaChart>
  </ResponsiveContainer>
);

export default MonthlyIncome;