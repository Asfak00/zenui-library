import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="dark:bg-[#060024]">
        <App />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
