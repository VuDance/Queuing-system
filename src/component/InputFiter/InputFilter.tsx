import React, { useState } from "react";
import "./InputFilter.css";
import { CaretDownOutlined } from "@ant-design/icons";

const InputFilter = ({ active, updatedTable, status }: any) => {
  const [inputContent, setInputContent] = useState("Tất cả");
  const update = (name: string) => {
    setInputContent(name);
    if (name === "Hoạt động") {
      updatedTable(true);
    } else if (name === "Tất cả") {
      updatedTable("Tất cả");
    } else updatedTable(false);
  };
  const update1 = (name: string) => {
    setInputContent(name);
    if (name === "Kết nối") {
      updatedTable(true);
    } else if (name === "Tất cả") {
      updatedTable("Tất cả");
    } else updatedTable(false);
  };
  return (
    <div style={{ marginRight: 24, marginBottom: 10 }}>
      <p style={{ fontWeight: 600, fontSize: 16, color: "#282739" }}>
        {active ? "Trạng thái hoạt động" : "Trạng thái kết nối"}
      </p>
      {active ? (
        <div className="dropdownFilter">
          <button className="inputFilter">
            {inputContent} <CaretDownOutlined className="iconFilter" />
          </button>
          <div className="contentFilter">
            <p onClick={() => update("Tất cả")}>Tất cả</p>
            <p onClick={() => update("Hoạt động")}>Hoạt động</p>
            <p onClick={() => update("Ngưng Hoạt động")}>Ngưng hoạt động</p>
          </div>
        </div>
      ) : (
        <div className="dropdownFilter">
          <button className="inputFilter">
            {inputContent} <CaretDownOutlined className="iconFilter" />
          </button>
          <div className="contentFilter">
            <p onClick={() => update1("Tất cả")}>Tất cả</p>
            <p onClick={() => update1("Kết nối")}>Kết nối</p>
            <p onClick={() => update1("Mất kết nối")}>Mất kết nối</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default InputFilter;
