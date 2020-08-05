import axios from "axios";
import { getToken } from "../Utils/func";

let baseURL;

switch (process.env.NODE_ENV) {
  case "production":
    baseURL = "https://blogmedium123.herokuapp.com/";
    break;
  case "development":
    baseURL = "http://localhost:5000/";
    break;
  default:
    baseURL = "http://localhost:5000/";
}

const token = getToken();
export const api = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    Authorization: token
  }
});
