import React from "react";
import ReactDOM from "react-dom";

import { store } from "./store/store";
import { Provider } from "react-redux";

import App from "./App";

import "./styles/index.css";

const rootView = document.getElementById("root");

if (rootView) {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    rootView,
  );
}
