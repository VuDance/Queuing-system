import { Table } from "antd";
import React, { useEffect, useState } from "react";
import redDot from "../../assets/NotActiDot.svg";
import greenDot from "../../assets/actiDot.svg";
import Paragraph from "antd/lib/typography/Paragraph";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import { RightOutlined, SearchOutlined } from "@ant-design/icons";
import InputFilter from "../../component/InputFiter/InputFilter";
import "antd/dist/antd.css";
import { DatePicker, Space } from "antd";
import addIcon from "../../assets/add-square.svg";

const { RangePicker } = DatePicker;
const Service = () => {
  const [devices, setDevices] = useState<any>([]);
  const [filter, setFilter] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getData = async () => {
    setLoading(true);
    const querySnapshot = await getDocs(collection(db, "Service"));
    querySnapshot.forEach((doc) => {
      setDevices(doc.data().data);
      setFilter(doc.data().data);
      setLoading(false);
    });
  };
  useEffect(() => {
    getData();
  }, []);
  const columns = [
    {
      title: "Mã dịch vụ",
      dataIndex: "serviceID",
      key: "serviceID",
      width: 150,
    },
    {
      title: "Tên dịch vụ",
      dataIndex: "name",
      key: "name",
      width: 200,
    },
    {
      title: "Mô tả dịch vụ",
      dataIndex: "detail",
      key: "detail",
      width: 200,
    },
    {
      title: "Trạng thái hoạt động",
      dataIndex: "activity",
      key: "activity",
      width: 300,
      render: (_: any, { activity }: any) => (
        <>
          <p style={{ margin: 0 }} key={activity}>
            {activity ? (
              <p style={{ margin: 0, display: "flex", alignItems: "center" }}>
                <img src={greenDot} style={{ marginRight: 5 }} />
                Đang hoạt động
              </p>
            ) : (
              <p style={{ margin: 0, display: "flex", alignItems: "center" }}>
                <img src={redDot} style={{ marginRight: 5 }} />
                Ngưng hoạt động
              </p>
            )}
          </p>
        </>
      ),
    },
    {
      title: "",
      dataIndex: "",
      key: "",
      width: 100,
      render: (_: any, { serviceID }: any) => (
        <>
          <Link style={{ margin: 0 }} to={`inforService/${serviceID}`}>
            Chi tiết
          </Link>
        </>
      ),
    },
    {
      title: "",
      dataIndex: "",
      key: "",
      width: 100,
      render: (_: any, { serviceID }: any) => (
        <>
          <Link style={{ margin: 0 }} to={`update/${serviceID}`}>
            Cập nhật
          </Link>
        </>
      ),
    },
  ];
  const updatedTableActi = (item: any) => {
    if (item === "Tất cả") {
      return setFilter(devices);
    }
    const updatedList = devices.filter((x: any) => x.activity === item);
    return setFilter(updatedList);
  };
  const requestSearch = (searchedVal: any) => {
    const filteredRows = filter.filter((row: any) => {
      return row.serviceID
        .toString()
        .toLowerCase()
        .includes(searchedVal.toString().toLowerCase());
    });
    if (searchedVal.length < 1) {
      setFilter(devices);
    } else {
      setFilter(filteredRows);
    }
  };
  const dataSource = filter;
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        paddingTop: 20,
        flexDirection: "column",
        marginLeft: 24,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          position: "absolute",
          top: 20,
        }}
      >
        <Link to="/service">
          <h3 style={{ marginBottom: 0, color: "#7E7D88" }}>Dịch vụ</h3>
        </Link>
        <RightOutlined style={{ marginRight: 5, marginLeft: 5 }} />
        <Link to="/device">
          <h3 style={{ marginBottom: 0, color: "#FF7506" }}>
            Danh sách dịch vụ
          </h3>
        </Link>
      </div>
      <div>
        <h2 style={{ color: "#FF7506", marginTop: 30 }}>Danh sách dịch vụ</h2>
        <div
          style={{
            display: "flex",
            marginTop: 10,
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex" }}>
            <InputFilter active={true} updatedTable={updatedTableActi} />
            <div>
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
          </div>
          <div
            style={{ marginRight: 100, marginBottom: 10, position: "relative" }}
          >
            <p style={{ fontWeight: 600, fontSize: 16, color: "#282739" }}>
              Từ khóa
            </p>

            <input
              className="inputSearch"
              placeholder="Nhập từ khóa"
              onChange={(e) => requestSearch(e.target.value)}
            />
            <SearchOutlined
              className="iconSearch"
              style={{ position: "absolute", right: 15, top: 35 }}
            />
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <Table
            className="table-striped-rows"
            dataSource={dataSource}
            columns={columns}
            pagination={{ pageSize: 6 }}
            loading={loading}
          />
          <Link
            to="addService"
            style={{
              width: 80,
              height: 94,
              backgroundColor: "#FFF2E7",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              marginLeft: 24,
            }}
          >
            <img src={addIcon} />
            <p
              style={{
                margin: 0,
                textAlign: "center",
                color: "#FF7506",
                cursor: "pointer",
              }}
            >
              Thêm dịch vụ
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
