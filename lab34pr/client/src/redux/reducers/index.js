import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { filterReducer } from "./filterReducer";
import { jogReducer } from "./jogReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  jogs: jogReducer,
  filter: filterReducer,
});

export default rootReducer;
