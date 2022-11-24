import React, { useEffect, useState } from "react";
import { RightOutlined, SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import addIcon from "../../assets/add-square.svg";
import { Table } from "antd";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";

const Job = () => {
  const [job, setJob] = useState<any>([]);
  const [filter, setFilter] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const getData = async () => {
    setLoading(true);
    const querySnapshot = await getDocs(collection(db, "job"));
    querySnapshot.forEach((doc) => {
      setJob(doc.data().data);
      setFilter(doc.data().data);
      setLoading(false);
    });
  };
  useEffect(() => {
    getData();
  }, []);
  const columns = [
    {
      title: "Tên vai trò",
      dataIndex: "title",
      key: "title",
      width: 200,
    },
    {
      title: "Số người dùng",
      dataIndex: "user",
      key: "user",
      width: 200,
    },
    {
      title: "Mô tả",
      dataIndex: "detail",
      key: "detail",
      width: 300,
    },
    {
      title: "",
      dataIndex: "",
      key: "",
      width: 200,
      render: (_: any, { title }: any) => (
        <>
          <Link style={{ margin: 0 }} to={`update/${title}`}>
            Cập nhật
          </Link>
        </>
      ),
    },
  ];
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
        <Link to="/setting/job">
          <h3 style={{ marginBottom: 0, color: "#7E7D88" }}>
            Cài đặt hệ thống
          </h3>
        </Link>
        <RightOutlined style={{ marginRight: 5, marginLeft: 5 }} />
        <Link to="/setting/job">
          <h3 style={{ marginBottom: 0, color: "#FF7506" }}>Quản lí vai trò</h3>
        </Link>
      </div>
      <div style={{ marginTop: 70 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <h2 style={{ color: "#FF7506", marginBottom: 20 }}>
            Danh sách vai trò
          </h2>
          <div
            style={{ marginRight: 100, marginBottom: 10, position: "relative" }}
          >
            <p style={{ fontWeight: 600, fontSize: 16, color: "#282739" }}>
              Từ khóa
            </p>
            <input className="inputSearch" placeholder="Nhập từ khóa" />
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
            to="addJob"
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
              Thêm vai trò
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
