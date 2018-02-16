import {SET_STEPS} from "../actions";

export default function(state = 0, action) {

  switch (action.type) {
    case SET_STEPS:
      return action.payload
    default:
      return state;
  }
}
