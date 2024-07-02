import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App2";
import "./style/index.scss";
import { FilterProvider } from "./context/FilterContext/FilterProvider";
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
