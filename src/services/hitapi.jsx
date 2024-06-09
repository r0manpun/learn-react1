import axios from "axios";
import { baseURL } from "../config/config";

if (!baseURL) {
  throw new Error("VITE_BASEURL is not defined in the .env file");
}

export const hitApi = axios.create({
  baseURL: baseURL,
});
