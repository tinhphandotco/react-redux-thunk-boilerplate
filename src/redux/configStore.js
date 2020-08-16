import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import API from "api";
import store from "./stores";

const middleware = [
  thunk.withExtraArgument({
    API: API,
  })
]

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware)
  // other store enhancers if any
);

export default createStore(
  store,
  enhancer
);
