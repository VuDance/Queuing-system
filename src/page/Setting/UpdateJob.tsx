import React, { useState } from "react";
import { RightOutlined, SearchOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../component/Button/Button";
import { useDispatch } from "react-redux";
import { addJob } from "../../redux/actions/authActions";

const UpdateJob = () => {
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const [checkbox3, setCheckbox3] = useState(false);
  const [checkbox4, setCheckbox4] = useState(false);
  const [checkbox5, setCheckbox5] = useState(false);
  const [checkbox6, setCheckbox6] = useState(false);
  const [checkbox7, setCheckbox7] = useState(false);
  const [checkbox8, setCheckbox8] = useState(false);
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const title = e.target[0].value;
    const detail = e.target[1].value;
    const check1 = checkbox1;
    const check2 = checkbox2;
    const check3 = checkbox3;
    const check4 = checkbox4;
    const check5 = checkbox5;
    const check6 = checkbox6;
    const check7 = checkbox7;
    const check8 = checkbox8;
    await dispatch(
      addJob({
        title,
        detail,
        check1,
        check2,
        check3,
        check4,
        check5,
        check6,
        check7,
        check8,
      })
    );
    navigate("/setting/job");
  };
  const handelClose = () => {
    navigate("/setting/job");
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
  const handleChang5 = (e: any) => {
    setCheckbox5(e.target.checked);
  };
  const handleChang6 = (e: any) => {
    setCheckbox6(e.target.checked);
  };
  const handleChang7 = (e: any) => {
    setCheckbox7(e.target.checked);
  };
  const handleChang8 = (e: any) => {
    setCheckbox8(e.target.checked);
  };
  return (
    <div
      style={{
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
        <Link to="/setting/job">
          <h3 style={{ marginBottom: 0, color: "#7E7D88" }}>
            Cài đặt hệ thống
          </h3>
        </Link>
        <RightOutlined style={{ marginRight: 5, marginLeft: 5 }} />
        <Link to="/setting/job">
          <h3 style={{ marginBottom: 0, color: "#FF7506" }}>Quản lí vai trò</h3>
        </Link>
        <RightOutlined style={{ marginRight: 5, marginLeft: 5 }} />
        <Link to="/setting/job">
          <h3 style={{ marginBottom: 0, color: "#FF7506" }}>Thêm vai trò</h3>
        </Link>
      </div>
      <form onSubmit={handleSubmit}>
        <h2 style={{ color: "#FF7506", marginBottom: 20 }}>
          Danh sách vai trò
        </h2>
        <div className="formInfor" style={{ margin: 0 }}>
          <h2 style={{ color: "#FF7506" }}>Thông tin vai trò</h2>
          <div style={{ display: "flex" }}>
            <div style={{ width: 450 }}>
              <div>
                <h4>
                  Tên vai trò <span style={{ color: "red" }}>*</span>
                </h4>
                <input
                  placeholder="Nhập mã dịch vụ"
                  required
                  style={{
                    height: 30,
                    paddingLeft: 10,
                    borderRadius: 8,
                    border: 1.5,
                    borderColor: "#d4d4d7",
                    borderStyle: "solid",
                  }}
                ></input>
              </div>
              <div style={{ width: 450 }}>
                <h4>
                  Mô tả <span style={{ color: "red" }}>*</span>
                </h4>
                <textarea placeholder="Mô tả dịch vụ"></textarea>
              </div>
              <p style={{ marginTop: 20 }}>
                <span style={{ color: "red" }}>*</span>Là trường bắt buộc
              </p>
            </div>
            <div style={{ marginLeft: 24, width: "100%", height: 330 }}>
              <h4>
                Phân quyền chức năng <span style={{ color: "red" }}>*</span>
              </h4>
              <div
                style={{
                  height: "100%",
                  width: "100%",
                  background: "#FFF2E7",
                  borderRadius: 8,
                  paddingLeft: 24,
                  paddingTop: 10,
                }}
              >
                <div>
                  <h2 style={{ color: "#FF7506" }}>Nhóm chức năng A</h2>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <input
                      type="checkbox"
                      style={{ width: 20, marginBottom: 0, marginRight: 10 }}
                      onChange={handleChang1}
                    />
                    <span
                      style={{ width: 120, fontWeight: 600, color: "#282739" }}
                    >
                      Tất cả
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <input
                      type="checkbox"
                      onChange={handleChang2}
                      style={{ width: 20, marginBottom: 0, marginRight: 10 }}
                    />
                    <span
                      style={{ width: 120, fontWeight: 600, color: "#282739" }}
                    >
                      Chức năng x
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <input
                      type="checkbox"
                      style={{ width: 20, marginBottom: 0, marginRight: 10 }}
                      onChange={handleChang3}
                    />
                    <span
                      style={{ width: 120, fontWeight: 600, color: "#282739" }}
                    >
                      Chức năng y
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <input
                      type="checkbox"
                      style={{ width: 20, marginBottom: 0, marginRight: 10 }}
                      onChange={handleChang4}
                    />
                    <span
                      style={{ width: 120, fontWeight: 600, color: "#282739" }}
                    >
                      Chức năng z
                    </span>
                  </div>
                </div>

                <div>
                  <h2 style={{ color: "#FF7506" }}>Nhóm chức năng B</h2>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <input
                      type="checkbox"
                      style={{ width: 20, marginBottom: 0, marginRight: 10 }}
                      onChange={handleChang5}
                    />
                    <span
                      style={{ width: 120, fontWeight: 600, color: "#282739" }}
                    >
                      Tất cả
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <input
                      type="checkbox"
                      style={{ width: 20, marginBottom: 0, marginRight: 10 }}
                      onChange={handleChang6}
                    />
                    <span
                      style={{ width: 120, fontWeight: 600, color: "#282739" }}
                    >
                      Chức năng x
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <input
                      type="checkbox"
                      style={{ width: 20, marginBottom: 0, marginRight: 10 }}
                      onChange={handleChang7}
                    />
                    <span
                      style={{ width: 120, fontWeight: 600, color: "#282739" }}
                    >
                      Chức năng y
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <input
                      type="checkbox"
                      style={{ width: 20, marginBottom: 0, marginRight: 10 }}
                      onChange={handleChang8}
                    />
                    <span
                      style={{ width: 120, fontWeight: 600, color: "#282739" }}
                    >
                      Chức năng z
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: 20,
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <Button text="Hủy bỏ" onClick={() => handelClose()} />
          <Button text="Cập nhật" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default UpdateJob;
