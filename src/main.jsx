import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ContextApi from "./context-api/ContextApi";
import FormDatas from "./context-api/FormDatas";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextApi>
      <FormDatas>
        <App />
      </FormDatas>
    </ContextApi>
  </React.StrictMode>
);
