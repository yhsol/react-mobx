import React, { useContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import { StoresProvider } from "./burger/StoresProvider";
import { StoresProvider } from "./hacker-news/utils/HnStoresProvider";
import { RootStoresProvider } from "./RootStoresProvider";

ReactDOM.render(
  <RootStoresProvider>
    <App />
  </RootStoresProvider>,
  document.getElementById("root"),
);
serviceWorker.unregister();
