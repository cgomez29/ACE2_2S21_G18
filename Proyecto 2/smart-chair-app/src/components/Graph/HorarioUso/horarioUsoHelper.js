import moment from 'moment';
import { getAVG } from '../../../helpers/servicesAPI';

export const getHorarioUso = async () => {
    const dayList = [];
    const usoList = [];
    const res = await getAVG();
    const { tiempo_promedio, semana } = res.data;
    console.log(tiempo_promedio);
    console.log(semana);
    semana.map(({ dia, uso, fecha }) => {
        dayList.push(getDateByDay(fecha));
        usoList.push(uso);
        // total += uso;
    });
    return {
        diaLista: dayList,
        usoLista: usoList,
        total: tiempo_promedio,
    };
};

// const getDateByDay = (day) => {
//     // FIXME: solo para sabados funciona
//     const dateNow = moment().format('dddd Do MMM YY');
//     switch (day) {
//         case 'domingo':
//             return moment()
//                 .subtract(6, 'days')
//                 .format('dddd Do MMM YY')
//                 .toString();
//         case 'lunes':
//             return moment()
//                 .subtract(5, 'days')
//                 .format('dddd Do MMM YY')
//                 .toString();
//         case 'martes':
//             return moment()
//                 .subtract(4, 'days')
//                 .format('dddd Do MMM YY')
//                 .toString();
//         case 'miercoles':
//             return moment()
//                 .subtract(3, 'days')
//                 .format('dddd Do MMM YY')
//                 .toString();
//         case 'jueves':
//             return moment()
//                 .subtract(2, 'days')
//                 .format('dddd Do MMM YY')
//                 .toString();
//         case 'viernes':
//             return moment()
//                 .subtract(1, 'days')
//                 .format('dddd Do MMM YY')
//                 .toString();
//         case 'sabado':
//             return dateNow.toString();
//         default:
//             return dateNow.toString();
//     }
// };
const getDateByDay = (date) => {
    console.log(date);
    const format = 'dddd Do MMM YY';
    const newDate =
        date !== undefined
            ? moment(date).format(format)
            : moment().format(format);

    return newDate.toString();
};
