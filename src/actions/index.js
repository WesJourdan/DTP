import axios from "axios";
import googleApiKey from "../private/api-keys.js";
import cx from "../private/api-keys.js";

export const FETCH_IMAGE = "fetch_image";

const ROOT_URL = "https://www.googleapis.com/customsearch/v1?";

export function fetchImage(searchTerm) {
  const request = axios.get(`${ROOT_URL}key=${googleApiKey}&${cx}&q=${searchTerm}&searchType=image`);
  debugger;
  return {
    type: FETCH_IMAGE,
    payload: request
  };
}

fetchImage('cat')
