import { combineReducers } from "redux";
import StepsReducer from "./reducer-steps";

const rootReducer = combineReducers({
  steps: StepsReducer
});

export default rootReducer;
