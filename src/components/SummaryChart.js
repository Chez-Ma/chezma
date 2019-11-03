import React, {Component} from 'react';
import BarChart from "recharts/es6/chart/BarChart";
import Bar from "recharts/es6/cartesian/Bar";
import XAxis from "recharts/es6/cartesian/XAxis";
import YAxis from "recharts/es6/cartesian/YAxis";
import Tooltip from "recharts/es6/component/Tooltip";
import ResponsiveContainer from "recharts/es6/component/ResponsiveContainer";


export default class SummaryChart extends Component {
  render() {
    const data = [
      {
        name: 'This', val: 70
      },
      {
        name: 'Daily', val: 395
      }
    ];

    return (
      <div style={{width: "100%", height: "100px"}}>
        <ResponsiveContainer>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5, right: 30, left: 20, bottom: 5,
            }}
            layout="vertical">
            <XAxis type="number" dataKey="val"/>
            <YAxis type="category" dataKey="name"/>
            <Tooltip />
            <Bar dataKey="val" fill="#ffc658"/>
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
