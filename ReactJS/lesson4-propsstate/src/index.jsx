import React from "react";
import ReactDOM from "react-dom/client";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
// import PropsApp from "./components/props-example/PropsApp";
// import StateApp from "./components/state-example/StateApp";
// import MapApp from "./components/map-example/MapApp";
import Login from "./components/login-example/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
);
