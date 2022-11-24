import React, { useState } from "react";
import "./Device.css";
import { CaretDownOutlined, RightOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { addDevice } from "../../redux/actions/authActions";
import Button from "../../component/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { Spin } from "antd";

const Add = () => {
  const [loading, setLoading] = useState(false);
  const [deviceType, setDeviceType] = useState<string>("");
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    await setLoading(true);
    e.preventDefault();
    const deviceId = e.target[0].value;
    const deviceType = e.target[1].value;
    const name = e.target[2].value;
    const nameUser = e.target[3].value;
    const IP = e.target[4].value;
    const password = e.target[5].value;
    const translation = e.target[6].value;
    const activity = true;
    const connect = true;
    await dispatch(
      addDevice({
        deviceId,
        deviceType,
        name,
        nameUser,
        IP,
        password,
        translation,
        activity,
        connect,
      })
    );
    await setLoading(false);
    navigate("/device");
  };
  const handelClose = () => {
    navigate("/device");
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
          <h3 style={{ marginBottom: 0, color: "#7E7D88" }}>Thiết bị</h3>
        </Link>
        <RightOutlined style={{ marginRight: 5, marginLeft: 5 }} />
        <Link to="/device">
          <h3 style={{ marginBottom: 0, color: "#7E7D88" }}>
            Danh sách thiết bị
          </h3>
        </Link>
        <RightOutlined style={{ marginRight: 5, marginLeft: 5 }} />
        <h3 style={{ marginBottom: 0, color: "#FF7506" }}>Thêm thiết bị</h3>
      </div>
      <form className="addDevice" onSubmit={handleSubmit}>
        <h2 style={{ color: "#FF7506", marginTop: 30 }}>Quản lí thiết bị</h2>
        <div className="addForm">
          <h3 style={{ color: "#FF7506" }}>Thông tin thiết bị</h3>
          <div className="inputAddForm">
            <div className="inputText">
              <p>
                Mã thiết bị <span style={{ color: "red" }}>*</span>
              </p>
              <input placeholder="Nhập mã thiết bị" required></input>
            </div>
            <div className="dropdownDevice">
              <p style={{ fontSize: 16, fontWeight: 600, color: "#282739" }}>
                Loại thiết bị <span style={{ color: "red" }}>*</span>
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  position: "relative",
                }}
              >
                <input
                  className="dropInput"
                  value={deviceType}
                  placeholder="Chọn loại thiết bị"
                  required
                ></input>
                <CaretDownOutlined
                  className="dropIcon"
                  style={{ position: "absolute", right: 10 }}
                />
              </div>
              <div className="dropContentDevice">
                <p onClick={() => setDeviceType("Kiosk")}>Kiosk</p>
                <p onClick={() => setDeviceType("Display counter")}>
                  Display counter
                </p>
              </div>
            </div>
            <div className="inputText">
              <p>
                Tên thiết bị <span style={{ color: "red" }}>*</span>
              </p>
              <input placeholder="Nhập tên thiết bị" required></input>
            </div>
            <div className="inputText">
              <p>
                Tên đăng nhập <span style={{ color: "red" }}>*</span>
              </p>
              <input placeholder="Nhập tài khoản" required></input>
            </div>
            <div className="inputText">
              <p>
                Địa chỉ IP <span style={{ color: "red" }}>*</span>
              </p>
              <input placeholder="Nhập địa chỉ IP" required></input>
            </div>
            <div className="inputText">
              <p>
                Mật khẩu <span style={{ color: "red" }}>*</span>
              </p>
              <input placeholder="Nhập mật khẩu" required></input>
            </div>
            <div className="inputText">
              <p>
                Dịch vụ sử dụng <span style={{ color: "red" }}>*</span>
              </p>
              <input
                placeholder="Nhập dịch vụ sử dụng"
                style={{ width: 920 }}
                required
              ></input>
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
          <Button text={loading ? <Spin /> : "Thêm thiết bị"} type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Add;
