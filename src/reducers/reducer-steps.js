import _ from "lodash";
import {FETCH_IMAGE} from "../actions";
import {FETCH_CAPTION} from "../actions";
import {INITIAL_SEARCH} from "../actions";
import {RESET_GAME} from "../actions";

export default function(state = [], action) {

  switch (action.type) {

    case INITIAL_SEARCH:
      return [...state, {text: action.payload, type: "caption"}]

    case FETCH_IMAGE:
      if (!action.payload.data) {
        window.alert("We're sorry, we can't find an image that matches your search. The game will be reset.")
        return [];
      }
      let imageArray = action.payload.data.items
      for (let i = 0; i < imageArray.length; i++ ) {
        let image = imageArray[i];
        if (image.mime == "image/jpeg") {
          let newSteps = [...state, {url: image.link, type: "image"}]
          return newSteps;
        }
      };

    case FETCH_CAPTION:
      if (action.payload instanceof Error) {
        window.alert("We're sorry, the APIs aren't playing nice. The game will be reset.")
        return [];
      }
      let caption = action.payload.data.description.captions[0].text;

      if (caption) {
        let newSteps = [...state, {text: caption, type: "caption"}]
        return newSteps;
      }

    case RESET_GAME:
      return [];

    default:
      return state;
  }
}
