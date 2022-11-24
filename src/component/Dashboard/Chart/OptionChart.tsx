import React, { useState } from "react";
import { CaretDownOutlined } from "@ant-design/icons";

const OptionChart = ({ setChart }: any) => {
  const [dropdown, setDropdown] = useState("Ngày");
  const set = (name: string) => {
    setDropdown(name);
    setChart(name);
  };
  return (
    <div className="dropdown" style={{ display: "flex", alignItems: "center" }}>
      <h4 style={{ margin: 0 }}>Xem theo</h4>
      <button className="dropbtn">
        {dropdown}{" "}
        <CaretDownOutlined style={{ color: "#FF7506", marginLeft: 10 }} />
      </button>
      <div className="dropdown-content">
        <p onClick={() => set("Ngày")}>Ngày</p>
        <p onClick={() => set("Tuần")}>Tuần</p>
        <p onClick={() => set("Tháng")}>Tháng</p>
      </div>
    </div>
  );
};

export default OptionChart;
