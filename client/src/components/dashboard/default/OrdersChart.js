import React from 'react';
import {Cell, Legend, Pie, PieChart, ResponsiveContainer} from 'recharts';


const data01 = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
  {name: 'Group C', value: 300}, {name: 'Group D', value: 200}];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const OrdersChart = () => (
  <ResponsiveContainer width="100%" height={350}>
    <PieChart>
      <Legend/>
      <Pie dataKey="value"
           data={data01} cx={200} cy={200} innerRadius={70} outerRadius={90} fill="#3367d6" label>
        {
          data01.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>)
        }
      </Pie>
    </PieChart>
  </ResponsiveContainer>
);

export default OrdersChart;