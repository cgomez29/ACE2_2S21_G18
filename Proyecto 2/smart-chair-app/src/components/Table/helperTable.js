import { getData, setAnalyzedDate } from '../../helpers/servicesAPI';
import moment from 'moment';
export const headers = [
    {
        headerName: 'No',
    },
    {
        headerName: 'Proximidad',
    },
    {
        headerName: 'Peso',
    },
    {
        headerName: 'Fecha',
    },
];

export const bodyContent = [
    {
        proximidad: 1,
        peso: 150,
        fecha: '2021-09-13T20:02:08.243Z',
    },
    {
        proximidad: 2,
        peso: 149,
        fecha: '2021-09-13T20:02:08.243Z',
    },
];
export const getDataCrud = async () => {
    const res = await getData();
    const dataCrudList = res.data.map((data) => ({
        ...data,
        fecha: moment(data.fecha).format('DD/MM/YYYY, h:mm a').toString(),
        peso: data.peso !== undefined ? `${data.peso} kg` : '-',
    }));
    return dataCrudList;
};

export const getDataByDate = async (date) => {
    const res = await setAnalyzedDate(date);
    return res.data.data;
};

export const formatearFecha = (date) => {
    return moment(date).format('LL').toString();
};
