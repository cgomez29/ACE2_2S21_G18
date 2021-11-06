import moment from 'moment';
import { getHorarioUsoAPI } from '../../../helpers/servicesAPI';

export const getHorarioUso = async () => {
    const dayList = [];
    const usoList = [];
    const res = await getHorarioUsoAPI();
    const { tiempo_total, dias } = res.data;
    dias.map((data) => {
        dayList.push(getDateByDay(data.fecha));
        usoList.push(data.tiempo_total);
    });
    return {
        diaLista: dayList,
        usoLista: usoList,
        total: tiempo_total,
    };
};

const getDateByDay = (date) => {
    const format = 'dddd Do MMM YY';
    const newDate =
        date !== undefined
            ? moment(date).format(format)
            : moment().format(format);

    return newDate.toString();
};
