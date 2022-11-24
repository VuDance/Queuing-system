import { ThunkAction } from "redux-thunk";

import {
  AuthAction,
  SIGN_OUT,
  SignInData,
  SET_ERROR,
  SET_USER,
  User,
} from "../types";
import { RootState } from "..";
import firebase, { db } from "../../config/firebase";
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";

export const addDevice = ({
  deviceId,
  deviceType,
  name,
  nameUser,
  IP,
  password,
  translation,
  activity,
  connect,
}: any) => {
  const devices = doc(db, "device", "IEe73dqC3WGlVjApndCZ");
  return async (dispatch: any) => {
    try {
      await updateDoc(devices, {
        data: arrayUnion({
          deviceId,
          deviceType,
          name,
          nameUser,
          IP,
          password,
          translation,
          activity,
          connect,
        }),
      });
    } catch (err) {
      console.log(err);
    }
  };
};
export const addAccounts = ({
  name,
  username,
  phone,
  password,
  email,
  rePassword,
  job,
  status,
}: any) => {
  const account = doc(db, "account", "CtS9sBYBAnNEeeLjcxkX");
  return async (dispatch: any) => {
    try {
      await updateDoc(account, {
        data: arrayUnion({
          name,
          username,
          phone,
          password,
          email,
          rePassword,
          job,
          status,
        }),
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const addService = ({
  serviceID,
  name,
  detail,
  check1,
  check2,
  check3,
  check4,
  activity,
}: any) => {
  const devices = doc(db, "Service", "eYZ3lL6MrrSlvMmfYQdS");
  return async (dispatch: any) => {
    try {
      await updateDoc(devices, {
        data: arrayUnion({
          serviceID,
          name,
          detail,
          check1,
          check2,
          check3,
          check4,
          activity,
        }),
      });
    } catch (err) {
      console.log(err);
    }
  };
};
export const addJob = ({
  title,
  detail,
  check1,
  check2,
  check3,
  check4,
  check5,
  check6,
  check7,
  check8,
  user = "6",
}: any) => {
  const job = doc(db, "job", "50QeT8PHyFf2EFl9LaGC");
  return async (dispatch: any) => {
    try {
      await updateDoc(job, {
        data: arrayUnion({
          title,
          detail,
          check1,
          check2,
          check3,
          check4,
          check5,
          check6,
          check7,
          check8,
          user,
        }),
      });
    } catch (err) {
      console.log(err);
    }
  };
};
// Set error
export const setError = (
  msg: string
): ThunkAction<void, RootState, null, AuthAction> => {
  return (dispatch) => {
    dispatch({
      type: SET_ERROR,
      payload: msg,
    });
  };
};

export const getUserById = (
  id: string
): ThunkAction<void, RootState, null, AuthAction> => {
  return async (dispatch) => {
    try {
      const user = await firebase.firestore().collection("users").doc(id).get();
      if (user.exists) {
        const userData = user.data() as User;
        dispatch({
          type: SET_USER,
          payload: userData,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
};
