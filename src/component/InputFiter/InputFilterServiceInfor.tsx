import React, { useState } from "react";
import "./InputFilter.css";
import { CaretDownOutlined } from "@ant-design/icons";

const InputFilterServiceInfor = ({ updatedTable }: any) => {
  const [inputContent, setInputContent] = useState("Tất cả");
  const update = (name: string) => {
    setInputContent(name);
    if (name === "Đã hoàn thành") {
      updatedTable("Đã hoàn thành");
    } else if (name === "Tất cả") {
      updatedTable("Tất cả");
    } else if (name === "Đang thực hiện") {
      updatedTable("Đang thực hiện");
    } else {
      updatedTable("Vắng");
    }
  };
  return (
    <div style={{ marginRight: 24, marginBottom: 10 }}>
      <p style={{ fontWeight: 600, fontSize: 16, color: "#282739" }}>
        Trạng thái
      </p>

      <div className="dropdownFilter">
        <button className="inputFilter">
          {inputContent} <CaretDownOutlined className="iconFilter" />
        </button>
        <div className="contentFilter">
          <p onClick={() => update("Tất cả")}>Tất cả</p>
          <p onClick={() => update("Đã hoàn thành")}>Đã hoàn thành</p>
          <p onClick={() => update("Đang thực hiện")}>Đang thực hiện</p>
          <p onClick={() => update("Vắng")}>Vắng</p>
        </div>
      </div>
    </div>
  );
};

export default InputFilterServiceInfor;
