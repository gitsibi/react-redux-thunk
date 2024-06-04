import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import appReducer from './Reducer'

const store=createStore(appReducer,applyMiddleware(thunk))

export default store