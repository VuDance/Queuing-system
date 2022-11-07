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

function App() {
  const dispatch = useDispatch<any>();
  const { authenticated } = useSelector((state: RootState) => state.auth);
  const { loading } = useSelector((state: RootState) => state.auth);

  const ProtectedRoute = ({ children }: any) => {
    if (!authenticated) {
      return <Navigate to="login" />;
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
            path="/user"
            element={
              <ProtectedRoute>
                <Layout>
                  <Home />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            index
            element={
              <ProtectedRoute>
                <Layout>
                  <Dashboard />
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
