import React, { useEffect } from "react";
import "./App.css";
import Login from "./page/Login/Login";
import { BrowserRouter, Routes, Link, Navigate, Route } from "react-router-dom";
import Home from "./page/Home/Home";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux";
import firebase from "./config/firebase";
import { getUserById } from "./redux/actions/authActions";
import Layout from "./component/Layout/Layout";
import Dashboard from "./page/Dashboard/Dashboard";
import Device from "./page/Device/Device";
import InforDevice from "./page/Device/InforDevice";
import Update from "./page/Device/Update";
import Add from "./page/Device/Add";
import Service from "./page/Service/Service";
import AddService from "./page/Service/AddService";
import InforService from "./page/Service/InforService";
import UpdateService from "./page/Service/UpdateService";
import GiveNumber from "./page/GiveNumber/GiveNumber";
import InforGiveNum from "./page/GiveNumber/InforGiveNum";
import Report from "./page/Report/Report";
import NewNum from "./page/GiveNumber/NewNum";
import Job from "./page/Setting/Job";
import UpdateJob from "./page/Setting/UpdateJob";
import AddJob from "./page/Setting/AddJob";
import Account from "./page/Account/Account";
import AddAccounts from "./page/Account/AddAccounts";
import Diary from "./page/Setting/Diary";

function App() {
  const dispatch = useDispatch<any>();
  const { authenticated } = useSelector((state: RootState) => state.auth);
  const { loading } = useSelector((state: RootState) => state.auth);

  const ProtectedRoute = ({ children }: any) => {
    if (!authenticated) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  useEffect(() => {
    console.log(authenticated);
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
        <Route path="/">
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Layout>
                  <Dashboard />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/device"
            element={
              <ProtectedRoute>
                <Layout>
                  <Device />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/device/infor/:id"
            element={
              <ProtectedRoute>
                <Layout>
                  <InforDevice />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/device/update/:id"
            element={
              <ProtectedRoute>
                <Layout>
                  <Update />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/device/add"
            element={
              <ProtectedRoute>
                <Layout>
                  <Add />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/service"
            element={
              <ProtectedRoute>
                <Layout>
                  <Service />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/service/addService"
            element={
              <ProtectedRoute>
                <Layout>
                  <AddService />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/service/inforService/:id"
            element={
              <ProtectedRoute>
                <Layout>
                  <InforService />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/service/update/:id"
            element={
              <ProtectedRoute>
                <Layout>
                  <UpdateService />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/givenumber"
            element={
              <ProtectedRoute>
                <Layout>
                  <GiveNumber />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/givenumber/add"
            element={
              <ProtectedRoute>
                <Layout>
                  <NewNum />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/report"
            element={
              <ProtectedRoute>
                <Layout>
                  <Report />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/givenumber/inforgivenum/:id"
            element={
              <ProtectedRoute>
                <Layout>
                  <InforGiveNum />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/setting/job"
            element={
              <ProtectedRoute>
                <Layout>
                  <Job />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/setting/job/update/:id"
            element={
              <ProtectedRoute>
                <Layout>
                  <UpdateJob />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/setting/job/addJob"
            element={
              <ProtectedRoute>
                <Layout>
                  <AddJob />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/setting/accounts"
            element={
              <ProtectedRoute>
                <Layout>
                  <Account />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/setting/accounts/addaccounts"
            element={
              <ProtectedRoute>
                <Layout>
                  <AddAccounts />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/setting/diary"
            element={
              <ProtectedRoute>
                <Layout>
                  <Diary />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            index
            element={
              <ProtectedRoute>
                <Layout>
                  <Home />
                </Layout>
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
