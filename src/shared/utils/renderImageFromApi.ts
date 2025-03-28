import { API_URL } from "../config";

export function renderImageFromApi(img:string) {

    return new URL(img, API_URL).href

}