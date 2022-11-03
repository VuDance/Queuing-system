import React, { useEffect } from "react";
import "./App.css";
import Login from "./page/Login/Login";
import { BrowserRouter, Routes, Link, Navigate, Route } from "react-router-dom";
import Home from "./page/Home/Home";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux";
import firebase from "./config/firebase";
import { getUserById } from "./redux/actions/authActions";

function App() {
  const dispatch = useDispatch<any>();
  const { loading } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        await dispatch(getUserById(user.uid));
      }
    });
    return () => {
      unsubscribe();
    };
  }, [dispatch]);
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
