import React, { useEffect, useState } from "react";

import { Spin } from "antd";
import { auth, db, upload } from "../../config/firebase";
import "./Home.css";
import { collection, getDocs } from "firebase/firestore";

const Home = () => {
  const [user, setUser] = useState<any>({});
  const [photo, setPhoto] = useState("");
  const [loading, setLoading] = useState(false);
  const [disable, setDisable] = useState(true);
  const [photoURL, setPhotoURL] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
  );
  const handleChange = (e: any) => {
    e.preventDefault();
    setPhoto(e.target.files[0]);
    setDisable(false);
    setLoading(true);
  };
  const handleAdd = () => {
    upload(photo, auth.currentUser, setLoading);
    setDisable(true);
  };

  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      setUser(doc.data());
      setPhotoURL(doc.data().photoURL);
    });
  };
  useEffect(() => {
    getData();
    if (auth.currentUser?.photoURL) {
      setPhotoURL(auth.currentUser.photoURL);
    }
    console.log(auth.currentUser?.photoURL);
  }, [loading]);
  return (
    <div>
      <form className="userData">
        <div className="imageUser">
          <input
            required
            style={{ display: "none" }}
            type="file"
            id="file"
            onChange={handleChange}
          />
          {!loading ? (
            <label htmlFor="file">
              <img src={photoURL} alt="" />
            </label>
          ) : (
            <Spin />
          )}

          {disable ? (
            <h3>{user?.name}</h3>
          ) : (
            <h3 onClick={handleAdd} className="uploadBtn">
              {" "}
              Upload
            </h3>
          )}
        </div>
        <div className="inforUser">
          <div className="inforUserDesc">
            <p onClick={handleAdd}>Tên người dùng</p>
            <input value={user?.name} />
          </div>
          <div className="inforUserDesc">
            <p>Tên đăng nhập</p>
            <input value={user?.userName} />
          </div>
          <div className="inforUserDesc">
            <p>Số điện thoại</p>
            <input value={user?.phoneNum} />
          </div>
          <div className="inforUserDesc">
            <p>Mật khẩu</p>
            <input value={user?.password} />
          </div>
          <div className="inforUserDesc">
            <p>Email</p>
            <input value={user?.email} />
          </div>
          <div className="inforUserDesc">
            <p>Vai trò</p>
            <input value={user?.job} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Home;
