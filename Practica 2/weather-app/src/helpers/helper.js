import { weatherApi } from '../api/weatherApi';

export const getWeather = async () => {
    return await weatherApi.get('/');
};

export const getStatus = async () => {
    const res = await weatherApi.get('/getStatus');
    const { status } = res.data;

    const newStatus = status.map((data) => {
        return {
            ...data,
            dia: fix_date(data.fecha),
            icono: getIcon(data.visibilidad, data.lluvia, data.calor),
        };
    });

    return newStatus;
};

const fix_date = (date) => {
    const listDate = date.split('/');
    const dateFix = `${listDate[1]}/${listDate[0]}/${listDate[2]}`;
    const date2 = new Date(dateFix);
    return getDayWeek(date2.getDay().toString());
};

const getDayWeek = (number) => {
    switch (number) {
        case '0':
            return 'Domingo';
        case '1':
            return 'Lunes';
        case '2':
            return 'Martes';
        case '3':
            return 'Miércoles';
        case '4':
            return 'Jueves';
        case '5':
            return 'Viernes';
        case '6':
            return 'Sábado';
        default:
            return '';
    }
};
/*
    calor despejado -> far fa-sun
    calor nublado -> fas fa-cloud-sun
    lluvia -> fas fa-cloud-showers-heavy
    lluvia y sol -> fas fa-cloud-sun-rain

*/
const getIcon = (status, lluvia, soleado) => {
    if (lluvia === true && soleado === true) {
        return 'fas fa-cloud-sun-rain';
    } else if (lluvia === true) {
        return 'fas fa-cloud-showers-heavy';
    } else {
        if (status.toLowerCase() === 'nublado') {
            return 'fas fa-cloud-sun';
        }
        return 'far fa-sun';
    }
};
