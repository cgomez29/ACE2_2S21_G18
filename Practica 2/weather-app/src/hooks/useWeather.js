import { useEffect, useState } from "react";
import { getWeather } from "../helpers/helper";

export const useWeather = () => {
  const [state, setState] = useState({
    data: {},
    loading: true,
  });

  useEffect(() => {
    getWeather().then((res) => {
      setTimeout(() => {
        setState({
          data: res.data,
          loading: false,
        });
      }, 1000)
    });
  }, []);

  return state;
};
