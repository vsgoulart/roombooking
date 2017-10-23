"use strict";

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/";

export default preloadedState =>
  createStore(rootReducer, preloadedState, applyMiddleware(thunk));
