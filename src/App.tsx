
import './App.css';
import {useRoutes} from "react-router-dom";
import {Route} from "./Route/Route";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import React from 'react';

function App() {
  return (
      <Provider store={store}>
        {useRoutes(Route)}
      </Provider>
  );
}

export default App;
