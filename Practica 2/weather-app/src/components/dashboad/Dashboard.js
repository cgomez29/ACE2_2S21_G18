import { useWeather } from "../../hooks/useWeather";
import { Forecast } from "../forecast/Forecast";
import { Loading } from "../loading/Loading";
import { Weather } from "../weather/Weather";

import "./dashboard.css";

export const Dashboard = () => {
  const { data, loading } = useWeather();

  return (
    <div className="content">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Weather data={data} />
          <Forecast data={data} />
        </>
      )}
    </div>
  );
};
