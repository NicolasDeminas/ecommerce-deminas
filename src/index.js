import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAeqeXv5_u9wXgCNLsMaI1iSDu8i3yTPso",
  authDomain: "coderhouse-ecommerce-4688f.firebaseapp.com",
  projectId: "coderhouse-ecommerce-4688f",
  storageBucket: "coderhouse-ecommerce-4688f.appspot.com",
  messagingSenderId: "90085243311",
  appId: "1:90085243311:web:fc603d01fb7d745c21175a",
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
