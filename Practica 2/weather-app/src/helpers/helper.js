import { weatherApi } from "../api/weatherApi";

export const getWeather = async () => {
  return await weatherApi.get("/");
};
