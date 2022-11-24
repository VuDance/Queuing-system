import React, { useState } from "react";
import Widget from "../../component/Dashboard/Widget/Widget";
import calendar from "../../assets/Calendar.png";
import calendarcheck from "../../assets/CalendarCheck.png";
import skip from "../../assets/skip.png";
import call from "../../assets/Waiting.png";
import "./Dashboard.css";
import Chart from "../../component/Dashboard/Chart/Chart";
import tivi from "../../assets/monitor.svg";
import chat from "../../assets/ChatIcon.png";
import ProgessBar from "../../component/Dashboard/ProgessBar/ProgessBar";
import ProgressGreen from "../../component/Dashboard/ProgessBar/ProgressGreen";
import Calendars from "../../component/Dashboard/Calendar/Calendar";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="mainContentDashboard">
        <div className="dashboardHead">Dashboard</div>
        <div className="titleDashboard">Biểu đồ cấp số</div>

        <div className="dashboardWidget">
          <Widget
            img={calendar}
            text="Số thứ tự đã cấp"
            data={4.221}
            status={true}
            dataStatus={32.41}
          />
          <Widget
            img={calendarcheck}
            text="Số thứ tự đã sử dụng"
            data={3.721}
            status={false}
            dataStatus={32.41}
          />
          <Widget
            img={call}
            text="Số thứ tự đang chờ"
            data={468}
            status={true}
            dataStatus={56.41}
          />
          <Widget
            img={skip}
            text="Số thứ tự đã bỏ qua"
            data={32}
            status={false}
            dataStatus={22.41}
          />
        </div>
        <div className="chart">
          <Chart />
        </div>
      </div>
      <div className="progess">
        <h2 style={{ color: "#FF7506", fontSize: 20 }}>Tổng quan</h2>
        <div className="progessBar">
          <ProgessBar
            data={4.221}
            icon={tivi}
            organge
            title="Thiết bị"
            active={3.799}
            notActive={422}
            percent={90}
          />
          <ProgessBar
            data={4.221}
            icon={chat}
            blue
            title="Thiết bị"
            active={3.799}
            notActive={422}
            percent={76}
          />
          <ProgressGreen />
          <Calendars />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
