import { combineReducers } from "redux";
import ImagesReducer from "./reducer-images";
import CaptionsReducer from "./reducer-captions";

const rootReducer = combineReducers({
  caption: CaptionsReducer,
  image: ImagesReducer,
});

export default rootReducer;
