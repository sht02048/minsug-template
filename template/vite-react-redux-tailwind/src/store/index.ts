import { combineReducers, configureStore } from "@reduxjs/toolkit";
import count from "../slice/count";
import logger from "redux-logger";

const reducer = combineReducers({ count });

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export { reducer };
export default store;
