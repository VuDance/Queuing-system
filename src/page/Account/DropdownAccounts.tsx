import React, { useState } from "react";
import { CaretDownOutlined } from "@ant-design/icons";

const DropdownAccounts = ({ setJob }: any) => {
  const [inputContent, setInputContent] = useState("Tất cả");
  const update1 = (name: string) => {
    setInputContent(name);
    if (name === "Tất cả") {
      setJob("Tất cả");
    } else if (name === "Kế toán") {
      setJob("Kế toán");
    } else if (name === "Bác sĩ") {
      setJob("Bác sĩ");
    } else setJob("Admin");
  };
  return (
    <div style={{ marginRight: 24, marginBottom: 10 }}>
      <p style={{ fontWeight: 600, fontSize: 16, color: "#282739" }}>
        Tên vai trò
      </p>
      <div className="dropdownFilter" style={{ width: 200 }}>
        <button className="inputFilter">
          {inputContent} <CaretDownOutlined className="iconFilter" />
        </button>
        <div className="contentFilter">
          <p onClick={() => update1("Tất cả")}>Tất cả</p>
          <p onClick={() => update1("Bác sĩ")}>Bác sĩ</p>
          <p onClick={() => update1("Kế toán")}>Kế toán</p>
          <p onClick={() => update1("Admin")}>Admin</p>
        </div>
      </div>
    </div>
  );
};

export default DropdownAccounts;
