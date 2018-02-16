import _ from "lodash";
import {FETCH_IMAGE} from "../actions";
import {FETCH_CAPTION} from "../actions";
import {INITIAL_SEARCH} from "../actions";
import {RESET_GAME} from "../actions";

export default function(state = [], action) {

  switch (action.type) {
    case INITIAL_SEARCH:
    console.log(action)
      return [...state, {text: action.payload, type: "caption"}]
    case FETCH_IMAGE:
      let imageArray = action.payload.data.items
      for (let i = 0; i < imageArray.length; i++ ) {
        console.log("in loop");
        let image = imageArray[i];
        if (image.mime == "image/jpeg") {
          let newSteps = [...state, {url: image.link, type: "image"}]
          console.log(newSteps);
          return newSteps;
        }
      };
    case FETCH_CAPTION:
      let caption = action.payload.data.description.captions[0].text;
      console.log(caption);
      if (caption) {
        let newSteps = [...state, {text: caption, type: "caption"}]
        console.log(newSteps);
        return newSteps;
      }
    case RESET_GAME:
      return [];
    default:
      return state;
  }
}
