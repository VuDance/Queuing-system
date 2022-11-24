import React, { useState } from "react";
import "./Service.css";
import { CaretDownOutlined, RightOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { addDevice, addService } from "../../redux/actions/authActions";
import Button from "../../component/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { Spin } from "antd";

const AddService = () => {
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const [checkbox3, setCheckbox3] = useState(false);
  const [checkbox4, setCheckbox4] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await setLoading(true);
    const serviceID = e.target[0].value;
    const name = e.target[1].value;
    const detail = e.target[2].value;
    const check1 = checkbox1;
    const check2 = checkbox2;
    const check3 = checkbox3;
    const check4 = checkbox4;
    const activity = true;
    console.log(check2);
    await dispatch(
      addService({
        serviceID,
        name,
        detail,
        check1,
        check2,
        check3,
        check4,
        activity,
      })
    );
    await setLoading(false);
    navigate("/service");
  };
  const handelClose = () => {
    navigate("/service");
  };
  const handleChang1 = (e: any) => {
    setCheckbox1(e.target.checked);
  };
  const handleChang2 = (e: any) => {
    setCheckbox2(e.target.checked);
  };
  const handleChang3 = (e: any) => {
    setCheckbox3(e.target.checked);
  };
  const handleChang4 = (e: any) => {
    setCheckbox4(e.target.checked);
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          marginLeft: 24,
          alignItems: "center",
          position: "absolute",
          top: 20,
        }}
      >
        <Link to="/device">
          <h3 style={{ marginBottom: 0, color: "#7E7D88" }}>dịch vụ</h3>
        </Link>
        <RightOutlined style={{ marginRight: 5, marginLeft: 5 }} />
        <Link to="/device">
          <h3 style={{ marginBottom: 0, color: "#7E7D88" }}>
            Danh sách dịch vụ
          </h3>
        </Link>
        <RightOutlined style={{ marginRight: 5, marginLeft: 5 }} />
        <h3 style={{ marginBottom: 0, color: "#FF7506" }}>Thêm dịch vụ</h3>
      </div>
      <form className="addDevice" onSubmit={handleSubmit}>
        <h2 style={{ color: "#FF7506", marginTop: 30 }}>Quản lí dịch vụ</h2>
        <div className="addForm">
          <h3 style={{ color: "#FF7506" }}>Thông tin dịch vụ</h3>
          <div className="inputAddServiceForm">
            <div style={{ display: "flex", gap: 20, width: 900 }}>
              <div style={{ width: 450 }}>
                <div>
                  <p>
                    Mã dịch vụ <span style={{ color: "red" }}>*</span>
                  </p>
                  <input placeholder="Nhập mã dịch vụ" required></input>
                </div>
                <div>
                  <p>
                    Tên dịch vụ <span style={{ color: "red" }}>*</span>
                  </p>
                  <input placeholder="Nhập tên dịch vụ" required></input>
                </div>
              </div>
              <div style={{ width: 450 }}>
                <p>
                  Mô tả <span style={{ color: "red" }}>*</span>
                </p>
                <textarea placeholder="Mô tả dịch vụ"></textarea>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h3 style={{ color: "#FF7506" }}>Quy tắc cấp số</h3>
              <div style={{ display: "flex", alignItems: "center" }}>
                <input
                  type="checkbox"
                  style={{ width: 20, marginBottom: 0, marginRight: 10 }}
                  onChange={handleChang1}
                />
                <span style={{ width: 120, color: "#282739", fontWeight: 600 }}>
                  Tăng tự động từ :
                </span>
                <span>
                  <button>0001</button> đến <button>9999</button>
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <input
                  type="checkbox"
                  onChange={handleChang2}
                  style={{ width: 20, marginBottom: 0, marginRight: 10 }}
                />
                <span style={{ width: 120, fontWeight: 600, color: "#282739" }}>
                  Prefix :
                </span>
                <span>
                  <button>001</button>
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <input
                  type="checkbox"
                  onChange={handleChang3}
                  style={{ width: 20, marginBottom: 0, marginRight: 10 }}
                />
                <span style={{ width: 120, fontWeight: 600, color: "#282739" }}>
                  Surfix :
                </span>
                <span>
                  <button>001</button>
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <input
                  type="checkbox"
                  onChange={handleChang4}
                  style={{ width: 20, marginBottom: 0, marginRight: 10 }}
                />
                <span style={{ width: 120, fontWeight: 600, color: "#282739" }}>
                  Reset mỗi ngày
                </span>
              </div>
            </div>
          </div>
          <p style={{ marginTop: 20 }}>
            <span style={{ color: "red" }}>*</span>Là trường bắt buộc
          </p>
        </div>
        <div
          style={{
            display: "flex",
            gap: 20,
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <Button text="Hủy bỏ" onClick={handelClose} />
          <Button text={loading ? <Spin /> : "Thêm dịch vụ"} type="submit" />
        </div>
      </form>
    </div>
  );
};

export default AddService;
