import React from "react";
import "./Sidebar.css";
import "antd/dist/antd.css";
import { Menu } from "antd";
import logoutIcon from "../../../../assets/logoutIcon.svg";
import {
  HddOutlined,
  DesktopOutlined,
  CommentOutlined,
  ProjectOutlined,
  AuditOutlined,
  SettingOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="wrapperSidebar">
      <Menu
        mode="vertical"
        style={{ width: 200 }}
        defaultSelectedKeys={["mail"]}
      >
        <Menu.Item key="dashboard" icon={<HddOutlined />}>
          Dashboard
        </Menu.Item>

        <Menu.Item key="device" icon={<DesktopOutlined />}>
          Thiết bị
        </Menu.Item>
        <Menu.Item key="service" icon={<CommentOutlined />}>
          Dịch vụ
        </Menu.Item>
        <Menu.Item key="number" icon={<AuditOutlined />}>
          Cấp số
        </Menu.Item>
        <Menu.Item key="report" icon={<ProjectOutlined />}>
          Báo cáo
        </Menu.Item>
        <Menu.SubMenu
          key="SubMenu"
          title="Cài đặt hệ thống"
          icon={<SettingOutlined />}
        >
          <Menu.Item key="two">Quản lí vai trò</Menu.Item>
          <Menu.Item key="three">Quản lí tài khoản</Menu.Item>

          <Menu.Item key="four">Nhật kí người dùng</Menu.Item>
        </Menu.SubMenu>
      </Menu>
      <Link to="/login" className="linkLogOut">
        <button className="btnLogOut">
          <img src={logoutIcon} />
          Đăng xuất
        </button>
      </Link>
    </div>
  );
};

export default Sidebar;
