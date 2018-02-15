import axios from "axios";
// import {googleApiKey, cx} from "../private";

const azureApiKey = '494bc014b5214faf82e4594ba9c944d0';
const googleApiKey = 'AIzaSyA4qQBPVuE0MmhFwVvBszjDNRgxHabksxI';
// cx is the id of our google custom search engine and must be included on all requests.
const cx = 'cx=015567834959964238502:84rnknutzk8';

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
