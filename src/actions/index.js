import axios from "axios";
import {googleApiKey} from "../private/api-keys";
import {cx} from "../private/api-keys";
import {azureApiKey} from "../private/api-keys";

export const FETCH_IMAGE = "fetch_image";
export const FETCH_CAPTION = "fetch_caption"

const IMAGE_ROOT_URL = "https://www.googleapis.com/customsearch/v1?";
const CAPTION_ROOT_URL = `https://westus.api.cognitive.microsoft.com/vision/v1.0/analyze?visualFeatures=Description,Tags&subscription-key=${azureApiKey}`;

export function fetchImage(searchTerm) {
  const request = axios.get(`${IMAGE_ROOT_URL}key=${googleApiKey}&${cx}&q=${searchTerm}&searchType=image`);
  debugger;
  return {
    type: FETCH_IMAGE,
    payload: request
  };
}

export function fetchCaption(imageUrl) {
  const request = axios.post(CAPTION_ROOT_URL, {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })

}

export function handleNextStep(steps) {
  //check length of store's steps array. if array is filled (for now - length = 6), stop here.
  if (steps.length >= 6) {return};
  //get last element of store's steps array. if type = caption, call fetch image with step.text.
  let lastStep = steps[steps.length - 1];
  if (lastStep.type === 'caption') {
    store.dispatch(fetchCaption(lastStep.text));
  //else, it's an image. call fetch caption with step.url
  } else {
    store.dispatch(fetchImage(lastStep.url));
  }
}


//set handleNextStep to run whenever store's steps array is updated.
store.subscribe(handleNextStep);

fetchImage('cat')
