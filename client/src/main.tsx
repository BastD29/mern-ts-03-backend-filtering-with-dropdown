import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App3";
import "./style/index.scss";
import { FilterProvider } from "./context/FilterContext/FilterProvider2";
import { UserProvider } from "./context/UserContext/UserProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserProvider>
      <FilterProvider>
        <App />
      </FilterProvider>
    </UserProvider>
  </React.StrictMode>
);
