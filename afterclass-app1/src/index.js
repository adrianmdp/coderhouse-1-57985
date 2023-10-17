import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCObrbMolcDHw9WXTGLSRECFgeh1U8sx1Y",
  authDomain: "coderhouse-57985.firebaseapp.com",
  projectId: "coderhouse-57985",
  storageBucket: "coderhouse-57985.appspot.com",
  messagingSenderId: "809825079357",
  appId: "1:809825079357:web:181c5f32d1206d713ada54",
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
