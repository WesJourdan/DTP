import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise";
import reducers from "./reducers";
import GameBoard from "./components/game-board";
import 'bootstrap/dist/css/bootstrap.css';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const App = () => {
  return  <GameBoard />
  // (
  //   // <Provider store={createStoreWithMiddleware(reducers)}>
  //     {/* <SearchBar /> */}
  //
  //   {/* </Provider> */}
  // );
}


ReactDOM.render(<App />, document.getElementById('root'));
