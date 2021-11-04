import React from "react";
import { useState } from "react";

export const CountUpTimer = ({ hoursMinSecs, stop }) => {
  const { hours, minutes, seconds } = hoursMinSecs;
  // const [[hrs, mins, secs], setTime] = useState([hours, minutes, seconds]);
  const [flag, setFlag] = useState(true);
  const [hora, setHora] = useState(hours);
  const [min, setMin] = useState(minutes);
  const [se, setSe] = useState(seconds);

  const tick = () => {
    if (stop) {
      if (min === 59 && se === 59) {
        // setTime([hrs + 1, 0, 0]);
        setHora(hora + 1);
        setMin(0);
        setSe(0);
      } else if (se === 59) {
        // setTime([hrs, mins + 1, 0]);
        setHora(hora);
        setMin(min + 1);
        setSe(0);
      } else {
        // setTime([hrs, mins, secs + 1]);
        setHora(hora);
        setMin(min);
        setSe(se + 1);
      }

      if (flag) {
        setHora(hours);
        setMin(minutes);
        setSe(seconds);
        setFlag(false);
      }
    }
  };

  React.useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  });

  return (
    <div>
      <p>{`${hora.toString().padStart(2, "0")}:${min
        .toString()
        .padStart(2, "0")}:${se.toString().padStart(2, "0")}`}</p>
    </div>
  );
};
