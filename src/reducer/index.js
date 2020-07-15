import { combineReducers } from "redux";
import fileReducer from "./fileReducer";
import loginReducer from "./loginReducer";
import searchReducer from "./searchReducer";

const rootReducer = combineReducers({
  fileReducer,
  loginReducer,
  searchReducer,
});

export default rootReducer;
