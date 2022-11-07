import React, { FormEvent, useState } from "react";
import logo from "../../assets/Logo_alta.png";
import "./Login.css";
import ImageLoginPage from "../../assets/ImageLoginPage.png";
import Button from "../../component/Button/Button";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setError } from "../../redux/actions/authActions";
import { RootState } from "../../redux";
import firebase from "../../config/firebase";
import errIcon from "../../assets/warning.svg";
import { SET_AUTH } from "../../redux/types";
import { Spin } from "antd";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const { error } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    console.log("e");
    if (error) {
      dispatch(setError(""));
    }
    setLoading(true);
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      dispatch({
        type: SET_AUTH,
      });
      setLoading(false);
      navigate("/");
    } catch (err) {
      console.log(err);
      setErr(true);
      dispatch(setError((err as Error).message));
      setLoading(false);
    }
  };

  return (
    <div className="loginPage">
      <section className="cooperation">
        <img src={logo} className="logoLogin"></img>
        <div className="form">
          <div className="username">
            <p className="title">Tên đăng nhập *</p>
            <input
              className={`input ${err ? "errInput" : ""}`}
              type="text"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              placeholder="Email address"
            ></input>
          </div>
          <div className="password">
            <p className="title">Mật khẩu *</p>
            <input
              className={`input ${err ? "errInput" : ""}`}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
              placeholder="Password"
            ></input>
          </div>
          {err === false ? (
            <div className="forgetPassword">Quên mật khẩu ?</div>
          ) : (
            err && (
              <div className="warning">
                <img src={errIcon} />
                <span>Sai mật khẩu hoặc tên đăng nhập</span>
              </div>
            )
          )}
        </div>
        <Button
          text={loading ? <Spin /> : "Đăng nhập"}
          onClick={submitHandler}
        />
        {err ? <div className="forgetPassword">Quên mật khẩu</div> : <></>}
      </section>
      <section className="imageLoginPage">
        <img src={ImageLoginPage} />
        <div className="textImage">
          <p>Hệ thống</p>
          <p
            style={{
              textTransform: "uppercase",
              fontWeight: 900,
              fontSize: 36,
            }}
          >
            Quản lí Xếp Hàng
          </p>
        </div>
      </section>
    </div>
  );
};

export default Login;
