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
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../../assets/Logo.svg";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="wrapperSidebar">
      <img src={logo} style={{ position: "absolute", top: 50 }} />
      <Menu
        mode="vertical"
        style={{ width: 200 }}
        defaultSelectedKeys={["mail"]}
      >
        <Menu.Item
          key="dashboard"
          icon={<HddOutlined />}
          onClick={() => navigate("/dashboard")}
        >
          Dashboard
        </Menu.Item>

        <Menu.Item
          key="device"
          icon={<DesktopOutlined />}
          onClick={() => navigate("/device")}
        >
          Thiết bị
        </Menu.Item>

        <Menu.Item
          key="service"
          icon={<CommentOutlined />}
          onClick={() => navigate("/service")}
        >
          Dịch vụ
        </Menu.Item>

        <Menu.Item
          key="number"
          icon={<AuditOutlined />}
          onClick={() => navigate("/givenumber")}
        >
          Cấp số
        </Menu.Item>
        <Menu.Item
          key="report"
          icon={<ProjectOutlined />}
          onClick={() => navigate("/report")}
        >
          Báo cáo
        </Menu.Item>
        <Menu.SubMenu
          key="SubMenu"
          title="Cài đặt hệ thống"
          icon={<SettingOutlined />}
        >
          <Menu.Item key="two" onClick={() => navigate("/setting/job")}>
            Quản lí vai trò
          </Menu.Item>
          <Menu.Item key="three" onClick={() => navigate("/setting/accounts")}>
            Quản lí tài khoản
          </Menu.Item>

          <Menu.Item key="four" onClick={() => navigate("/setting/diary")}>
            Nhật kí người dùng
          </Menu.Item>
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
