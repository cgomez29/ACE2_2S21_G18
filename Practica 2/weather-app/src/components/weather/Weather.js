import React from "react";
import PropTypes from "prop-types";
import {
    BsFillCloudDrizzleFill,
    BsSpeedometer2,
    MdOutlineFlag,
    BsSun,
} from "react-icons/all";
import sun from '../../images/sun.svg';

import "./weather.css";

export const Weather = ({ data }) => {
  const { direccion, humedad, luz, temperatura, velocidad } = data;

  return (
    <div className="weather-content">
      <div>
        <h1><img height={50} src={sun} alt="sun" /> Weather</h1>
        <p className="temperatura">{`${temperatura}°C`}</p>
      </div>
      <div className="list-weather">
        <ul className="weather-ul-li">
          <li>
            <BsFillCloudDrizzleFill />
            <p className="list-p">{`${humedad} %`}</p>
          </li>
          <li>
            <BsSpeedometer2 />
            <p className="list-p">{`${velocidad} km/h`}</p>
          </li>
          <li>
            <MdOutlineFlag />
            <p className="list-p">{`${direccion} ?`}</p>
          </li>
          <li>
            <BsSun />
            <p className="list-p">{`${luz} ?`}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

Weather.propTypes = {
  data: PropTypes.object.isRequired,
};
