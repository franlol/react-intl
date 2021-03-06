import { combineReducers } from "redux";
import appReducer from "./app/app.reducer";

const reducers = combineReducers({
  app: appReducer,
});

export default reducers;
