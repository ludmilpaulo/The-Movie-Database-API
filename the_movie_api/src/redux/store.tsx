import { createStore } from "redux";

import reducer from "./reducers/index";

export default function configureStore(initialState:any) {
  const store = createStore(reducer, initialState);
  return store;
}