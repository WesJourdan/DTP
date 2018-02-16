import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise";
import reducers from "./reducers";
import rootReducer from "./reducers";
import thunk from 'redux-thunk';

import GameBoard from "./components/game-board";
import SearchBar from "./components/search-bar";
import 'bootstrap/dist/css/bootstrap.css';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const store = createStoreWithMiddleware(reducers);

// const store = createStore(
//   rootReducer,
//   applyMiddleware(thunk)
// );

const App = () => {
  return  (
    <div className="container">
      <SearchBar />
      {/* <GameBoard /> */}
    </div>
  );
}


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
