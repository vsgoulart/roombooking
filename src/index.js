"use strict";

import "../node_modules/normalize.css/normalize.css";
import "./styles/main.scss";

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./components/App";

import configureStore from "./stores/configureStore";

const store = configureStore();

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
