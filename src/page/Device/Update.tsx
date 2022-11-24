import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { db } from "../../config/firebase";
import { RightOutlined, CaretDownOutlined } from "@ant-design/icons";
import AutoComplete from "../../component/AutoComplete/AutoComplete";
import Button from "../../component/Button/Button";
import { useDispatch } from "react-redux";

const Update = () => {
  const [devices, setDevices] = useState<any>([]);
  const [infor, setInfor] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [deviceType, setDeviceType] = useState<string>("");
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();

  const [value, setValue] = useState("");
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [value5, setValue5] = useState("");
  const [value6, setValue6] = useState("");
  const { id } = useParams();
  useEffect(() => {
    desc();
    update(id);
  }, [loading]);
  const desc = async () => {
    setLoading(true);
    const querySnapshot = await getDocs(collection(db, "device"));
    querySnapshot.forEach((doc) => {
      setDevices(doc.data().data);
    });
    setLoading(false);
  };
  const update = async (item: any) => {
    await devices.forEach((d: any) => {
      if (d.nameUser === item) {
        setInfor(d);
      }
    });
  };
  const handelClose = () => {
    navigate("/device");
  };
  const handleSubmit = async (e: any) => {
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
    console.log(value6);
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
        <h3 style={{ marginBottom: 0, color: "#FF7506" }}>Chi tiết thiết bị</h3>
      </div>
      <h2 style={{ color: "#FF7506", marginTop: 30, marginLeft: 24 }}>
        Quản lí thiết bị
      </h2>
      <form className="addDevice" onSubmit={handleSubmit}>
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
            <div style={{ width: 920 }}>
              <h4>
                Dịch vụ sử dụng <span style={{ color: "red" }}>*</span>
              </h4>
              <AutoComplete setValue={setValue6} />
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
          <Button text="Thêm thiết bị" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Update;
