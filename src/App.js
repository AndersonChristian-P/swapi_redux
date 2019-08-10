import React from 'react';
import { Provider } from "react-redux"

import store from "./redux/store"

import './App.css';

const App = () => {
  return (
    <Provider store={store} >
      <div className="App">
        Jello World!
      </div>
    </Provider>
  );
}

export default App;
