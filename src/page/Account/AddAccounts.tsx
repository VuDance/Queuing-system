import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { CaretDownOutlined, RightOutlined } from "@ant-design/icons";
import Button from "../../component/Button/Button";
import { addAccounts } from "../../redux/actions/authActions";
import { Input, Space, Spin } from "antd";

const AddAccounts = () => {
  const [job, setJob] = useState("");
  const [status, setStatus] = useState(true);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await setLoading(true);
    const name = e.target[0].value;
    const username = e.target[1].value;
    const phone = e.target[2].value;
    const password = e.target[3].value;
    const email = e.target[4].value;
    const rePassword = e.target[5].value;
    const job = e.target[6].value;
    await dispatch(
      addAccounts({
        name,
        username,
        phone,
        password,
        email,
        rePassword,
        job,
        status,
      })
    );
    await setLoading(false);
    navigate("/setting/accounts");
  };
  const handelClose = () => {
    navigate("/setting/accounts");
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
        <Link to="/setting/accounts">
          <h3 style={{ marginBottom: 0, color: "#7E7D88" }}>
            Cài đặt hệ thống
          </h3>
        </Link>
        <RightOutlined style={{ marginRight: 5, marginLeft: 5 }} />
        <Link to="/setting/accounts">
          <h3 style={{ marginBottom: 0, color: "#7E7D88" }}>
            Quản lí tài khoản
          </h3>
        </Link>
        <RightOutlined style={{ marginRight: 5, marginLeft: 5 }} />
        <h3 style={{ marginBottom: 0, color: "#FF7506" }}>Thêm tài khoản </h3>
      </div>
      <form className="addDevice" onSubmit={handleSubmit}>
        <h2 style={{ color: "#FF7506", marginTop: 30 }}>Quản lí thiết bị</h2>
        <div className="addForm">
          <h3 style={{ color: "#FF7506" }}>Thông tin thiết bị</h3>
          <div className="inputAddForm">
            <div className="inputText">
              <p>
                Họ và tên <span style={{ color: "red" }}>*</span>
              </p>
              <input placeholder="Nhập họ và tên" required></input>
            </div>
            <div className="inputText">
              <p>
                Tên đăng nhập <span style={{ color: "red" }}>*</span>
              </p>
              <input placeholder="Nhập tên đăng nhập" required></input>
            </div>
            <div className="inputText">
              <p>
                Nhập số điện thoại <span style={{ color: "red" }}>*</span>
              </p>
              <input placeholder="Nhập số điện thoại" required></input>
            </div>
            <div className="inputText">
              <p>
                Mật khẩu <span style={{ color: "red" }}>*</span>
              </p>
              <Space direction="vertical">
                <Input.Password placeholder="Nhập mật khẩu" />
              </Space>
            </div>

            <div className="inputText">
              <p>
                Email <span style={{ color: "red" }}>*</span>
              </p>
              <input placeholder="Nhập email" required></input>
            </div>
            <div className="inputText">
              <p>
                Nhập lại mật khẩu <span style={{ color: "red" }}>*</span>
              </p>
              <Space direction="vertical">
                <Input.Password placeholder="Nhập lại mật khẩu" />
              </Space>
            </div>
            <div className="dropdownDevice">
              <p style={{ fontSize: 16, fontWeight: 600, color: "#282739" }}>
                Vai trò <span style={{ color: "red" }}>*</span>
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
                  value={job}
                  placeholder="Chọn vai trò"
                  required
                ></input>
                <CaretDownOutlined
                  className="dropIcon"
                  style={{ position: "absolute", right: 10 }}
                />
              </div>
              <div className="dropContentDevice">
                <p onClick={() => setJob("Bác sĩ")}>Bác sĩ</p>
                <p onClick={() => setJob("Kế toán")}>Kế toán</p>
                <p onClick={() => setJob("Admin")}>Admin</p>
              </div>
            </div>
            <div className="dropdownDevice">
              <p style={{ fontSize: 16, fontWeight: 600, color: "#282739" }}>
                Tình trạng <span style={{ color: "red" }}>*</span>
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
                  value={status ? "Hoạt động" : "Ngưng hoạt động"}
                  placeholder="Chọn trạng thái"
                  required
                ></input>
                <CaretDownOutlined
                  className="dropIcon"
                  style={{ position: "absolute", right: 10 }}
                />
              </div>
              <div className="dropContentDevice">
                <p onClick={() => setStatus(true)}>Hoạt động</p>
                <p onClick={() => setStatus(false)}>Ngưng hoạt động</p>
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
          <Button text={loading ? <Spin /> : "Thêm"} type="submit" />
        </div>
      </form>
    </div>
  );
};

export default AddAccounts;
