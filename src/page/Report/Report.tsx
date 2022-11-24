import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RightOutlined, CaretDownOutlined } from "@ant-design/icons";
import Calendar from "../GiveNumber/Calendar";
import { Table } from "antd";
import blueDot from "../../assets/processing.svg";
import silverDot from "../../assets/empty.svg";
import arrow from "../../assets/arrow-right.svg";
import redDot from "../../assets/NotActiDot.svg";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import download from "../../assets/Vector.svg";

const Report = () => {
  const [inputContent, setInputContent] = useState("Tất cả");
  const [stt, setStt] = useState("Tất cả");
  const [report, setReport] = useState<any>([]);
  const [filter, setFilter] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const getData = async () => {
    setLoading(true);
    const querySnapshot = await getDocs(collection(db, "givenumber"));
    await querySnapshot.forEach((doc) => {
      setReport(doc.data().data);
      setFilter(doc.data().data);
    });
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);
  const update1 = (name: string) => {
    if (name === "Tất cả") {
      return setFilter(report);
    }
    const updatedList = report.filter((x: any) => x.stt === name);
    return setFilter(updatedList);
  };
  const update2 = (name: string) => {
    if (name === "Tất cả") {
      return setFilter(report);
    }
    const updatedList = report.filter((x: any) => x.service === name);
    return setFilter(updatedList);
  };
  const update3 = (name: string) => {
    if (name === "Tất cả") {
      return setFilter(report);
    }
    const updatedList = report.filter((x: any) => x.status === name);
    return setFilter(updatedList);
  };
  const update4 = (name: string) => {
    if (name === "Tất cả") {
      return setFilter(report);
    }
    const updatedList = report.filter((x: any) => x.root === name);
    return setFilter(updatedList);
  };
  const columns = [
    {
      title: () => {
        return (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>Số thứ tự</p>
            <div className="dropdownFilter" style={{ width: 10 }}>
              <img src={arrow} />
              <div className="contentFilter" style={{ right: -35 }}>
                {report.map((i: any) => (
                  <p onClick={() => update1(i.stt)}>{i.stt}</p>
                ))}
              </div>
            </div>
          </div>
        );
      },
      dataIndex: "stt",
      key: "stt",
      width: 150,
    },
    {
      title: () => {
        return (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>Tên dịch vụ</p>
            <div className="dropdownFilter" style={{ width: 10 }}>
              <img src={arrow} />
              <div className="contentFilter" style={{ right: -35 }}>
                {report.map((i: any) => (
                  <p onClick={() => update2(i.service)}>{i.service}</p>
                ))}
              </div>
            </div>
          </div>
        );
      },
      dataIndex: "service",
      key: "service",
      width: 200,
    },
    {
      title: () => {
        return (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>Thời gian cấp</p>
            <div className="dropdownFilter" style={{ width: 10 }}>
              <img src={arrow} />
              <div className="contentFilter" style={{ right: -35, width: 200 }}>
                {report.map((i: any) => (
                  <p onClick={() => update1("")}>
                    {i.timeStart.toDate().toLocaleTimeString("en-US")}-
                    {new Date(i.timeStart.seconds * 1000).toLocaleDateString(
                      "en-US"
                    )}
                  </p>
                ))}
              </div>
            </div>
          </div>
        );
      },
      dataIndex: "IP",
      key: "IP",
      width: 200,
      render: (_: any, { timeStart }: any) => (
        <p>
          {timeStart.toDate().toLocaleTimeString("en-US")} -{" "}
          {new Date(timeStart.seconds * 1000).toLocaleDateString("en-US")}
        </p>
      ),
    },

    {
      title: () => {
        return (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>Tình trạng</p>
            <div className="dropdownFilter" style={{ width: 10 }}>
              <img src={arrow} />
              <div className="contentFilter" style={{ right: -35 }}>
                <p onClick={() => update3("Đang chờ")}>Đang chờ</p>
                <p onClick={() => update3("Đã sử dụng")}>Đã sử dụng</p>
                <p onClick={() => update3("Bỏ qua")}>Bỏ qua</p>
              </div>
            </div>
          </div>
        );
      },
      dataIndex: "status",
      key: "status",
      width: 200,
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
      title: () => {
        return (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>Nguồn cấp</p>
            <div className="dropdownFilter" style={{ width: 10 }}>
              <img src={arrow} />
              <div className="contentFilter" style={{ right: -5 }}>
                <p onClick={() => update4("Kios")}>{"Kios"}</p>
                <p onClick={() => update4("Hệ thống")}>{"Hệ thống"}</p>
              </div>
            </div>
          </div>
        );
      },
      dataIndex: "root",
      key: "root",
      width: 200,
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
        <Link to="/report">
          <h3 style={{ marginBottom: 0, color: "#7E7D88" }}>Báo cáo</h3>
        </Link>
        <RightOutlined style={{ marginRight: 5, marginLeft: 5 }} />
        <Link to="/report">
          <h3 style={{ marginBottom: 0, color: "#FF7506" }}>Lập báo cáo</h3>
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
            <img src={download} />
            <p
              style={{
                margin: 0,
                textAlign: "center",
                color: "#FF7506",
                cursor: "pointer",
              }}
            >
              Tải về
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Report;
