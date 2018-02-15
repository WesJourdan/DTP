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

}

export function fetchCaption(imageUrl) {
  const request = axios({
    method: 'post',
    beforeSend: function(xhrObj){
                 // Request headers
                 xhrObj.setRequestHeader("Content-Type","application/json");
                 xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","{subscription key}");
                },
    url: CAPTION_ROOT_URL,
    data: {
      url: {imageUrl}
    }
  });
  return {
    type: FETCH_CAPTION,
    payload: request
  };
}
