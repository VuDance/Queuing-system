// Import the functions you need from the SDKs you need
import { getAuth, initializeAuth, updateProfile } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";
import { doc, getFirestore, setDoc, updateDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
firebase.initializeApp({
  apiKey: "AIzaSyAu1l5HlCj9ZTb_7mzAGzwU5AAqHaPJpHY",
  authDomain: "queuing-d6bb5.firebaseapp.com",
  projectId: "queuing-d6bb5",
  storageBucket: "queuing-d6bb5.appspot.com",
  messagingSenderId: "376264558661",
  appId: "1:376264558661:web:e4e3df21f8decf2371bb2c",
});

// Initialize Firebase
export default firebase;
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

export const upload = async (file: any, currentUser: any, setLoading: any) => {
  try {
    const date = new Date().getTime();
    const storageRef = ref(storage, `${currentUser.uid + date}`);

    await uploadBytesResumable(storageRef, file).then(() => {
      getDownloadURL(storageRef).then(async (downloadURL) => {
        try {
          //Update profile
          await updateProfile(currentUser, {
            photoURL: downloadURL,
          });
          await updateDoc(doc(db, "users", currentUser.uid), {
            uid: currentUser.uid,
            photoURL: downloadURL,
          });
          setLoading(false);
        } catch (err) {
          console.log(err);
        }
      });
    });
  } catch (err) {}
};
