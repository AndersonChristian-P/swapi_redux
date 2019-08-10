import { createStore } from "redux"

import swapiReducer from "./swapiReducer"

const store = createStore(swapiReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store