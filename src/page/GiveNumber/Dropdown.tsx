import React, { useState } from "react";
import { CaretDownOutlined } from "@ant-design/icons";

const Dropdown = ({ status, updatedTable, setFilterStatus }: any) => {
  const [inputContent, setInputContent] = useState("Tất cả");
  const update = (name: string) => {
    setInputContent(name);
    if (name === "Khám sản phụ khoa") {
      updatedTable("Khám sản - Phụ khoa");
    } else if (name === "Tất cả") {
      updatedTable("Tất cả");
    } else if (name === "Khám răng hàm mặt") {
      updatedTable("Khám răng hàm mặt");
    } else if (name === "Khám tim mạch") {
      updatedTable("Khám tim mạch");
    } else if (name === "Khám tổng quát") {
      updatedTable("Khám tổng quát");
    } else updatedTable("Khám hô hấp");
  };
  const update1 = (name: string) => {
    setInputContent(name);
    if (name === "Đang chờ") {
      setFilterStatus("Đang chờ");
    } else if (name === "Tất cả") {
      setFilterStatus("Tất cả");
    } else if (name === "Đã sử dụng") {
      setFilterStatus("Đã sử dụng");
    } else setFilterStatus("Bỏ qua");
  };
  return (
    <div style={{ marginRight: 24, marginBottom: 10 }}>
      <p style={{ fontWeight: 600, fontSize: 16, color: "#282739" }}>
        {status === true ? "Tên dịch vụ" : "Tình trạng"}
      </p>
      {status === true ? (
        <div className="dropdownFilter" style={{ width: 200 }}>
          <button className="inputFilter">
            {inputContent} <CaretDownOutlined className="iconFilter" />
          </button>
          <div className="contentFilter">
            <p onClick={() => update("Tất cả")}>Tất cả</p>
            <p onClick={() => update("Khám sản phụ khoa")}>Khám sản phụ khoa</p>
            <p onClick={() => update("Khám răng hàm mặt")}>Khám răng hàm mặt</p>
            <p onClick={() => update("Khám tim mạch")}>Khám tim mạch</p>
            <p onClick={() => update("Khám tổng quát")}>Khám tổng quát</p>
            <p onClick={() => update("Khám hô hấp")}>Khám hô hấp</p>
          </div>
        </div>
      ) : (
        <div className="dropdownFilter" style={{ width: 150 }}>
          <button className="inputFilter">
            {inputContent} <CaretDownOutlined className="iconFilter" />
          </button>
          <div className="contentFilter">
            <p onClick={() => update1("Tất cả")}>Tất cả</p>
            <p onClick={() => update1("Đang chờ")}>Đang chờ</p>
            <p onClick={() => update1("Đã sử dụng")}>Đã sử dụng</p>
            <p onClick={() => update1("Bỏ qua")}>Bỏ qua</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
