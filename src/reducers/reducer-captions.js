import _ from "lodash";
import {FETCH_CAPTION} from "../actions";


export default function(state = {steps: []}, action) {

  switch (action.type) {
    case FETCH_CAPTION:

      let caption = action.payload.data.description.captions[0].text;
      console.log(caption);

        if (caption) {
          let newSteps = [...state.steps, {text: caption, stepType: "caption"}]
          console.log({...state, steps: newSteps});
          return {...state, steps: newSteps};
        }

    default:
      return state;
  }
}
