import React from "react";
import "./Widget.css";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
interface props {
  img: string;
  text: string;
  data: number;
  status: boolean;
  dataStatus: number;
}

const Widget = ({ img, text, data, status, dataStatus }: props) => {
  return (
    <div className="widget">
      <div className="titleWidget">
        <img src={img} />
        <p>{text}</p>
      </div>
      <div className="dataWidget">
        <p>{data}</p>
        <h5 className={`${status ? "organge" : "red"}`}>
          {status ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
          {dataStatus}%
        </h5>
      </div>
    </div>
  );
};

export default Widget;
