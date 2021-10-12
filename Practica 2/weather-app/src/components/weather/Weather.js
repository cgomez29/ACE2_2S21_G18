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

  
  let dir = "";
  //Norte:0, Oeste:1, Sur:2, Este:3
  console.log(direccion)
  if(direccion === 0){
    dir = "Norte"
  } else if(direccion === 1){
    dir = "Oeste"
  } else if(direccion === 2){
    dir = "Sur"
  } else if(direccion === 3){
    dir = "Este"
  }

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
            <p className="list-p">{`${dir}`}</p>
          </li>
          <li>
            <BsSun />
            <p className="list-p">{`${luz} lux`}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

Weather.propTypes = {
  data: PropTypes.object.isRequired,
};
