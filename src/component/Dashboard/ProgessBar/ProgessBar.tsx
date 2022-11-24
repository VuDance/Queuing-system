import React from "react";
import "antd/dist/antd.css";
import "./ProgressBar.css";
import { Progress } from "antd";
import dotOrange from "../../../assets/dotOrange.png";
import dotBlue from "../../../assets/dotBlue.png";
import dotSilver from "../../../assets/dotSilver.png";

const ProgessBar = ({
  data,
  icon,
  title,
  organge,
  blue,
  green,
  active,
  notActive,
  percent,
}: any) => {
  return (
    <div className="progressBar">
      <Progress
        type="circle"
        percent={percent}
        strokeWidth={6}
        width={60}
        strokeColor={`${organge ? "#FF7506" : "#4277ff"}`}
        className="circle1"
      />
      <Progress
        type="circle"
        percent={100 - percent}
        strokeWidth={5}
        width={48}
        strokeColor="#7E7D88"
        className="circle1Inside"
        showInfo={false}
      />
      <div className="progressTitle">
        <h2 style={{ margin: 0, fontSize: 20 }}>{data}</h2>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={icon} />
          <p
            style={{ margin: 0, marginLeft: 5 }}
            className={`${organge ? "orange" : "blue"}`}
          >
            {title}
          </p>
        </div>
      </div>
      <div>
        <h6
          style={{
            display: "flex",
            alignItems: "center",
            margin: 0,
            marginBottom: 10,
          }}
        >
          <img
            src={`${organge ? dotOrange : dotBlue}`}
            style={{ marginRight: 2 }}
          />
          Đang hoạt động{" "}
          <h4
            className={`${organge ? "orange" : "blue"}`}
            style={{ margin: 0, marginLeft: 2, marginRight: 2 }}
          >
            {active}
          </h4>
        </h6>
        <h6 style={{ display: "flex", alignItems: "center", margin: 0 }}>
          <img src={dotSilver} style={{ marginRight: 2 }} /> Ngưng hoạt động{" "}
          <h4
            className={`${organge ? "orange" : "blue"}`}
            style={{ margin: 0, marginLeft: 2, marginRight: 2 }}
          >
            {notActive}
          </h4>
        </h6>
      </div>
    </div>
  );
};

export default ProgessBar;
