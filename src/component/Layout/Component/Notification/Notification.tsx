import React, { useEffect, useState } from "react";
import "./Notification.css";
import "antd/dist/antd.css";
import { DownOutlined, SmileOutlined, BellFilled } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "../../../../config/firebase";
import { Link } from "react-router-dom";

const menu = (
  <Menu
    items={[
      {
        key: "4",
        label: <div style={{ padding: 0 }}>Thông báo</div>,
      },
      {
        key: "1",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            <h4>Người dùng: Nguyễn Thị Thùy Dung</h4>
            <h4>Thời gian cấp số: 12h20 ngày 30/11/2021</h4>
          </a>
        ),
      },

      {
        key: "2",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            <h4>Người dùng: Nguyễn Thiên Chinh</h4>
            <h4>Thời gian cấp số: 12h20 ngày 30/11/2021</h4>
          </a>
        ),
      },
      {
        key: "3",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.luohanacademy.com"
          >
            <h4>Người dùng: Võ Thị Kim Liên</h4>
            <h4>Thời gian cấp số: 12h20 ngày 30/11/2021</h4>
          </a>
        ),
      },
      {
        key: "5",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            <h4>Người dùng: Hoàng Nguyễn Quốc Huy</h4>
            <h4>Thời gian cấp số: 12h20 ngày 30/11/2021</h4>
          </a>
        ),
      },
      {
        key: "6",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            <h4>Người dùng: Vũ Ngọc Lan Anh</h4>
            <h4>Thời gian cấp số: 12h20 ngày 30/11/2021</h4>
          </a>
        ),
      },
      {
        key: "7",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            <h4>Người dùng: Nguyễn Thị Trúc Anh</h4>
            <h4>Thời gian cấp số: 12h20 ngày 30/11/2021</h4>
          </a>
        ),
      },
      {
        key: "8",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            <h4>Người dùng: Nguyễn Thị Thùy Dung</h4>
            <h4>Thời gian cấp số: 12h20 ngày 30/11/2021</h4>
          </a>
        ),
      },
      {
        key: "9",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            <h4>Người dùng: Nguyễn Thị Thùy Dung</h4>
            <h4>Thời gian cấp số: 12h20 ngày 30/11/2021</h4>
          </a>
        ),
      },
      {
        key: "10",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            <h4>Người dùng: Nguyễn Thị Thùy Dung</h4>
            <h4>Thời gian cấp số: 12h20 ngày 30/11/2021</h4>
          </a>
        ),
      },
    ]}
  />
);
const Notification = () => {
  const [user, setUser] = useState<any>({});
  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      setUser(doc.data());
    });
  };
  useEffect(() => {
    getData();
  }, [auth.currentUser]);
  return (
    <div className="notification">
      <Dropdown overlay={menu}>
        <a onClick={(e) => e.preventDefault()}>
          <Space className="notification_wraper">
            <BellFilled className="notification_bell" />
          </Space>
        </a>
      </Dropdown>
      <div className="notification_user">
        <Link to="/user">
          <img
            src={user.photoURL}
            style={{ marginRight: 5, marginLeft: 5 }}
          ></img>
        </Link>
        <div>
          <h5 style={{ marginBottom: 5, color: "gray" }}>Xin chào</h5>
          <h4 style={{ marginBottom: 0 }}>{user.name}</h4>
        </div>
      </div>
    </div>
  );
};

export default Notification;
