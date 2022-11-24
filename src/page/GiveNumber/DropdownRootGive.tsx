import React, { useState } from "react";
import { CaretDownOutlined } from "@ant-design/icons";

const DropdownRootGive = ({ setRoot }: any) => {
  const [inputContent, setInputContent] = useState("Tất cả");
  const update1 = (name: string) => {
    setInputContent(name);
    if (name === "Tất cả") {
      setRoot("Tất cả");
    } else if (name === "Kios") {
      setRoot("Kios");
    } else setRoot("Hệ thống");
  };
  return (
    <div style={{ marginRight: 24, marginBottom: 10 }}>
      <p style={{ fontWeight: 600, fontSize: 16, color: "#282739" }}>
        Nguồn cấp
      </p>
      <div className="dropdownFilter" style={{ width: 130 }}>
        <button className="inputFilter">
          {inputContent} <CaretDownOutlined className="iconFilter" />
        </button>
        <div className="contentFilter">
          <p onClick={() => update1("Tất cả")}>Tất cả</p>
          <p onClick={() => update1("Kios")}>Kios</p>
          <p onClick={() => update1("Hệ thống")}>Hệ thống</p>
        </div>
      </div>
    </div>
  );
};

export default DropdownRootGive;
