import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RightOutlined, SearchOutlined } from "@ant-design/icons";
import addIcon from "../../assets/add-square.svg";
import { Table } from "antd";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import redDot from "../../assets/NotActiDot.svg";
import greenDot from "../../assets/actiDot.svg";
import DropdownAccounts from "./DropdownAccounts";

const Account = () => {
  const [accounts, setAccounts] = useState<any>([]);
  const [job, setJob] = useState("");
  const [filter, setFilter] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const getData = async () => {
    setLoading(true);
    const querySnapshot = await getDocs(collection(db, "account"));
    querySnapshot.forEach((doc) => {
      setAccounts(doc.data().data);
      setFilter(doc.data().data);
      setLoading(false);
    });
  };
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    updatedJob(job);
  }, [job]);

  const columns = [
    {
      title: "Tên đăng nhập",
      dataIndex: "username",
      key: "username",
      width: 150,
    },
    {
      title: "Họ và tên",
      dataIndex: "name",
      key: "name",
      width: 150,
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",
      key: "phone",
      width: 150,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: 150,
    },
    {
      title: "Vai trò",
      dataIndex: "job",
      key: "job",
      width: 150,
    },
    {
      title: "Trạng thái hoạt động",
      dataIndex: "status",
      key: "status",
      width: 200,
      render: (_: any, { status }: any) => (
        <>
          <p style={{ margin: 0 }} key={status}>
            {status ? (
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
      render: (_: any) => (
        <>
          <Link style={{ margin: 0 }} to={`addaccounts`}>
            Cập nhật
          </Link>
        </>
      ),
    },
  ];
  const updatedJob = (name: any) => {
    if (name === "Tất cả") {
      return setFilter(accounts);
    }
    const updatedList = accounts.filter((x: any) => x.job === name);
    return setFilter(updatedList);
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
        <Link to="/setting/accounts">
          <h3 style={{ marginBottom: 0, color: "#7E7D88" }}>
            Cài đặt hệ thống
          </h3>
        </Link>
        <RightOutlined style={{ marginRight: 5, marginLeft: 5 }} />
        <Link to="/setting/accounts">
          <h3 style={{ marginBottom: 0, color: "#FF7506" }}>
            Quản lí tài khoản
          </h3>
        </Link>
      </div>
      <div style={{ marginTop: 70 }}>
        <h2 style={{ color: "#FF7506", marginBottom: 10 }}>
          Danh sách vai trò
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <DropdownAccounts setJob={setJob} />
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
            to="addaccounts"
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
              Thêm tài khoản
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Account;
