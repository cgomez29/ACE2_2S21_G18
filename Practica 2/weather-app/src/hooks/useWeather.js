import { useEffect, useState } from "react";
import { getWeather } from "../helpers/helper";

export const useWeather = () => {
  const [state, setState] = useState({
    data: {},
    loading: true,
  });

  useEffect(() => {
    setTimeout(() => {
      getWeather().then((res) => {
        setState({
          data: res.data,
          loading: false,
        });
      });
    }, 4000)
    });

  return state;
};
