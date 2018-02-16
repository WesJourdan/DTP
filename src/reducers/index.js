import { combineReducers } from "redux";
import StepsReducer from "./reducer-steps";
import NumberOfStepsReducer from "./reducer_numberOfSteps";

const rootReducer = combineReducers({
  steps: StepsReducer,
  numberOfSteps: NumberOfStepsReducer
});

export default rootReducer;
