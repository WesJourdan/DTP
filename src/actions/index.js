import axios from "axios";
import {googleApiKey} from "../private/api-keys";
import {cx} from "../private/api-keys";
import {azureApiKey} from "../private/api-keys";

export const FETCH_IMAGE = "fetch_image";
export const FETCH_CAPTION = "fetch_caption";
export const INITIAL_SEARCH = "initial_search";
export const RESET_GAME = "reset_game";
export const SET_STEPS = "set_steps"

const IMAGE_ROOT_URL = "https://www.googleapis.com/customsearch/v1?";
const CAPTION_ROOT_URL = `https://eastus.api.cognitive.microsoft.com/vision/v1.0/analyze?visualFeatures=Description`;

export function fetchImage(searchTerm) {
  const request = axios.get(`${IMAGE_ROOT_URL}key=${googleApiKey}&${cx}&q=${searchTerm}&searchType=image&imgSize=large`);
  return {
    type: FETCH_IMAGE,
    payload: request
  };
}


export function fetchCaption(imageUrl) {
  const request = axios({
  method: 'post',
  url: CAPTION_ROOT_URL,
  data: {"url":imageUrl},
  headers: {"Ocp-Apim-Subscription-Key": azureApiKey}
})
  return {
    type: FETCH_CAPTION,
    payload: request
  };
}

export function setNumberOfSteps(numberOfSteps) {
  return {
    type: SET_STEPS,
    payload: numberOfSteps
  }
}

export function initialSearch(searchTerm) {
  return {
    type: INITIAL_SEARCH,
    payload: searchTerm
  }
}

export function resetGame() {
  return {
    type: RESET_GAME,
    payload: null
  }
}
