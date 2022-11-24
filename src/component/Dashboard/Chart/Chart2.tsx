import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
} from "recharts";
import OptionChart from "./OptionChart";
import "./Chart.css";

const data = [
  {
    name: 1,
    uv: 4000,
  },
  {
    name: 2,
    uv: 3000,
  },
  {
    name: 3,
    uv: 4221,
  },
  {
    name: 4,
    uv: 2780,
  },
  {
    name: 5,
    uv: 1900,
  },
  {
    name: 6,
    uv: 2000,
  },
  {
    name: 7,
    uv: 3200,
  },
  {
    name: 8,
    uv: 1890,
  },
  {
    name: 9,
    uv: 2012,
  },
  {
    name: 10,
    uv: 3001,
  },
  {
    name: 11,
    uv: 2988,
  },
  {
    name: 12,
    uv: 1999,
  },
];

const Chart2 = () => {
  return (
    <div>
      <AreaChart
        width={700}
        height={300}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#CEDDFF" stopOpacity={1} />
            <stop
              offset="95%"
              stopColor="rgba(206, 221, 255, 0)"
              stopOpacity={0}
            />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <ReferenceLine
          x="Tuần 3"
          label={{ position: "insideRight", value: "4221" }}
          type="monotone"
          alwaysShow={true}
        />
        <Area
          type="monotone"
          dataKey="uv"
          stroke="#8884d8"
          fill="url(#colorUv)"
          dot
        />
      </AreaChart>
    </div>
  );
};

export default Chart2;
