import { combineReducers } from "redux";
import { applyMiddleware, createStore } from "redux";
import { DataNumberReducer } from "../Reducers/DataNumberReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
 DataNumberReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));