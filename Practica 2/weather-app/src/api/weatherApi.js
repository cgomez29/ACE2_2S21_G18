import axios from "axios";

export const weatherApi = axios.create({
  baseURL: "http://localhost:3000",
});