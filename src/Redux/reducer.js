import { combineReducers } from "redux";
import { authReducer } from "./Auth/auth.reducer";
import { DataReducer } from "./Data/data.reducer";

export const reducer = combineReducers({
  user: DataReducer,
  auth: authReducer,
});
