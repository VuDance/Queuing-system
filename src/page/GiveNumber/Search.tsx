import React from "react";
import { SearchOutlined } from "@ant-design/icons";

const Search = () => {
  return (
    <div style={{ marginRight: 100, marginBottom: 10, position: "relative" }}>
      <p style={{ fontWeight: 600, fontSize: 16, color: "#282739" }}>Từ khóa</p>
      <input className="inputSearch" placeholder="Nhập từ khóa" />
      <SearchOutlined
        className="iconSearch"
        style={{ position: "absolute", right: 15, top: 35 }}
      />
    </div>
  );
};

export default Search;
