import { createStore, applyMiddleware, combineReducers, compose } from "redux"
import promiseMiddleware from "redux-promise-middleware"

import starWarsReducer from './starWarsReducer'

const reducer = combineReducers({
  starwars: starWarsReducer
})

// provide ability to use redux devtools with multiple reducers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = composeEnhancers(applyMiddleware(promiseMiddleware))

const store = createStore(reducer, enhancer)

export default store







// const store = createStore(swapiReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
