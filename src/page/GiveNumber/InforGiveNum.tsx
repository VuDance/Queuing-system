import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../../config/firebase";
import { RightOutlined } from "@ant-design/icons";
import blueDot from "../../assets/processing.svg";
import silverDot from "../../assets/empty.svg";
import redDot from "../../assets/NotActiDot.svg";
import bachIcon from "../../assets/back-square.svg";

const InforGiveNum = () => {
  const [givenum, setGiveNum] = useState<any>([]);
  const [infor, setInfor] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { id } = useParams();
  const idNew = Number(id);
  useEffect(() => {
    getData();
    update(idNew);
  }, [loading]);
  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "givenumber"));
    querySnapshot.forEach((doc) => {
      setGiveNum(doc.data().data);
    });
    setLoading(false);
  };
  const update = async (item: any) => {
    await givenum.forEach((d: any) => {
      if (d.stt === item) {
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
            Danh sách cấp số
          </h3>
        </Link>
        <RightOutlined style={{ marginRight: 5, marginLeft: 5 }} />
        <h3 style={{ marginBottom: 0, color: "#FF7506" }}>Chi tiết</h3>
      </div>
      <h2 style={{ color: "#FF7506", marginTop: 30, marginLeft: 24 }}>
        Quản lí cấp số
      </h2>
      <div style={{ display: "flex" }}>
        <div className="formInfor">
          <h3>Thông tin thiết bị</h3>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <div style={{ width: 420, display: "flex" }}>
              <h4 style={{ marginRight: 43, width: 100 }}>Họ tên:</h4>
              <span>{infor.name}</span>
            </div>
            <div style={{ width: 420, display: "flex" }}>
              <h4 style={{ marginRight: 43, width: 100 }}>Nguồn cấp:</h4>
              <span>{infor.root}</span>
            </div>
            <div style={{ width: 420, display: "flex" }}>
              <h4 style={{ marginRight: 43, width: 100 }}>Tên dịch vụ:</h4>
              <span>{infor.service}</span>
            </div>
            <div style={{ width: 420, display: "flex" }}>
              <h4 style={{ marginRight: 43, width: 100 }}>Trạng thái:</h4>
              <p style={{ margin: 0, display: "flex", alignItems: "center" }}>
                {infor.status === "Đang chờ" && (
                  <img src={blueDot} style={{ marginRight: 5 }} />
                )}
                {infor.status === "Đã sử dụng" && (
                  <img src={silverDot} style={{ marginRight: 5 }} />
                )}
                {infor.status === "Bỏ qua" && (
                  <img src={redDot} style={{ marginRight: 5 }} />
                )}
                {infor.status}
              </p>
            </div>
            <div style={{ width: 420, display: "flex" }}>
              <h4 style={{ marginRight: 43, width: 100 }}>Số thứ tự:</h4>
              <span>{infor.stt}</span>
            </div>
            <div style={{ width: 420, display: "flex" }}>
              <h4 style={{ marginRight: 43, width: 100 }}>Số điện thoại:</h4>
              <span>{infor.phone}</span>
            </div>
            <div style={{ width: 420, display: "flex" }}>
              <h4 style={{ marginRight: 43, width: 100 }}>Thời gian cấp:</h4>
              <span></span>
            </div>
            <div style={{ width: 420, display: "flex" }}>
              <h4 style={{ marginRight: 43, width: 100 }}>Địa chỉ Email:</h4>
              <span>{infor.email}</span>
            </div>
            <div style={{ width: 420, display: "flex" }}>
              <h4 style={{ marginRight: 43, width: 100 }}>Hạn sử dụng:</h4>
              <span></span>
            </div>
          </div>
        </div>
        <Link
          to="/givenumber"
          style={{
            width: 80,
            height: 94,
            backgroundColor: "#FFF2E7",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            marginTop: 10,
          }}
        >
          <img src={bachIcon} />
          <p
            style={{
              margin: 0,
              textAlign: "center",
              color: "#FF7506",
              cursor: "pointer",
            }}
          >
            Quay lại
          </p>
        </Link>
      </div>
    </div>
  );
};

export default InforGiveNum;
