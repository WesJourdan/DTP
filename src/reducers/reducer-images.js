import _ from "lodash";
import {FETCH_IMAGE} from "../actions";


export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_IMAGE:
    debugger;
      return { ...state, [action.payload.data.id]: action.payload.data };
    default:
      return state;
  }
}
