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
          let newSteps = [...state.steps, {url: image.link, type: "image"}]
          console.log({...state, steps: newSteps});
          return {...state, steps: newSteps};
        }
      };
    default:
      return state;
  }
}
