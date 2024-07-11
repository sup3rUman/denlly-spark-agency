// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtCWtCw_XCyJpJZ_p1OIt3U8-aItUCbgc",
  authDomain: "px-0-d6b35.firebaseapp.com",
  projectId: "px-0-d6b35",
  storageBucket: "px-0-d6b35.appspot.com",
  messagingSenderId: "979633370635",
  appId: "1:979633370635:web:edd26cf363c5aa1e78790e",
  measurementId: "G-93PVJXQLCX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);