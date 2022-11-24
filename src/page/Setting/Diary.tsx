import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import { Link } from "react-router-dom";
import { RightOutlined, SearchOutlined } from "@ant-design/icons";
import Calendar from "../GiveNumber/Calendar";
import { Table } from "antd";

const Diary = () => {
  const [diary, setDiary] = useState<any>([]);
  const [filter, setFilter] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const getData = async () => {
    setLoading(true);
    const querySnapshot = await getDocs(collection(db, "diary"));
    querySnapshot.forEach((doc) => {
      setDiary(doc.data().data);
      setFilter(doc.data().data);
      setLoading(false);
    });
  };
  useEffect(() => {
    getData();
  }, []);
  const columns = [
    {
      title: "Tên đăng nhập",
      dataIndex: "username",
      key: "username",
      width: 200,
    },
    {
      title: "Thời gian tác động",
      dataIndex: "time",
      key: "time",
      width: 200,
      render: (_: any, { time }: any) => (
        <p>
          {time.toDate().toLocaleTimeString("en-US")} -{" "}
          {new Date(time.seconds * 1000).toLocaleDateString("en-US")}
        </p>
      ),
    },
    {
      title: "IP thực hiện",
      dataIndex: "IP",
      key: "IP",
      width: 200,
    },
    {
      title: "Thao tác thực hiện",
      dataIndex: "action",
      key: "action",
      width: 400,
    },
  ];
  const dataSource = filter;
  const requestSearch = (searchedVal: any) => {
    const filteredRows = filter.filter((row: any) => {
      return row.username
        .toString()
        .toLowerCase()
        .includes(searchedVal.toString().toLowerCase());
    });
    if (searchedVal.length < 1) {
      setFilter(diary);
    } else {
      setFilter(filteredRows);
    }
  };
  return (
    <div
      style={{
        width: "100%",
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
        <Link to="/setting/diary">
          <h3 style={{ marginBottom: 0, color: "#7E7D88" }}>
            Cài đặt hệ thống
          </h3>
        </Link>
        <RightOutlined style={{ marginRight: 5, marginLeft: 5 }} />
        <Link to="/setting/diary">
          <h3 style={{ marginBottom: 0, color: "#FF7506" }}>
            Nhật kí hoạt động
          </h3>
        </Link>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            marginTop: 70,
            marginBottom: 10,
            justifyContent: "space-between",
          }}
        >
          {" "}
          <Calendar />
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
        </div>
      </div>
    </div>
  );
};

export default Diary;
