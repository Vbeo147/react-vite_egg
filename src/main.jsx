import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Count from "./components/Count";
import counterStore from "./counterStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={counterStore}>
    <Count />
  </Provider>
);
