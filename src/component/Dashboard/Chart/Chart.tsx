import React, { useState } from "react";
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
import Chart1 from "./Chart1";
import Chart2 from "./Chart2";

const data = [
  {
    name: 1,
    uv: 4000,
  },
  {
    name: 13,
    uv: 3000,
  },
  {
    name: 19,
    uv: 4221,
  },
  {
    name: 31,
    uv: 2780,
  },
];

const Chart = () => {
  const [chart, setChart] = useState("Ngày");
  return (
    <div className="chartSesc">
      <div className="titleChart">
        <h3 style={{ margin: 0, color: "#282739" }}>Bảng thống kê theo ngày</h3>
        <OptionChart setChart={setChart} />
      </div>
      {chart === "Ngày" && (
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
              <stop offset="0%" stopColor="#CEDDFF" stopOpacity={1} />
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
            x={19}
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
      )}
      {chart === "Tuần" && <Chart1 />}
      {chart === "Tháng" && <Chart2 />}
    </div>
  );
};

export default Chart;
