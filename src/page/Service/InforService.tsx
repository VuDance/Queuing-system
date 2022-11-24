import React, { useEffect, useState } from "react";
import { RightOutlined } from "@ant-design/icons";
import { Link, useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import { SearchOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { DatePicker, Space, Table } from "antd";
import greenDot from "../../assets/actiDot.svg";
import blueDot from "../../assets/processing.svg";
import silverDot from "../../assets/empty.svg";
import updateIcon from "../../assets/Edit_Square.svg";
import bachIcon from "../../assets/back-square.svg";
import InputFilterServiceInfor from "../../component/InputFiter/InputFilterServiceInfor";

const { RangePicker } = DatePicker;
const InforService = () => {
  const [service, setService] = useState<any>([]);
  const [base, setBase] = useState<any>([]);
  const [infor, setInfor] = useState<any>([]);
  const [filter, setFilter] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { id } = useParams();
  useEffect(() => {
    desc();
    update(id);
  }, [loading]);
  useEffect(() => {
    getData();
  }, []);
  const desc = async () => {
    setLoading(true);
    const querySnapshot = await getDocs(collection(db, "Service"));
    querySnapshot.forEach((doc) => {
      setService(doc.data().data);
    });
    setLoading(false);
  };
  const getData = async () => {
    setLoading(true);
    const querySnapshot = await getDocs(collection(db, "purpose"));
    querySnapshot.forEach((doc) => {
      setBase(doc.data().data);
      setFilter(doc.data().data);
      setLoading(false);
    });
  };
  const update = async (item: any) => {
    await service.forEach((d: any) => {
      if (d.serviceID === item) {
        setInfor(d);
      }
    });
  };
  const columns = [
    {
      title: "Số thứ tự",
      dataIndex: "number",
      key: "number",
      width: 150,
    },
    {
      title: "Trạng thái",
      dataIndex: "complete",
      key: "complete",
      width: 200,
      render: (_: any, { complete }: any) => (
        <div style={{ display: "flex" }}>
          {complete === "Đã hoàn thành" && <img src={greenDot} />}
          {complete === "Đang thực hiện" && <img src={blueDot} />}
          {complete === "Vắng" && <img src={silverDot} />}
          <p style={{ marginLeft: 10 }}>{complete}</p>
        </div>
      ),
    },
  ];
  const updatedTable = (item: any) => {
    if (item === "Tất cả") {
      return setFilter(base);
    }
    const updatedList = base.filter((x: any) => x.complete === item);
    return setFilter(updatedList);
  };
  const requestSearch = (searchedVal: any) => {
    const filteredRows = filter.filter((row: any) => {
      return row.number
        .toString()
        .toLowerCase()
        .includes(searchedVal.toString().toLowerCase());
    });
    if (searchedVal.length < 1) {
      setFilter(base);
    } else {
      setFilter(filteredRows);
    }
  };
  const dataSource = filter;
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
        <Link to="/service">
          <h3 style={{ marginBottom: 0, color: "#7E7D88" }}>Dịch vụ</h3>
        </Link>
        <RightOutlined style={{ marginRight: 5, marginLeft: 5 }} />
        <Link to="/service">
          <h3 style={{ marginBottom: 0, color: "#7E7D88" }}>
            Danh sách dịch vụ
          </h3>
        </Link>
        <RightOutlined style={{ marginRight: 5, marginLeft: 5 }} />
        <h3 style={{ marginBottom: 0, color: "#FF7506" }}>Chi tiết dịch vụ</h3>
      </div>
      <h2 style={{ color: "#FF7506", marginTop: 30, marginLeft: 24 }}>
        Quản lí dịch vụ
      </h2>
      <div className="formInforService">
        <div className="inforService1">
          <h3 style={{ color: "#FF7506" }}>Thông tin dịch vụ</h3>
          <div
            style={{ display: "flex", alignItems: "center", marginBottom: 10 }}
          >
            <span
              style={{
                width: 150,
                fontWeight: 600,
                color: "#282739",
              }}
            >
              Mã dịch vụ :
            </span>
            <span>{infor.serviceID}</span>
          </div>
          <div
            style={{ display: "flex", alignItems: "center", marginBottom: 10 }}
          >
            <span
              style={{
                width: 150,
                fontWeight: 600,
                color: "#282739",
              }}
            >
              Tên dịch vụ :
            </span>
            <span>{infor.name}</span>
          </div>
          <div
            style={{ display: "flex", alignItems: "center", marginBottom: 10 }}
          >
            <span
              style={{
                width: 150,
                fontWeight: 600,
                color: "#282739",
              }}
            >
              Mô tả :
            </span>
            <span>{infor.detail}</span>
          </div>
          <h3 style={{ color: "#FF7506" }}>Quy tắc cấp số</h3>
          {infor.check1 && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 10,
              }}
            >
              <span style={{ width: 120, color: "#282739", fontWeight: 600 }}>
                Tăng tự động từ :
              </span>
              <span>
                <button>0001</button> đến <button>9999</button>
              </span>
            </div>
          )}
          {infor.check2 && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 10,
              }}
            >
              <span style={{ width: 120, fontWeight: 600, color: "#282739" }}>
                Prefix :
              </span>
              <span>
                <button>001</button>
              </span>
            </div>
          )}
          {infor.check3 && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 10,
              }}
            >
              <span style={{ width: 120, fontWeight: 600, color: "#282739" }}>
                Surfix :
              </span>
              <span>
                <button>001</button>
              </span>
            </div>
          )}
          {infor.check4 && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 10,
              }}
            >
              <span style={{ width: 120, fontWeight: 600, color: "#282739" }}>
                Reset mỗi ngày
              </span>
            </div>
          )}
          <p>Ví dụ: 201 - 2001</p>
        </div>
        <div className="inforService2">
          <div
            style={{
              display: "flex",
              marginTop: 10,
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex" }}>
              <InputFilterServiceInfor updatedTable={updatedTable} />
              <div>
                <p style={{ fontWeight: 600, fontSize: 16, color: "#282739" }}>
                  Chọn thời gian
                </p>
                <Space direction="vertical" size={12} style={{ height: 35 }}>
                  <RangePicker
                    style={{
                      height: 35,
                      borderRadius: 8,
                      width: 150,
                      border: 1.5,
                      borderStyle: "solid",
                      borderColor: "#d4d4d7",
                    }}
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
              style={{
                marginBottom: 30,
                position: "relative",
              }}
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
          <div>
            <Table
              className="table-striped-rows"
              dataSource={dataSource}
              columns={columns}
              pagination={{ pageSize: 5 }}
            />
          </div>
        </div>
        <div>
          <Link
            to="/service/addService"
            style={{
              width: 80,
              height: 94,
              backgroundColor: "#FFF2E7",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <img src={updateIcon} />
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
          <Link
            to="/service"
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
    </div>
  );
};

export default InforService;
