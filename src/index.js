import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="*" element={<App />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
