import React from 'react';
import { useState } from 'react';

export const CountUpTimer = ({ hoursMinSecs, stop }) => {
    const { hours, minutes, seconds } = hoursMinSecs;
    const [[hrs, mins, secs], setTime] = React.useState([0, 0, 0]);
    const [flag, setFlag] = useState(true);
    const tick = () => {
        if (stop) {
            if (mins === 59 && secs === 59) {
                setTime([hrs + 1, 0, 0]);
            } else if (secs === 59) {
                setTime([hrs, mins + 1, 0]);
            } else {
                setTime([hrs, mins, secs + 1]);
            }
        }
    };

    React.useEffect(() => {
        if (flag) {
            setTime([hours, minutes, seconds]);
            setFlag(false);
        }
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });

    return (
        <div>
            <p>{`${hrs.toString().padStart(2, '0')}:${mins
                .toString()
                .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</p>
        </div>
    );
};
