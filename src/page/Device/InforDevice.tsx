import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../../config/firebase";
import { RightOutlined } from "@ant-design/icons";

const InforDevice = () => {
  const [devices, setDevices] = useState<any>([]);
  const [infor, setInfor] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
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
      <div className="formInfor">
        <h3>Thông tin thiết bị</h3>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <div style={{ width: 420, display: "flex" }}>
            <h4 style={{ marginRight: 43, width: 100 }}>Mã thiết bị</h4>
            <span>{infor.deviceId}</span>
          </div>
          <div style={{ width: 420, display: "flex" }}>
            <h4 style={{ marginRight: 43, width: 100 }}>Loại thiết bị</h4>
            <span>{infor.deviceType}</span>
          </div>
          <div style={{ width: 420, display: "flex" }}>
            <h4 style={{ marginRight: 43, width: 100 }}>Tên thiết bị</h4>
            <span>{infor.name}</span>
          </div>
          <div style={{ width: 420, display: "flex" }}>
            <h4 style={{ marginRight: 43, width: 100 }}>Tên đăng nhập</h4>
            <span>{infor.nameUser}</span>
          </div>
          <div style={{ width: 420, display: "flex" }}>
            <h4 style={{ marginRight: 43, width: 100 }}>Địa chỉ IP</h4>
            <span>{infor.IP}</span>
          </div>
          <div style={{ width: 420, display: "flex" }}>
            <h4 style={{ marginRight: 43, width: 100 }}>Mật khẩu</h4>
            <span>{infor.password}</span>
          </div>
          <div style={{ width: 952 }}>
            <h4>Dịch vụ sử dụng</h4>
            <span>{infor.translation}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InforDevice;
