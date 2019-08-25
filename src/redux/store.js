import { createStore, applyMiddleware, compose } from "redux"
import promiseMiddleware from "redux-promise-middleware"

import swapiReducer from "./swapiReducer"

// provide ability to use redux devtools with multiple reducers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = composeEnhancers(applyMiddleware(promiseMiddleware))

const store = createStore(swapiReducer, enhancer)

export default store


// const store = createStore(swapiReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
