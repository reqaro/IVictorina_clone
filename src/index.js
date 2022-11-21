import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.scss";
import App from "./App";
import { HashRouter as Router } from "react-router-dom";
// import { Provider } from "react-redux";
// import { store } from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Router>
      <App />
    </Router>
);
