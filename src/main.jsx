// import React from 'react';
import ReactDOM from "react-dom/client";
import App1 from "./App1.jsx";
import { BrowserRouter } from "react-router-dom";
import App2 from "./App2.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RtkProject from "./RtkProject.jsx";

// import './index.css

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ToastContainer />
    {/* <App1 /> */}
    {/* <App2 /> */}
    <RtkProject />
  </BrowserRouter>
);
