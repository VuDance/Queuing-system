import React from "react";
import Notification from "./Component/Notification/Notification";
import Sidebar from "./Component/Sidebar/Sidebar";
import "./Layout.css";

const Layout = ({ children }: any) => {
  return (
    <div className="wrapper">
      <Notification />
      <Sidebar />
      <div className="mainContent">{children}</div>
    </div>
  );
};

export default Layout;
