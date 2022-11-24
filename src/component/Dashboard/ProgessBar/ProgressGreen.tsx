import React from "react";
import "antd/dist/antd.css";
import "./ProgressBar.css";
import capso from "../../../assets/CapsoIcon.png";
import { Progress } from "antd";
import dotGreen from "../../../assets/dotGreen.png";
import dotSilver from "../../../assets/dotSilver.png";
import dotPink from "../../../assets/dotPink.png";

const ProgressGreen = () => {
  return (
    <div className="progressBar">
      <Progress
        type="circle"
        percent={86}
        strokeWidth={6}
        width={60}
        strokeColor="#35C75A"
        className="circle1"
      />
      <Progress
        type="circle"
        percent={12}
        strokeWidth={5}
        width={48}
        strokeColor="#7E7D88"
        className="circle1Inside"
        showInfo={false}
      />
      <Progress
        type="circle"
        percent={2}
        strokeWidth={5}
        width={40}
        strokeColor="#F178B6"
        className="circle2Inside"
        showInfo={false}
      />
      <div className="progressTitle">
        <h2 style={{ margin: 0, fontSize: 20 }}>4.221</h2>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={capso} />
          <p style={{ margin: 0, marginLeft: 5, color: "#35C75A" }}>Cấp số</p>
        </div>
      </div>
      <div>
        <h6
          style={{
            display: "flex",
            alignItems: "center",
            margin: 0,
            width: 88.54,
            marginBottom: 0,
          }}
        >
          <img src={dotGreen} style={{ marginRight: 2 }} />
          Đang chờ{" "}
          <h4
            style={{
              margin: 0,
              marginLeft: 2,
              marginRight: 2,
              color: "#35C75A",
            }}
          >
            3.721
          </h4>
        </h6>
        <h6 style={{ display: "flex", alignItems: "center", margin: 0 }}>
          <img src={dotSilver} style={{ marginRight: 2 }} />
          Đã sử dụng{" "}
          <h4
            style={{
              margin: 0,
              marginLeft: 2,
              marginRight: 2,
              color: "#35C75A",
            }}
          >
            486
          </h4>
        </h6>
        <h6 style={{ display: "flex", alignItems: "center", margin: 0 }}>
          <img src={dotPink} style={{ marginRight: 2 }} />
          Bỏ qua{" "}
          <h4
            style={{
              margin: 0,
              marginLeft: 2,
              marginRight: 2,
              color: "#35C75A",
            }}
          >
            32
          </h4>
        </h6>
      </div>
    </div>
  );
};

export default ProgressGreen;
