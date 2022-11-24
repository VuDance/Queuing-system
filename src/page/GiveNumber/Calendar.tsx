import React from "react";
import { DatePicker, Space } from "antd";

const { RangePicker } = DatePicker;
const Calendar = () => {
  return (
    <div style={{ marginRight: 20 }}>
      <p style={{ fontWeight: 600, fontSize: 16, color: "#282739" }}>
        Chọn thời gian
      </p>
      <Space direction="vertical" size={12} style={{ height: 35 }}>
        <RangePicker
          style={{ height: 35, borderRadius: 8 }}
          dateRender={(current) => {
            const style: React.CSSProperties = {};
            if (current.date() === 1) {
              style.border = "1px solid #1890ff";
              style.borderRadius = "10%";
            }
            return (
              <div className="ant-picker-cell-inner" style={style}>
                {current.date()}
              </div>
            );
          }}
        />
      </Space>
    </div>
  );
};

export default Calendar;
