import { Table, Tag } from "antd";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import redDot from "../../assets/NotActiDot.svg";
import greenDot from "../../assets/actiDot.svg";
import "./Device.css";
import Paragraph from "antd/lib/typography/Paragraph";
import InputFilter from "../../component/InputFiter/InputFilter";
import addIcon from "../../assets/add-square.svg";
import { Link, useParams } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";

const Device = () => {
  const [devices, setDevices] = useState<any>([]);
  const [filter, setFilter] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const getData = async () => {
    setLoading(true);
    const querySnapshot = await getDocs(collection(db, "device"));
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
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
      title: "Mã thiết bị",
      dataIndex: "deviceId",
      key: "deviceId",
      width: 100,
    },
    {
      title: "Tên thiết bị",
      dataIndex: "name",
      key: "name",
      width: 100,
    },
    {
      title: "Địa chỉ IP",
      dataIndex: "IP",
      key: "IP",
    },
    {
      title: "Trạng thái hoạt động",
      dataIndex: "activity",
      key: "activity",
      width: 150,
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
      title: "Trạng thái kết nối",
      dataIndex: "connect",
      key: "connect",
      width: 150,
      render: (_: any, { connect }: any) => (
        <>
          <p style={{ margin: 0 }} key={connect}>
            {connect ? (
              <p style={{ margin: 0, display: "flex", alignItems: "center" }}>
                <img src={greenDot} style={{ marginRight: 5 }} />
                Đang kết nối
              </p>
            ) : (
              <p style={{ margin: 0, display: "flex", alignItems: "center" }}>
                <img src={redDot} style={{ marginRight: 5 }} />
                Mất kết nối
              </p>
            )}
          </p>
        </>
      ),
    },
    {
      title: "Dịch vụ sủ dụng",
      dataIndex: "translation",
      key: "translation",
      width: 150,
      render: (_: any, { translation }: any) => (
        <>
          <Paragraph
            style={{ margin: 0, width: 150 }}
            ellipsis={{ rows: 2, expandable: true, symbol: "Xem thêm" }}
          >
            {translation}
          </Paragraph>
        </>
      ),
    },
    {
      title: "",
      dataIndex: "",
      key: "",
      render: (_: any, { nameUser }: any) => (
        <>
          <Link style={{ margin: 0, width: 150 }} to={`infor/${nameUser}`}>
            Chi tiết
          </Link>
        </>
      ),
    },
    {
      title: "",
      dataIndex: "",
      key: "",
      render: (_: any, { nameUser }: any) => (
        <>
          <Link style={{ margin: 0, width: 150 }} to={`update/${nameUser}`}>
            Cập nhật
          </Link>
        </>
      ),
    },
  ];
  const dataSource = filter;
  const updatedTableActi = (item: any) => {
    if (item === "Tất cả") {
      return setFilter(devices);
    }
    const updatedList = devices.filter((x: any) => x.activity === item);
    return setFilter(updatedList);
  };
  const updatedTableCon = (item: any) => {
    if (item === "Tất cả") {
      return setFilter(devices);
    }
    const updatedList = devices.filter((x: any) => x.connect === item);
    return setFilter(updatedList);
  };
  const requestSearch = (searchedVal: any) => {
    const filteredRows = filter.filter((row: any) => {
      return row.deviceId
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
      <h3
        className="path"
        style={{
          top: 20,
          left: 0,
          marginBottom: 0,
          color: "#7E7D88",
        }}
      >
        Thiết bị
      </h3>

      <div>
        <h2 style={{ color: "#FF7506", marginTop: 5 }}>Danh sách thiết bị</h2>
        <div
          style={{
            display: "flex",
            marginTop: 10,
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex" }}>
            <InputFilter active={true} updatedTable={updatedTableActi} />
            <InputFilter updatedTable={updatedTableCon} />
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
            to="add"
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
              Thêm thiết bị
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Device;
