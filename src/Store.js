import reducers from "./reducers/reducers";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
export default store;
