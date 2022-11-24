import React, { useState } from "react";
import { RightOutlined, CaretDownOutlined } from "@ant-design/icons";
import { Link, Navigate, useNavigate } from "react-router-dom";

const NewNum = () => {
  const [inputContent, setInputContent] = useState("Khám tim mạch");
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  var dateVariable = new Date().toLocaleString();
  var hsd = new Date();
  hsd.setHours(hsd.getHours() + 5);
  return (
    <div>
      {active ? (
        <div
          className="numActive"
          style={{
            position: "absolute",
            zIndex: 1,
          }}
        >
          <div style={{ position: "relative" }}>
            <p style={{ marginTop: 100 }}>Số thứ tự được cấp</p>
            <h1 style={{ color: "#FF7506" }}>2001201</h1>
            <small>
              DV: {inputContent} <strong>(tại quầy số 1)</strong>{" "}
            </small>
            <div
              style={{
                position: "absolute",
                background: "#FF9138",
                bottom: 0,
                height: 110,
                width: 469,
                borderRadius: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <h4 style={{ color: "#fff" }}>Thời gian cấp: {dateVariable}</h4>
              <h4 style={{ color: "#fff" }}>
                Hạn sử dụng: {hsd.toLocaleString()}
              </h4>
            </div>
          </div>
          <button
            onClick={() => setActive(false)}
            style={{
              width: 100,
              marginTop: 5,
              height: 40,
              color: "#fff",
              background: "#ff9138",
              borderRadius: 8,
              border: 0,
              cursor: "pointer",
            }}
          >
            close
          </button>
        </div>
      ) : (
        ""
      )}
      <div
        style={{
          display: "flex",
          marginLeft: 24,
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
          <h3 style={{ marginBottom: 0, color: "#7E7D88" }}>
            Danh sách cấp số
          </h3>
        </Link>
        <RightOutlined style={{ marginRight: 5, marginLeft: 5 }} />
        <h3 style={{ marginBottom: 0, color: "#FF7506" }}>Cấp số mới</h3>
      </div>
      <h2 style={{ color: "#FF7506", marginTop: 30, marginLeft: 24 }}>
        Quản lí cấp số
      </h2>
      <div style={{ display: "flex" }}>
        <div className="formInfor" style={{ textAlign: "center" }}>
          <h1 style={{ color: "#FF7506" }}>Cấp số mới</h1>
          <p style={{ marginTop: 10 }}>Danh sách khách hàng lựa chọn</p>
          <div className="dropdownFilter" style={{ width: 240 }}>
            <button className="inputFilter">
              {inputContent} <CaretDownOutlined className="iconFilter" />
            </button>
            <div className="contentFilter" style={{ width: 240 }}>
              <p onClick={() => setInputContent("Khám tim mạch")}>
                Khám tim mạch
              </p>
              <p onClick={() => setInputContent("Khám sản - Phụ khoa")}>
                Khám sản - Phụ khoa
              </p>
              <p onClick={() => setInputContent("Khám răng hàm mặt")}>
                Khám răng hàm mặt
              </p>
              <p onClick={() => setInputContent("Khám tai mũi họng")}>
                Khám tai mũi họng
              </p>
              <p onClick={() => setInputContent("Khám mắt")}>Khám mắt</p>
              <p onClick={() => setInputContent("Khám tổng quát")}>
                Khám tổng quát
              </p>
            </div>
          </div>
          <div style={{ marginTop: 100 }}>
            <button
              className="btnNewNum closeNum"
              style={{ margin: 5, cursor: "pointer" }}
              onClick={() => navigate("/givenumber")}
            >
              Hủy bỏ
            </button>
            <button
              style={{ margin: 5, cursor: "pointer" }}
              className="btnNewNum activeNum"
              onClick={() => setActive(true)}
            >
              In số
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewNum;
