import { combineReducers } from "redux";
import { authReducer } from "./Auth/auth.reducer";

export const reducer = combineReducers({ auth: authReducer });
