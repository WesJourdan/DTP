import _ from "lodash";
import {FETCH_IMAGE} from "../actions";


export default function(state = {steps: []}, action) {
  switch (action.type) {
    case FETCH_IMAGE:
      let imageArray = action.payload.data.items

      for (let i = 0; i < imageArray.length; i++ ) {
        console.log("in loop");
        let image = imageArray[i];
        if (image.mime == "image/jpeg") {
          console.log(image.link);
          //figure out if this is exiting the loop when the return statement executes (I think it is...)
          debugger;
          return { ...state.steps, url: image.link, type: "image"}
        }
      };
    default:
      return state;
  }
}
