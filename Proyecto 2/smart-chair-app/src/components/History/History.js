import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';

import React from 'react';
import moment from 'moment';
import { useHistory } from 'react-router';

export const Historial = () => {
    const history = useHistory();
    const handleDateClick = (arg) => {
        const { date } = arg;
        const dateFormat = moment(date).format('MM-DD-YYYY').toString();
        if (dateFormat !== undefined) {
            history.push(`/historial/${dateFormat}`);
        }
    };

    return (
        <div className="animate__animated animate__fadeIn">
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                editable={true}
                selectable={true}
                dateClick={handleDateClick}
            />
        </div>
    );
};
