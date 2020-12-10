import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const middleware = [thunk];

let store;

export function initializeStore(initialState = {}) {
  //disable redux devtools in production
  store =
    process.env.NODE_ENV === "production"
      ? createStore(rootReducer, initialState, applyMiddleware(...middleware))
      : createStore(
          rootReducer,
          initialState,
          composeWithDevTools(applyMiddleware(...middleware))
        );
  return store;
}

export { store };

export default initializeStore;
