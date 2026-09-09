// NOTE: createStore is deprecated in Redux 5 in favour of Redux Toolkit.
// legacy_createStore is the same function without the console warning;
// migrating the reducers to RTK is a separate piece of work.
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";
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
