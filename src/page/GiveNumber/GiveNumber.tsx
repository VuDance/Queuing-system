import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RightOutlined, SearchOutlined } from "@ant-design/icons";
import Dropdown from "./Dropdown";
import DropdownRootGive from "./DropdownRootGive";
import Calendar from "./Calendar";
import Search from "./Search";
import Tableservice from "./Table";
import add from "../../assets/add-square.svg";

const GiveNumber = () => {
  const [filter, setFilter] = useState("Tất cả");
  const [filterStatus, setFilterStatus] = useState("Tất cả");
  const [root, setRoot] = useState("Tất cả");
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        paddingTop: 20,
        flexDirection: "column",
        marginLeft: 24,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          position: "absolute",
          top: 20,
        }}
      >
        <Link to="/givenumber">
          <h3 style={{ marginBottom: 0, color: "#7E7D88" }}>Cấp số</h3>
        </Link>
        <RightOutlined style={{ marginRight: 5, marginLeft: 5 }} />
        <Link to="/givenumber">
          <h3 style={{ marginBottom: 0, color: "#FF7506" }}>Quản lí cấp số</h3>
        </Link>
      </div>
      <div>
        <h2 style={{ color: "#FF7506", marginTop: 30 }}>Quản lí cấp số</h2>
        <div
          style={{
            display: "flex",
            marginTop: 10,
            justifyContent: "space-between",
          }}
        >
          {" "}
          <Dropdown status={true} updatedTable={setFilter} />
          <Dropdown setFilterStatus={setFilterStatus} />
          <DropdownRootGive setRoot={setRoot} />
          <Calendar />
          <Search />
        </div>
        <div style={{ display: "flex" }}>
          <Tableservice
            filterTable={filter}
            filterStatus={filterStatus}
            root={root}
          />
          <Link
            to="add"
            style={{
              width: 42,
              height: 94,
              backgroundColor: "#FFF2E7",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              marginLeft: 4,
            }}
          >
            <img src={add} />
            <p
              style={{
                margin: 0,
                textAlign: "center",
                color: "#FF7506",
                cursor: "pointer",
              }}
            >
              Cấp số mới
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GiveNumber;
