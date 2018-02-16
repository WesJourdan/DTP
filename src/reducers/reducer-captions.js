import _ from "lodash";
import {FETCH_CAPTION} from "../actions";


export default function(state = {steps: []}, action) {
  debugger;
  switch (action.type) {
    case FETCH_CAPTION:
      console.log(action.payload);
    default:
      return state;
  }
}
