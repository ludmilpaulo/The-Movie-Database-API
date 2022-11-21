import { combineReducers } from "redux";
import favoriteReducer from "./favoriteReducer";

let reducers = combineReducers({
  favoriteReducer: favoriteReducer,
});

const rootReducer = (state:any, action:any) => {
  return reducers(state, action);
};

export default rootReducer;