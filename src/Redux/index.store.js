import { createStore, applyMiddleware, compose } from "redux";
import { reducer } from "./reducer";

const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const thunk = (store) => (next) => (action) => {
  if (typeof action === "function") {
    return action(store.dispatch, store.getState);
  }
  return next(action);
};

export const store = createStore(reducer, composer(applyMiddleware(thunk)));
