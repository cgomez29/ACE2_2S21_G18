import { getAVG } from '../../../helpers/servicesAPI';

export const getHorarioUso = async () => {
    const dayList = [];
    const usoList = [];
    let total = 0;
    const res = await getAVG();
    const { data } = res.data;
    data.map(({ dia, uso }) => {
        dayList.push(dia);
        usoList.push(uso);
        total += uso;
    });
    return {
        diaLista: dayList,
        usoLista: usoList,
        total: total,
    };
};
