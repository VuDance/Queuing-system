import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { Table } from "antd";
import { Link } from "react-router-dom";
import blueDot from "../../assets/processing.svg";
import silverDot from "../../assets/empty.svg";
import redDot from "../../assets/NotActiDot.svg";

const Tableservice = ({ filterTable, filterStatus, root }: any) => {
  const [devices, setDevices] = useState<any>([]);
  const [filter, setFilter] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getData = async () => {
    setLoading(true);
    const querySnapshot = await getDocs(collection(db, "givenumber"));
    await querySnapshot.forEach((doc) => {
      setDevices(doc.data().data);
      setFilter(doc.data().data);
    });
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    updatedTableStatus(filterStatus);
  }, [filterStatus]);
  useEffect(() => {
    updatedTableService(filterTable);
  }, [filterTable]);
  useEffect(() => {
    updatedRoot(root);
  }, [root]);

  const columns = [
    {
      title: "STT",
      dataIndex: "stt",
      key: "stt",
      width: 100,
    },
    {
      title: "Tên khách hàng",
      dataIndex: "name",
      key: "name",
      width: 180,
    },
    {
      title: "Tên dịch vụ",
      dataIndex: "service",
      key: "service",
      width: 200,
    },
    {
      title: "Thời gian cấp",
      dataIndex: "timeStart",
      key: "timeStart",
      width: 260,
      render: (_: any, { timeStart }: any) => (
        <p>
          {timeStart.toDate().toLocaleTimeString("en-US")} -{" "}
          {new Date(timeStart.seconds * 1000).toLocaleDateString("en-US")}
        </p>
      ),
    },
    {
      title: "Hạn sử dụng",
      dataIndex: "timeEnd",
      key: "timeEnd",
      width: 260,
      render: (_: any, { timeEnd }: any) => (
        <p>
          {timeEnd.toDate().toLocaleTimeString("en-US")} -{" "}
          {new Date(timeEnd.seconds * 1000).toLocaleDateString("en-US")}
        </p>
      ),
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      width: 150,
      render: (_: any, { status }: any) => (
        <p style={{ margin: 0, display: "flex", alignItems: "center" }}>
          {status === "Đang chờ" && (
            <img src={blueDot} style={{ marginRight: 5 }} />
          )}
          {status === "Đã sử dụng" && (
            <img src={silverDot} style={{ marginRight: 5 }} />
          )}
          {status === "Bỏ qua" && (
            <img src={redDot} style={{ marginRight: 5 }} />
          )}
          {status}
        </p>
      ),
    },
    {
      title: "Nguồn cấp",
      dataIndex: "root",
      key: "root",
      width: 150,
    },
    {
      title: "",
      dataIndex: "",
      key: "",
      width: 100,
      render: (_: any, { stt }: any) => (
        <>
          <Link style={{ margin: 0 }} to={`inforgivenum/${stt}`}>
            Chi tiết
          </Link>
        </>
      ),
    },
  ];
  const updatedTableService = (filterTable: any) => {
    if (filterTable === "Tất cả") {
      return setFilter(devices);
    }
    const updatedList = devices.filter((x: any) => x.service === filterTable);
    return setFilter(updatedList);
  };
  const updatedTableStatus = (filterStatus: any) => {
    if (filterStatus === "Tất cả") {
      return setFilter(devices);
    }
    const updatedList = devices.filter((x: any) => x.status === filterStatus);
    return setFilter(updatedList);
  };
  const updatedRoot = (root: any) => {
    if (root === "Tất cả") {
      return setFilter(devices);
    }
    const updatedList = devices.filter((x: any) => x.root === root);
    return setFilter(updatedList);
  };
  const dataSource = filter;
  return (
    <div>
      <Table
        className="table-striped-rows"
        dataSource={dataSource}
        columns={columns}
        pagination={{ pageSize: 6 }}
        style={{ width: 1000 }}
        loading={loading}
      />
    </div>
  );
};

export default Tableservice;
