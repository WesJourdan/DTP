import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise";
import reducers from "./reducers";
import GameBoard from "./components/game-board";
import SearchBar from "./components/search-bar";
import 'bootstrap/dist/css/bootstrap.css';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const App = () => {
  return  (
    <Provider store={createStoreWithMiddleware(reducers)}>
      <SearchBar />
      <GameBoard />
    </Provider>
  );
}


ReactDOM.render(<App />, document.getElementById('root'));
